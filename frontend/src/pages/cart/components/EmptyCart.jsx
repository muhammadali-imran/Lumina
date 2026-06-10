'use client'

import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold mb-4 text-muted-foreground">
        Your cart is empty
      </h2>
      <p className="text-muted-foreground mb-8">
        Discover our luxury skincare collection.
      </p>
      <Link
        to="/shop"
        className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition"
      >
        Continue Shopping
      </Link>
    </div>
  )
}