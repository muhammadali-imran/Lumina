'use client'

import { Link, useParams } from 'react-router-dom'
import { useProductDetails } from '@/pages/product/hooks/useProductDetails'
import ProductHero from '@/pages/product/components/ProductHero'
import ProductReviews from '@/pages/product/components/ProductReviews'
import ComplementaryProducts from '@/pages/product/components/ComplementaryProduct'

export default function ProductPage() {
  const params = useParams()
  const id = params?.id || ''
  const { product, complementaryProducts } = useProductDetails(id)

  if (!product) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-primary hover:underline">
          Back to Shop
        </Link>
      </main>
    )
  }

  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <div className="mb-8 flex gap-2 text-sm text-muted-foreground">
            <Link to="/shop" className="hover:text-primary transition">
              Shop
            </Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <ProductHero product={product} />
          <ProductReviews />
          {complementaryProducts.length > 0 && (
            <ComplementaryProducts products={complementaryProducts.slice(0, 3)} />
          )}
        </div>
      </main>
  )
}