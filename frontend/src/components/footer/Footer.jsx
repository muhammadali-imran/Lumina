import FooterLinks from './FooterLinks'
import FooterNewsletter from './FooterNewsletter'

const shopLinks = [
  { label: 'Serums', href: '/shop?category=serums' },
  { label: 'Creams', href: '/shop?category=creams' },
  { label: 'Masks', href: '/shop?category=masks' },
  { label: 'Kits', href: '/shop?category=kits' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/contact#faq' },
  { label: 'Returns', href: null }, // static #
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-heading text-2xl font-bold mb-4">Lumina</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Luxury skincare crafted with science and elegance. Experience radiance.
            </p>
          </div>

          {/* Shop Links */}
          <FooterLinks title="Shop" links={shopLinks} />

          {/* Company Links */}
          <FooterLinks title="Company" links={companyLinks} />

          {/* Newsletter */}
          <FooterNewsletter />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>&copy; 2026 Lumina. All rights reserved to <a href= "#" >"Muhammad Ali Imran"</a> </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition">
                Terms of Service
              </a>
              <div className="flex gap-4">
                <a href="#" aria-label="Instagram" className="hover:text-primary transition">
                  IG
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-primary transition">
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}