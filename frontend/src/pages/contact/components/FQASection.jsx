'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const faqs = [
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day money-back guarantee. If you’re not completely satisfied with your purchase, we’ll provide a full refund, no questions asked.',
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Standard shipping takes 5-7 business days. We also offer expedited shipping (2-3 days) at checkout. Orders are processed within 24 hours.',
    },
    {
      question: 'Are your products vegan and cruelty-free?',
      answer:
        'Our products are 100% cruelty-free and made with vegan ingredients. We never test on animals and partner only with suppliers who share our values.',
    },
    {
      question: 'Can I use multiple Lumina products together?',
      answer:
        'Yes! Our products are designed to work together. We recommend starting with our 3-step ritual: Cleanser → Serum → Cream for best results.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Currently, we ship to North America and Europe. We’re expanding to more regions soon! Sign up for our newsletter to be notified.',
    },
    {
      question: 'What skin types are your products suitable for?',
      answer:
        'Our formulations are designed for all skin types, including sensitive, oily, combination, and dry skin. Each product contains gentle, effective ingredients.',
    },
  ]

  return (
    <section id="faq">
      <h2 className="text-heading text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-border rounded-lg">
            <button
              onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-background transition text-left"
            >
              <h3 className="text-heading font-semibold">{faq.question}</h3>
              <span className="text-2xl text-primary">
                {expandedFaq === i ? '−' : '+'}
              </span>
            </button>
            {expandedFaq === i && (
              <div className="px-6 py-4 bg-background text-muted-foreground border-t border-border">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}