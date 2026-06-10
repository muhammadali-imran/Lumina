import { useMemo } from 'react'

export function useCartTotals(items) {
  return useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = subtotal > 0 ? 12 : 0
    const tax = +(subtotal * 0.08).toFixed(2)
    const total = +(subtotal + shipping + tax).toFixed(2)
    return { subtotal, shipping, tax, total }
  }, [items])
}
