import { Flex, FlexCol } from '../../components/flex'
import { ImageView } from '../../components/image-view'
import { Rating } from '../../components/rating'
import { BannerCard } from './frgmt/BannerProduct'

export const BannerOfferSection = () => {
  return (
    <section id='BannerSection' className='tab-section'>
      <div className='titleHeader-section title text-center'>
        <h5>Special Offer</h5>
        <h2>Hurry up!</h2>
      </div>
      <div className='tab-wrap'>
        <div className='tab-content' id='myTabContent'>
          <Flex className='section-container offer-wrap product-style-1'>
            <FlexCol className='product-list'>
              <BannerCard
                img='assets/images/vegetable/offer-1/1.png'
                rating={4}
                oldPrice='48.00'
                newPrice='50.00'
                name='Fresh And Tasty Red'
              />
              <BannerCard
                img='assets/images/vegetable/offer-1/2.png'
                rating={5}
                oldPrice='48.00'
                newPrice='50.00'
                name='Rad Testy Fresh Tomato'
              />
              <BannerCard
                img='assets/images/vegetable/offer-1/3.png'
                rating={3}
                oldPrice='48.00'
                newPrice='50.00'
                name='Standard Come'
              />
            </FlexCol>
            <FlexCol className='product-banner'>
              {/* bg-image */}
              <div className='product-box'>
                <ImageView src='assets/images/vegetable/percentage.webp' className='img-background' alt='' />
                <div className='img-wrapper bg-trans'>
                  <div className='label-block'>
                    <span className='label label-black'>New</span>
                  </div>
                  <a>
                    <ImageView
                      src='assets/images/vegetable/offer-1/big.png'
                      className='img-fluid blur-up lazyloaded'
                      alt=''
                    />
                  </a>
                </div>
                <div className='product-details text-center'>
                  <h3 className='theme-color'>
                    $600.00
                    <span className='font-light ml-1'>$945.00</span>
                  </h3>
                  <a className='font-default' tabIndex={-1}>
                    <h5 className='mx-auto'>Juicy Lemone</h5>
                  </a>
                  <Rating score={2} />
                </div>
              </div>
            </FlexCol>
            <FlexCol className='product-list'>
              <BannerCard
                img='assets/images/vegetable/offer-1/4.png'
                rating={2}
                oldPrice='48.00'
                newPrice='50.00'
                name='Fresh And Tasty Red'
              />
              <BannerCard
                img='assets/images/vegetable/offer-1/5.png'
                rating={4}
                oldPrice='48.00'
                newPrice='50.00'
                name='Fresh And Tasty Red'
              />
              <BannerCard
                img='assets/images/vegetable/offer-1/6.png'
                rating={2}
                oldPrice='48.00'
                newPrice='50.00'
                name='Fresh And Tasty Red'
              />
            </FlexCol>
          </Flex>
        </div>
      </div>
    </section>
  )
}
