import { useCart } from '@/context/useCart';


export default function OrderSummary({ subtotal, shipping, tax, total }) {
  const { clearCart } = useCart();
  return (
    <div className="bg-background p-8 rounded-lg border border-border h-fit sticky top-32">
      <h2 className="text-heading text-xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4 mb-6 pb-6 border-b border-border">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-semibold">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <span className="text-heading font-bold text-lg">Total</span>
        <span className="text-heading text-xl font-bold text-primary">
          ${total.toFixed(2)}
        </span>
      </div>

      <button 
  onClick={clearCart}
  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition mb-4"
>
  Checkout
</button>


    </div>
  )
}