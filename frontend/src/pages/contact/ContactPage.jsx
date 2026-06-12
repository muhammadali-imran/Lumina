

import ContactInfo from '@/pages/contact/components/ContactInfo'
import ContactForm from '@/pages/contact/components/ContactForm'
import FAQSection from '@/pages/contact/components/FQASection'

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-heading text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We’re here to help. Reach out to our team—we respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <ContactInfo />
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>

          <FAQSection />
        </div>
      </main>
  )
}