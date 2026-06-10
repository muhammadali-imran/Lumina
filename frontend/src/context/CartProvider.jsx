import { useEffect, useMemo, useState } from 'react'
import { CartContext } from '@/context/CartContext'

const CART_STORAGE_KEY = 'lumina_cart'

function getInitialCart() {
  if (typeof window === 'undefined') return []
  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(getInitialCart)

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const cartCount = useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items]
  )

  const cartTotals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = subtotal > 0 ? 12 : 0
    const tax = +(subtotal * 0.08).toFixed(2)
    const total = +(subtotal + shipping + tax).toFixed(2)

    return { subtotal, shipping, tax, total }
  }, [items])

  const addItem = (product, quantity = 1) => {
    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id)
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...currentItems, { ...product, quantity }]
    })
  }

  const removeItem = (productId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const updateItemQuantity = (productId, quantity) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    )
  }

  const clearCart = () => setItems([])

  const value = {
    items,
    cartCount,
    cartTotals,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
