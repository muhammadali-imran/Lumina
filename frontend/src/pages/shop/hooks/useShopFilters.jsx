import { useMemo, useState } from 'react'
import { useProducts } from '@/context/useProducts'

export function useShopFilters() {
  const { products, categories } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [products, selectedCategory, searchQuery])

  const priceRange = useMemo(() => {
    const prices = filteredProducts.map((product) => product.price)
    if (prices.length === 0) return 'N/A'
    return `$${Math.min(...prices)} - $${Math.max(...prices)}`
  }, [filteredProducts])

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    priceRange,
  }
}
