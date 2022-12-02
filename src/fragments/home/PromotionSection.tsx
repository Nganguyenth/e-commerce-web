import { Flex, FlexRow } from '../../components/flex'
import { FeatherIcon } from '../../components/icons/Feather'
import { ImageView } from '../../components/image-view'
import { TimmerBanner } from './frgmt/TimerBanner'

export const PromoSection = () => {
  return (
    <section id='PromotionSection' className='ratio2_1 section-b-space'>
      <Flex className='section-container'>
        <FlexRow className='timer-banner text-center '>
          <ImageView src='assets/images/vegetable/percentage.webp' className='bg-img blur-up lazyload' />
          <ImageView src='assets/images/vegetable/1234.png' className='mg-fluid veg-image' />
          <ImageView src='assets/images/vegetable/circle.webp' className='round-circle' />
          <div className='coupon-code theme-color'>DGR548548</div>
          <div className='discount-offer'>
            <h5>
              New Festival Offer
              <span className='theme-color'>
                70% OFF
                <span className='wishlist-icon mt-2'>
                  <FeatherIcon type='heart' />
                </span>
              </span>
            </h5>
          </div>
          <TimmerBanner />
          <div className='banner-btn-grup'>
            <button type='button' className='btn btn-solid-default'>
              Shop Now
            </button>
          </div>

          <div className='social-media'>
            <div className='social-icon'>
              <ImageView src='assets/images/social-icon/1.png' className='img-fluid blur-up lazyload' skipSrcSet />
              <h6>Facebook</h6>
            </div>

            <div className='social-icon'>
              <ImageView src='assets/images/social-icon/2.png' className='img-fluid blur-up lazyload' skipSrcSet />
              <h6>Instagram</h6>
            </div>

            <div className='social-icon'>
              <ImageView src='assets/images/social-icon/3.png' className='img-fluid blur-up lazyload' skipSrcSet />

              <h6>Twitter</h6>
            </div>
          </div>
        </FlexRow>
        <FlexRow className='collection-banner text-center collection-center'>
          <ImageView src='assets/images/vegetable/offer/2.jpg' className='bg-img blur-up lazyload' />
          <div className='collection-banner-content'>
            <h6 className='theme-color mb-2'>New Headphone</h6>
            <h2>50% Cash</h2>
            <h2>Back Reward</h2>
            <p className='mt-2 mb-0 font-light'>Limited offer</p>
            <p className='font-light mb-0'>Buy now!!</p>
            <button type='button' className='btn btn-solid-default mt-4'>
              Shop now
            </button>
          </div>
        </FlexRow>
      </Flex>
    </section>
  )
}
