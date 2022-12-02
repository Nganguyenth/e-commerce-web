import { AddToCartIcon } from '../../../components/icons/Feather'
import { ImageView } from '../../../components/image-view'
import { Rating } from '../../../components/rating'

interface Item {
  img: string
  promoPercent: number
  rating: number
  name: string
}
export const FreshProduct = (props: Item) => {
  return (
    <div className='product-box product-box6'>
      <div className='img-wrapper squre-image'>
        <div className='front-img'>
          <ImageView src={props.img} />
        </div>
        <div className='cart-info cart-bag'>
          <AddToCartIcon pid={1} img={props.img} price={1} />
        </div>
      </div>
      <div className='product-detail'>
        <a>
          <h5>{props.name}</h5>
        </a>
        <Rating score={props.rating} />
      </div>
    </div>
  )
}
