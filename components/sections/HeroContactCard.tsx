'use client'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

// Card treatment per DESIGN.md: opaque Ink, .raised elevation, .bracketed
// diagonal corner marks. No Signal border — that pattern is superseded.
export default function HeroContactCard() {
  const { tr } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Please try again.')
      } else {
        setSubmitted(true)
      }
    } catch {
      setError('Could not send. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full font-barlow text-[15.5px] text-paper placeholder:text-paper/30 bg-paper/[0.05] border border-paper/[0.14] rounded-xl px-[17px] py-[14px] outline-none focus:border-signal/55 focus:bg-paper/[0.08] transition-all duration-200'

  return (
    <div className="bracketed raised bg-ink rounded-lg p-7 lg:p-8">
      <h2 className="font-archivo text-[20px] font-medium text-paper tracking-[-0.02em] mb-[7px]">
        {tr.hero.card.heading}
      </h2>
      <p className="font-barlow text-[14.5px] text-paper/50 leading-[23px] mb-6">
        {tr.hero.card.body}
      </p>

      {submitted ? (
        <div className="py-7 px-5 border border-signal/20 rounded-xl bg-signal/5">
          <p className="font-barlow text-body text-paper/80">{tr.contact.successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[11px]">
          <input
            type="text"
            required
            placeholder={tr.contact.namePlaceholder}
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={inputClass}
          />
          <input
            type="email"
            required
            placeholder={tr.contact.emailPlaceholder}
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={inputClass}
          />
          <input
            type="text"
            placeholder={tr.contact.serviceLabel}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className={inputClass}
          />

          {error && (
            <p className="font-barlow text-[14px] text-beacon/80">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full leading-none font-archivo text-[14px] font-medium uppercase tracking-cta liquid-fill px-6 py-[14px] rounded-xl mt-[6px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending…' : tr.contact.cta}
          </button>
        </form>
      )}

      <a
        href="https://wa.me/97451490825"
        target="_blank"
        rel="noopener noreferrer"
        className="block font-jetbrains text-[9.5px] uppercase tracking-[0.1em] text-paper/35 hover:text-signal transition-colors mt-[14px] text-center"
      >
        {tr.hero.card.whatsapp}
      </a>
    </div>
  )
}
