import { ComponentType } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MobileMenu } from '../components/mobile-menu'
import { Cart } from '../fragments/cart/client'
import { HomeClient } from '../fragments/home/client'
import { Footer } from '../fragments/layout/footer'
import { Header } from '../fragments/layout/header'
import { ProductDetailClient } from '../fragments/product-detail/client'
import { ListClient } from '../fragments/search/client'

function withLayout<T extends Record<string, unknown>>(Component: ComponentType<T>) {
  return (props: T) => {
    return (
      <>
        <main>
          <Header />
          <MobileMenu />
          <Component {...props} />
        </main>
        <Footer />
      </>
    )
  }
}

const IndexPage = withLayout(HomeClient)
const SearchPage = withLayout(ListClient)
const ProductDetailPage = withLayout(ProductDetailClient)
const CartPage = withLayout(Cart)

export default () => {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/product/:id' element={<ProductDetailPage />} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
  )
}
