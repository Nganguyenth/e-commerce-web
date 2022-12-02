import { FlexCol } from '../../components/flex'
import { KRousel } from '../../components/krousel'
import { BASE_SLIDER_PER_VIEW_BP } from '../../constants/AppConstant'
import { deepClone, deepMerge } from '../../utils'
import { FreshProduct } from './frgmt/FreshProduct'

const SLIDER_VIEW_BP = deepMerge(deepClone(BASE_SLIDER_PER_VIEW_BP), {
  640: { slidesPerView: 3 },
  768: { slidesPerView: 4 },
  1024: { slidesPerView: 5 },
  1440: { slidesPerView: 6 }
})

export const ProductSection = () => {
  const items = [
    <FreshProduct img='assets/images/vegetable/fruit/1.jpg' promoPercent={50} rating={3} name='Fresh Plum' />,
    <FreshProduct img='assets/images/vegetable/fruit/2.jpg' promoPercent={40} rating={4} name='Fresh Plum' />,
    <FreshProduct img='assets/images/vegetable/fruit/3.jpg' promoPercent={30} rating={5} name='Fresh Plum' />,
    <FreshProduct img='assets/images/vegetable/fruit/4.jpg' promoPercent={20} rating={2} name='Fresh Plum' />,
    <FreshProduct img='assets/images/vegetable/fruit/5.jpg' promoPercent={50} rating={3} name='Fresh Plum' />,
    <FreshProduct img='assets/images/vegetable/fruit/6.jpg' promoPercent={90} rating={3} name='Fresh Plum' />
  ]
  return (
    <section id='ProductSection' className='pt'>
      <FlexCol className=' section-container product-wrapper slide-6 container'>
        <KRousel
          breakpoints={SLIDER_VIEW_BP}
          items={items}
          swipeModules={['Pagination']}
          pagination={{ clickable: true }}
          spaceBetween={10}
        />
      </FlexCol>
    </section>
  )
}
