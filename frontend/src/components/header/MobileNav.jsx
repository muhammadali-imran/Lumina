import { NavLink } from 'react-router-dom'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function MobileNav({ onLinkClick }) {
  return (
    <nav className="md:hidden pt-4 pb-2 border-t border-border mt-4 space-y-3">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `block text-sm font-medium transition py-2 ${isActive ? 'text-primary' : 'hover:text-primary'}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}