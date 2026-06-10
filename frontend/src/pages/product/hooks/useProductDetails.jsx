import { useMemo } from 'react'
import { useProducts } from '@/context/useProducts'

export function useProductDetails(productId) {
  const { getProductById, products } = useProducts()

  const product = useMemo(() => getProductById(productId), [getProductById, productId])

  const complementaryProducts = useMemo(() => {
    if (!product) return []
    return products.filter(
      (item) => item.id !== product.id && item.category === product.category
    )
  }, [product, products])

  return { product, complementaryProducts }
}
