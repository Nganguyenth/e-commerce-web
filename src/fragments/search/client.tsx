import { BreadCrumb } from '../../components/breadcrumb'
import { SubscribeSection } from '../home/SubscribeSection'
import { ShopSection } from './ShopSection'

export const ListClient = () => {
  return (
    <>
      <BreadCrumb title='Shopping List' />
      <ShopSection />
      <SubscribeSection />
    </>
  )
}
