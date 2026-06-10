import { Link } from 'react-router-dom'

export default function ComplementaryProducts({ products }) {
  return (
    <section>
      <h2 className="text-heading text-3xl font-bold mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((relatedProduct) => (
          <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
            <div className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="relative h-60 overflow-hidden bg-muted">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-heading font-bold mb-2 group-hover:text-primary transition">
                  {relatedProduct.name}
                </h3>
                <p className="text-primary font-bold">${relatedProduct.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}