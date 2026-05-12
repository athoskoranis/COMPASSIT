'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

export default function ContactCTA() {
  const { tr } = useLanguage()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    urgency: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleService = (opt: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(opt)
        ? f.services.filter(s => s !== opt)
        : [...f.services, opt],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full font-barlow text-[16px] text-paper placeholder:text-paper/30 bg-paper/[0.05] border border-paper/[0.12] rounded-xl px-5 py-4 outline-none focus:border-signal/50 focus:bg-paper/[0.08] transition-all duration-200'

  return (
    <section id="contact" className="py-24 lg:py-32 relative z-[1]">
      <div className="max-w-content mx-auto px-6 lg:px-20">
        <div className="max-w-[560px] mx-auto text-center">
          <EyebrowLabel className="mb-6 block">{tr.contact.eyebrow}</EyebrowLabel>

          <h2 className="font-archivo font-light text-paper tracking-[-0.04em] text-[48px] md:text-[64px] lg:text-[72px] leading-none mb-6">
            {tr.contact.heading}
          </h2>

          <p className="font-barlow text-body-l text-paper/55 mb-10">
            {tr.contact.body}
          </p>

          {submitted ? (
            <div className="py-8 px-6 border border-signal/20 rounded-xl bg-signal/5">
              <p className="font-barlow text-body-l text-paper/80">{tr.contact.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">

              {/* Name */}
              <input
                type="text"
                required
                placeholder={tr.contact.namePlaceholder}
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />

              {/* Email */}
              <input
                type="email"
                required
                placeholder={tr.contact.emailPlaceholder}
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className={inputClass}
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder={tr.contact.phonePlaceholder}
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className={inputClass}
              />

              {/* Service multi-select — collapsible */}
              <div>
                <button
                  type="button"
                  onClick={() => setServicesOpen(o => !o)}
                  className={[
                    inputClass,
                    'flex items-center justify-between cursor-pointer',
                    form.services.length === 0 ? 'text-paper/30' : 'text-paper',
                  ].join(' ')}
                >
                  <span>
                    {form.services.length === 0
                      ? tr.contact.serviceLabel
                      : `${form.services.length} area${form.services.length > 1 ? 's' : ''} selected`}
                  </span>
                  <ChevronDown
                    size={16}
                    className={['text-paper/30 transition-transform duration-200 flex-shrink-0', servicesOpen ? 'rotate-180' : ''].join(' ')}
                  />
                </button>

                {servicesOpen && (
                  <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {tr.contact.serviceOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleService(opt)}
                        className={[
                          'font-barlow text-[13px] px-3 py-2.5 rounded-xl border text-left transition-all duration-200',
                          form.services.includes(opt)
                            ? 'border-signal/60 bg-signal/10 text-signal'
                            : 'border-paper/[0.12] bg-paper/[0.05] text-paper/40 hover:border-paper/25 hover:text-paper/60',
                        ].join(' ')}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Urgency pills */}
              <div>
                <p className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow mb-2.5">
                  {tr.contact.urgencyLabel}
                </p>
                <div className="flex gap-2">
                  {tr.contact.urgencyOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, urgency: f.urgency === opt ? '' : opt }))}
                      className={[
                        'flex-1 font-barlow text-[14px] py-3 rounded-xl border transition-all duration-200',
                        form.urgency === opt
                          ? 'border-signal/60 bg-signal/10 text-signal'
                          : 'border-paper/[0.12] bg-paper/[0.05] text-paper/40 hover:border-paper/25 hover:text-paper/60',
                      ].join(' ')}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <textarea
                placeholder={tr.contact.messagePlaceholder}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                rows={4}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                className="w-full leading-none font-archivo text-[14px] font-medium uppercase tracking-cta glow-btn px-6 py-3 rounded-xl mt-2"
              >
                <span className="glow-btn-knockout">{tr.contact.cta}</span>
              </button>
            </form>
          )}

          <a
            href="https://wa.me/97451490825"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-archivo text-[14px] font-medium text-paper/40 hover:text-signal transition-colors gap-2 mt-8"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +974 5149 0825
          </a>
        </div>
      </div>
    </section>
  )
}
