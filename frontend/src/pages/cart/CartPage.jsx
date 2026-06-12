
import { Link } from 'react-router-dom'
import { useCart } from '@/context/useCart'
import { useCartTotals } from '@/pages/cart/hooks/useCartTotals'
import EmptyCart from '@/pages/cart/components/EmptyCart'
import OrderSummary from '@/pages/cart/components/OrderSummary'
import CartItems from '@/pages/cart/components/CartItems'

export default function CartPage() {
  const { items: cartItems } = useCart()
  const { subtotal, shipping, tax, total } = useCartTotals(cartItems)

  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-heading text-4xl font-bold mb-12">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <CartItems items={cartItems} />
              </div>
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
              />
            </div>
            
          )}
          <div className="mt-12 text-center">
            <Link
        to="/shop"
        className="block text-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-primary-foreground transition"
      >
        Continue Shopping
      </Link>
      </div>

        </div>
      </main>
  )
}