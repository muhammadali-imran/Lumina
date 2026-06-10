
import { useState } from 'react'
import { useProductSort } from '../hooks/useProductSort'

export default function ProductGrid({ products = [] }) {
  const [sortBy, setSortBy] = useState('featured')
  const sortedProducts = useProductSort(products, sortBy)

  if (sortedProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          No products found. Try adjusting your filters.
        </p>
      </div>
    )
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <p className="text-muted-foreground">{sortedProducts.length} products found</p>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="px-4 py-2 border border-border rounded bg-white focus:outline-none focus:border-primary"
        >
          <option value="featured">Sort by: Featured</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {sortedProducts.map((product) => (
          <a key={product.id} href={`/product/${product.id}`} className="block">
            <div className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 h-full flex flex-col">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-heading text-lg font-bold mb-2 group-hover:text-primary transition">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-auto">{product.description}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-heading text-lg font-bold text-primary">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-primary">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}