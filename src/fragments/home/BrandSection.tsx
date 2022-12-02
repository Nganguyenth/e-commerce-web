import { ImageView } from '../../components/image-view'
import { KRousel } from '../../components/krousel'
import { BASE_SLIDER_PER_VIEW_BP } from '../../constants/AppConstant'
import { deepClone, deepMerge } from '../../utils'

const SLIDER_VIEW_BP = deepMerge(deepClone(BASE_SLIDER_PER_VIEW_BP), {
  480: { slidesPerView: 3 },
  768: { slidesPerView: 4 },
  1024: { slidesPerView: 5 },
  1440: { slidesPerView: 6 }
})

export const BrandSection = () => {
  const items = [
    <ImageView src='assets/images/brand/1.png' className='img-fluid blur-up lazyload' alt='brand logo' skipSrcSet />,
    <ImageView src='assets/images/brand/2.png' className='img-fluid blur-up lazyload' alt='brand logo' skipSrcSet />,
    <ImageView src='assets/images/brand/3.png' className='img-fluid blur-up lazyload' alt='brand logo' skipSrcSet />,
    <ImageView src='assets/images/brand/4.png' className='img-fluid blur-up lazyload' alt='brand logo' skipSrcSet />,
    <ImageView src='assets/images/brand/5.png' className='img-fluid blur-up lazyload' alt='brand logo' skipSrcSet />,
    <ImageView src='assets/images/brand/6.png' className='img-fluid blur-up lazyload' alt='brand logo' skipSrcSet />,
    <ImageView src='assets/images/brand/4.png' className='img-fluid blur-up lazyload' alt='brand logo' skipSrcSet />
  ]
  return (
    <section id='BrandSection' className='section-b-space'>
      <div className='section-container'>
        <div className='brand-slider'>
          <KRousel
            breakpoints={SLIDER_VIEW_BP}
            items={items}
            swipeModules={['Pagination']}
            slidesPerView={6}
            loop={true}
            pagination={{ clickable: true, enabled: false }}
            spaceBetween={15}
          />
        </div>
      </div>
    </section>
  )
}
