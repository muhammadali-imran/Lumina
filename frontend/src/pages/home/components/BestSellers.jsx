import { Link } from 'react-router-dom'

export default function BestSellers({ products }) {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-heading text-5xl font-bold text-center mb-16">Bestsellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="relative h-80 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-heading text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-heading text-xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-primary">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-primary-foreground transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}