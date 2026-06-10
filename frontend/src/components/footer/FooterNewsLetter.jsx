'use client'

import { useState } from 'react'

export default function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <div>
      <h4 className="text-heading font-semibold mb-4">Newsletter</h4>
      <p className="text-sm opacity-80 mb-4">
        Get exclusive offers and skincare tips delivered to your inbox.
      </p>
      <form onSubmit={handleSubscribe} className="space-y-2">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 bg-background text-foreground border border-border rounded text-sm focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition text-sm"
        >
          {subscribed ? 'Subscribed!' : 'Subscribe'}
        </button>
      </form>
    </div>
  )
}