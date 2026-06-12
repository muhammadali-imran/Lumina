import PropTypes from 'prop-types'
import Header from './header/Header'
import Footer from './footer/footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
