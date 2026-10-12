import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Visitor text goes into an HTML email, so it is escaped first: unescaped, any
// submission could put its own links and markup in front of whoever reads it.
const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

// The forms send these two fields from lib/spamGuard.tsx. A person cannot
// fill the hidden field, and cannot type a name and an email in under three
// seconds; a script posting here directly sends no fill time at all.
const MIN_FILL_MS = 3000

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { company, phone, services, urgency } = body
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const message = String(body.message ?? '')

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }
    if (!EMAIL.test(email) || name.length > 200 || message.length > 10000) {
      return NextResponse.json({ error: 'Please check your details and try again.' }, { status: 400 })
    }

    // A failed bot check gets the same answer as a real send, so the bot has
    // nothing to adjust to. It is logged so the volume stays visible.
    const elapsed = Number(body.elapsedMs)
    if (body.url_confirm || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
      console.warn('Contact form: dropped as bot', {
        honeypot: Boolean(body.url_confirm),
        elapsedMs: body.elapsedMs ?? null,
      })
      return NextResponse.json({ ok: true })
    }

    await transporter.sendMail({
      from: `"Compass ITS Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New enquiry from ${name.replace(/[\r\n]+/g, ' ').slice(0, 120)}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0B0E10">
          <h2 style="margin:0 0 24px;font-size:22px">New enquiry — Compass ITS</h2>

          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;width:140px;color:#666;font-size:14px">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${esc(name)}</td></tr>
            ${company ? `
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Company</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${esc(company)}</td></tr>` : ''}
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">
                  <a href="mailto:${esc(email)}" style="color:#2BB3E6">${esc(email)}</a></td></tr>
            ${phone ? `
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${esc(phone)}</td></tr>` : ''}
            ${services?.length ? `
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Services</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${esc([].concat(services).join(', '))}</td></tr>` : ''}
            ${urgency ? `
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Timeline</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${esc(urgency)}</td></tr>` : ''}
          </table>

          ${message ? `
          <div style="margin-top:24px">
            <p style="margin:0 0 8px;color:#666;font-size:14px">Message</p>
            <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(message)}</p>
          </div>` : ''}

          <hr style="margin:32px 0;border:none;border-top:1px solid #eee">
          <p style="margin:0;font-size:12px;color:#999">Sent from compass-its.com contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
  }
}
