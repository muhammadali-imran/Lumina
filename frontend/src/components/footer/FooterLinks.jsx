import { Link } from 'react-router-dom'

export default function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="text-heading font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map((link, i) => (
          <li key={i}>
            {link.href ? (
              <Link to={link.href} className="hover:text-primary transition">
                {link.label}
              </Link>
            ) : (
              <a href="#" className="hover:text-primary transition">
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}