// src/components/ShopFilters.jsx
export default function ShopFilters({
  categories = [],
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  priceRange = '',
}) {
  return (
    <div className="sticky top-32 space-y-8">
      {/* Search */}
      <div>
        <h3 className="text-heading font-semibold mb-4">Search</h3>
        <input
          type="text"
          placeholder="Product name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded bg-white focus:outline-none focus:border-primary transition"
        />
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-heading font-semibold mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`block w-full text-left px-3 py-2 rounded transition ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left px-3 py-2 rounded transition capitalize ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range (display only) */}
      <div>
        <h3 className="text-heading font-semibold mb-4">Price Range</h3>
        <p className="text-sm text-muted-foreground">{priceRange}</p>
      </div>
    </div>
  )
}