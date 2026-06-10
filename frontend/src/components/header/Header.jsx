'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import DesktopNav from './DesktopNav'
import CartIcon from './CartIcon'
import MobileMenuButton from './MobileMenuButton'
import MobileNav from './MobileNav'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="text-2xl text-heading font-bold gold-text">
            Lumina
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <CartIcon itemCount={0} />
            <MobileMenuButton
              isOpen={isOpen}
              onClick={() => setIsOpen((state) => !state)}
              aria-expanded={isOpen}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <MobileNav onLinkClick={() => setIsOpen(false)} />}
      </div>
    </header>
  )
}