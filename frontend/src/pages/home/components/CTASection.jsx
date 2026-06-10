import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-heading text-5xl font-bold mb-6">Ready to Radiate?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of customers experiencing their most luminous skin with Lumina.
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded text-lg hover:opacity-90 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
}