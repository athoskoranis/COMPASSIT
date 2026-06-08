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

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, services, urgency, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"Compass ITS Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0B0E10">
          <h2 style="margin:0 0 24px;font-size:22px">New enquiry — Compass ITS</h2>

          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;width:140px;color:#666;font-size:14px">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${name}</td></tr>
            ${company ? `
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Company</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${company}</td></tr>` : ''}
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">
                  <a href="mailto:${email}" style="color:#2BB3E6">${email}</a></td></tr>
            ${phone ? `
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${phone}</td></tr>` : ''}
            ${services?.length ? `
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Services</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${services.join(', ')}</td></tr>` : ''}
            ${urgency ? `
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px">Timeline</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${urgency}</td></tr>` : ''}
          </table>

          ${message ? `
          <div style="margin-top:24px">
            <p style="margin:0 0 8px;color:#666;font-size:14px">Message</p>
            <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</p>
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
