import { FeatherIcon } from '../../../components/icons/Feather'
import { ImageView } from '../../../components/image-view'

interface BannerCardProduct {
  img: string
  day: string
  month: string
}
export const BlogProduct = (props: BannerCardProduct) => {
  const { img, day, month } = props
  return (
    <div className='product-style-4 ratio2_3'>
      <div className='blog-header'>
        <div className='blog-image'>
          <ImageView src={img} className='img-fluid bg-img blur-up lazyload' alt='' />
          <div className='blog-date gradient-color'>
            <div className='date-hover'>
              <div>
                <h2>{day}</h2>
                <h3>{month}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='blog-footer'>
        <h5 className='theme-color'>New Offer -56% Discount</h5>
        <h4>Fresh</h4>
        <h4 className='brand-name'>Latest Night Lamp From $35</h4>
        <button type='button' className='btn default-theme'>
          <p>Read More</p>
          <FeatherIcon type='chevron-right' />
        </button>
      </div>
    </div>
  )
}
