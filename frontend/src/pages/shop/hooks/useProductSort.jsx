import { useMemo } from 'react'

export function useProductSort(products, sortBy) {
  return useMemo(() => {
    if (!products.length) return []

    const sorted = [...products]

    switch (sortBy) {
      case 'price_asc':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price_desc':
        return sorted.sort((a, b) => b.price - a.price)
      case 'newest':
        // Assuming each product has a `createdAt` timestamp or date
        return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      case 'featured':
      default:
        // Use a `featured` flag or keep original order
        return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
  }, [products, sortBy])
}