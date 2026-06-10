import { NavLink } from 'react-router-dom'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          className={({ isActive }) =>
            `text-sm font-medium transition ${isActive ? 'text-primary' : 'hover:text-primary'}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}