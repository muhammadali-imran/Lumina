/*
  There is some Tailwind CSS problem.
  It should be tested.
*/

import { Link } from 'react-router-dom'

export default function CartIcon({ itemCount = 0 }) {
  return (
    <Link
      to="/cart"
      className="relative p-3 hover:text-primary transition"
      aria-label="Shopping cart"
    >
      <svg
        className="w-8 h-8"
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 11.346a1 1 0 00.97 1.217h12.638a1 1 0 00.97-1.216L17 13M9 5a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
        {itemCount}
      </span>
    </Link>
  )
}