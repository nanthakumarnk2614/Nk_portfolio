import { useState } from 'react'
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { profile } from '../data/portfolioData'

const CONTACT_EMAIL = 'nantha2614@gmail.com'

const AUTO_REPLY = `Greetings!

Thanks for reaching out. We can connect soon and bring your vision into life.

Best Regards
NK (Nantha Kumar)`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `Portfolio contact from ${form.name}`,
          _template: 'table',
          _replyto: form.email,
          _autoresponse: AUTO_REPLY,
        }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || 'Unable to send message right now.')
      }

      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  const phoneHref = profile.whatsapp || ''

  return (
    <section id="contact" className="relative py-24 sm:py-28 bg-ink-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-14 items-start">
          <div>
            <p className="text-sm text-violet-400 font-medium mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              Let's build something impactful. Bring your vision to life with me.
            </h2>
            <p className="text-mist text-base leading-relaxed mb-8 max-w-sm">
              Have an idea, project, or opportunity? Let's connect and build something meaningful.
            </p>

            <div className="space-y-3">
              <ContactLink href={`mailto:${CONTACT_EMAIL}`} icon={<Mail size={16} />} label={CONTACT_EMAIL} />
              <ContactLink href={phoneHref} icon={<Phone size={16} />} label={`${profile.phone} · WhatsApp`} />
              <ContactLink href={profile.linkedin} icon={<Linkedin size={16} />} label="a-nanthakumar-2614nk" />
              <ContactLink href={profile.github} icon={<Github size={16} />} label="GitHub" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border-glow bg-ink-900/50 p-6 sm:p-8 space-y-5">
            <Field label="Name" name="name" value={form.name} onChange={handleChange} disabled={status === 'sending'} />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              disabled={status === 'sending'}
            />
            <Field
              label="Contact number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              disabled={status === 'sending'}
            />
            <Field
              label="Message"
              name="message"
              as="textarea"
              value={form.message}
              onChange={handleChange}
              disabled={status === 'sending'}
            />

            {status === 'success' && (
              <p className="flex items-start gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3 text-sm text-violet-200">
                <CheckCircle2 size={16} className="mt-0.5 flex-none" />
                Message sent. You'll also receive a thank-you email shortly.
              </p>
            )}

            {status === 'error' && (
              <p className="flex items-start gap-2 rounded-xl border border-ember-500/30 bg-ember-500/10 px-4 py-3 text-sm text-ember-400">
                <AlertCircle size={16} className="mt-0.5 flex-none" />
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="focus-ring w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-ember-500 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === 'sending' ? (
                <>
                  Sending
                  <Loader2 size={15} className="animate-spin" />
                </>
              ) : (
                <>
                  Send message
                  <Send size={15} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text', as = 'input', disabled = false }) {
  const Tag = as
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-mist">{label}</span>
      <Tag
        name={name}
        type={as === 'input' ? type : undefined}
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
        rows={as === 'textarea' ? 4 : undefined}
        className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-mist/50 outline-none transition-colors focus:border-violet-500/50 disabled:opacity-60"
      />
    </label>
  )
}

function ContactLink({ href, icon, label }) {
  if (!href || !label) return null
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="focus-ring flex items-center gap-3 rounded-xl border-glow px-4 py-3 text-sm text-mist transition-colors hover:text-white hover:border-violet-500/40"
    >
      {icon}
      {label}
    </a>
  )
}
