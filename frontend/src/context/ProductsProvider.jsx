import { useMemo } from 'react'
import { ProductsContext } from '@/context/ProductsContext'
import { products as initialProducts } from '@/data/products'

export function ProductsProvider({ children }) {
  const value = useMemo(() => {
    const categories = Array.from(new Set(initialProducts.map((product) => product.category)))

    return {
      products: initialProducts,
      categories,
      getProductById: (id) => initialProducts.find((product) => product.id === id),
      getProductsByCategory: (category) => initialProducts.filter((product) => product.category === category),
    }
  }, [])

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
