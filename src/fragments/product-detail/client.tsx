import { BreadCrumb } from '../../components/breadcrumb'
import { ProductDetailSection } from './ProductDetailSection'

export const ProductDetailClient = () => {
  return (
    <>
      <BreadCrumb title='Product Detail' />
      <ProductDetailSection />
    </>
  )
}
