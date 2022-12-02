import { Flex, FlexRow } from '../../components/flex'
import { ImageView } from '../../components/image-view'
import { BannerProduct } from './frgmt/BannerIntroProduct'

export const BannerSection = () => {
  return (
    <section id='BannerInfoSection'>
      <Flex className='banner-section flex-gap no-inline section-container' layout={{ justifyContent: 'space-around' }}>
        <BannerProduct
          img='assets/images/vegetable/banner/1.jpg'
          promoPercent={26}
          title='Lemons'
          content='BUY ONE GET ONE FREE'
        />
        <FlexRow className='collection-banner collection-center'>
          <div className='banner-img'>
            <ImageView src='assets/images/vegetable/percentage.webp' className='bg-img' />
            <div className='contain-banner contain-center bottom-0'>
              <div className='banner-content p-2'>
                <h6 className='theme-color mb-2'>Get Rewarded</h6>
                <h2>Earn 10%</h2>
                <h2>Back Reward</h2>
                <p className='mt-2'>Valid online &amp; in-store with select styles.</p>
                <button className='btn btn-solid-default'>Learn more</button>
              </div>
            </div>
          </div>
        </FlexRow>
        <BannerProduct
          img='assets/images/vegetable/banner/2.jpg'
          promoPercent={26}
          title='Kiwi'
          content='BUY ONE GET ONE FREE'
        />
      </Flex>
    </section>
  )
}
