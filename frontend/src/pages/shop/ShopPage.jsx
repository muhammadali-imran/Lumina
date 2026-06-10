import ShopFilters from '@/pages/shop/components/ShopFilters'
import ProductGrid from '@/pages/shop/components/ProductGrid'
import { useShopFilters } from '@/pages/shop/hooks/useShopFilters'

export default function ShopPage() {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    priceRange,
  } = useShopFilters()

  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h1 className="text-heading text-5xl font-bold mb-4">Our Collection</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover our curated selection of luxury skincare products, each formulated to
              deliver visible results and pure indulgence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <ShopFilters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                priceRange={priceRange}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
  )
}