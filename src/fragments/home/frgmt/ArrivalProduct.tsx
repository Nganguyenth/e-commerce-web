import { ImageView } from '../../../components/image-view'
import { ProductAction } from '../../../components/product-action'
import { Rating } from '../../../components/rating'

interface ArrivalProductProps {
  img: string
  pid?: string | number
  promoPercent: number
  name: string
  oldPrice: string
  newPrice: string
  weight1: string
  weight2: string
  rating: number
}
export const ArrivalProduct = (props: ArrivalProductProps) => {
  return (
    <div className='product-box product-item ' style={{ width: '100%' }}>
      <div className='img-wrapper hover-image'>
        <a tabIndex={0} className='bg-size blur-up lazyloaded' style={{ width: '100%', height: '100%' }}>
          <ImageView src={props.img} className='product-item-img' />
        </a>
        <ProductAction img={props.img} />
      </div>
      <div className='product-details text-center'>
        <h3 className='theme-color'>
          ${props.oldPrice}
          <span className='font-light'>${props.newPrice}</span>
        </h3>
        <a className='font-default' tabIndex={0}>
          <h5>{props.name}</h5>
        </a>
        <ul className='size-box'>
          <li>{props.weight1}</li>
          <li>{props.weight2}</li>
        </ul>
        <Rating score={props.rating} />
      </div>
    </div>
  )
}
