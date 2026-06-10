'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="px-6 py-3 border border-border rounded bg-white focus:outline-none focus:border-primary transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="px-6 py-3 border border-border rounded bg-white focus:outline-none focus:border-primary transition"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
          className="w-full px-6 py-3 border border-border rounded bg-white focus:outline-none focus:border-primary transition"
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={6}
          className="w-full px-6 py-3 border border-border rounded bg-white focus:outline-none focus:border-primary transition resize-none"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition"
        >
          {submitted ? 'Message Sent! ✓' : 'Send Message'}
        </button>
      </form>
      {submitted && (
        <p className="text-center text-sm text-primary mt-4">
          Thank you! We’ll be in touch soon.
        </p>
      )}
    </>
  )
}