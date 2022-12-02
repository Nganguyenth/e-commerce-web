import { Flex, FlexRow } from '../../components/flex'
import { FeatherIcon } from '../../components/icons/Feather'
import { ImageView } from '../../components/image-view'

export const PromoCodeSection = () => {
  return (
    <section className='code-section pt-0 overlay-color'>
      <div className='overlay-color'>
        <ImageView src='assets/images/vegetable/852.png' className='overlay-img' />
        <Flex className='section-container code-section-wrap ' layout={{ justifyContent: 'space-between' }}>
          <FlexRow>
            <div className='code-contain'>
              <div className='code-image'>
                <ImageView
                  src='assets/images/vegetable/percent.png'
                  className='img-fluid blur-up lazyload'
                  alt=''
                  skipSrcSet
                />
                <FeatherIcon type='percent' className='discount' />
              </div>
              <h6>
                30% Offer Today First 50 Customer : USE PROMO CODE
                <span>VEG45652</span>
              </h6>
            </div>
          </FlexRow>
          <FlexRow>
            <div className='text-center'>
              <button type='button' className='btn-code btn'>
                OPEN PRODUCT PAGE
              </button>
            </div>
          </FlexRow>
        </Flex>
      </div>
    </section>
  )
}
