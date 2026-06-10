import { Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartProvider'
import { ProductsProvider } from '@/context/ProductsProvider'
import Layout from './components/Layout'
import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import ProductPage from './pages/product/[id]/ProductPage'
import CartPage from './pages/cart/CartPage'
import ContactPage from './pages/contact/ContactPage'
import AboutPage from './pages/about/AboutPage'

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </ProductsProvider>
  )
}

export default App