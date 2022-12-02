import { FlexRow } from '../../../components/flex'
import { FeatherIcon } from '../../../components/icons/Feather'
import { ImageView } from '../../../components/image-view'
interface Item {
  img: string
  title: string
  content: string
  promoPercent: number
}
export const BannerProduct = (props: Item) => {
  return (
    <FlexRow className='collection-banner text-center'>
      <div className='banner-img'>
        <ImageView src={props.img} className='bg-img' />
        <div className='banner-detail'>
          <a className='heart-wishlist'>
            <FeatherIcon type='heart' />
          </a>
          <span className='font-dark-30'>
            {props.promoPercent}% <span>OFF</span>
          </span>
        </div>
        <a className='contain-banner contain-center bottom-0'>
          <div className='banner-content with-bg'>
            <h2 className='mb-2'>{props.title}</h2>
            <span>{props.content}</span>
          </div>
        </a>
      </div>
    </FlexRow>
  )
}
