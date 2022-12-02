import { ImageView } from '../../../components/image-view'
import { Rating } from '../../../components/rating'

interface BannerCardProduct {
  img: string
  rating: number
  oldPrice: string
  newPrice: string
  name: string
}
export const BannerCard = (props: BannerCardProduct) => {
  const { img, rating, newPrice, oldPrice, name } = props
  return (
    <div className='product-box product-box-4'>
      <div className='img-wrapper bg-trans'>
        <a href='product-left-sidebar.html' className='text-center'>
          <ImageView src={img} className='product-item-img' />
        </a>
      </div>
      <div className='product-details'>
        <h3 className='theme-color'>
          ${newPrice}
          <span className='font-light'>${oldPrice}</span>
        </h3>
        <a href='product-left-sidebar.html' className='font-default'>
          <h5>{name}</h5>
        </a>
        <Rating score={rating} />
      </div>
    </div>
  )
}
