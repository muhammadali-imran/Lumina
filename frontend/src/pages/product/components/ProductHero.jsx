import { useCart } from '@/context/useCart';
import { useState } from 'react'


export default function ProductHero({ product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart();
  const handleClick = () => {
  addItem(product, quantity);
};

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
      {/* Product Image */}
      <div className="flex items-center justify-center bg-muted rounded-lg overflow-hidden h-96 lg:h-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-heading text-4xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl font-bold text-primary">{product.rating}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-primary">
                {i < Math.floor(product.rating) ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span className="text-muted-foreground">({product.reviews} reviews)</span>
        </div>

        <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.longDescription}</p>

        {/* Key Benefits */}
        <div className="mb-8">
          <h3 className="text-heading font-semibold text-lg mb-3">Key Benefits</h3>
          <ul className="space-y-2">
            {product.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="mb-8 flex gap-4">
          <div className="flex items-center border border-border rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition"
            >
              −
            </button>
            <span className="px-6 py-2 font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition"
            >
              +
            </button>
          </div>
          <button 
            onClick={handleClick}
            className="flex-1 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded border-2 border-primary shadow-sm hover:opacity-90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          >
            Add to Cart
          </button>
        </div>

        {/* Usage Instructions */}
        <div className="mb-8 p-4 bg-background rounded-lg border border-border">
          <h4 className="text-heading font-semibold mb-2">How to Use</h4>
          <p className="text-sm text-muted-foreground">{product.usage}</p>
        </div>

        {/* Ingredients */}
        <div>
          <h3 className="text-heading font-semibold text-lg mb-3">Ingredients</h3>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ingredient, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}