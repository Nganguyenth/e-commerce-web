import { BreadCrumb } from '../../components/breadcrumb'
import { SubscribeSection } from '../home/SubscribeSection'
import { CartList } from './CartList'
import { CheckoutCart } from './checkout'
import { Countdown } from './countdown'

export const Cart = () => {
  return (
    <>
      <BreadCrumb title='Cart' />
      <Countdown />
      <CartList />
      <CheckoutCart />
      <SubscribeSection />
    </>
  )
}
