import { FlexCol } from '../../components/flex'
import { KRousel } from '../../components/krousel'
import { BASE_SLIDER_PER_VIEW_BP } from '../../constants/AppConstant'
import { deepClone, deepMerge } from '../../utils'
import { ArrivalProduct } from './frgmt/ArrivalProduct'

const SLIDER_VIEW_BP = deepMerge(deepClone(BASE_SLIDER_PER_VIEW_BP), {
  640: { slidesPerView: 3 },
  768: { slidesPerView: 4 },
  1024: { slidesPerView: 5 },
  1440: { slidesPerView: 6 }
})

export const NewArrivalSection = () => {
  const items = [
    <ArrivalProduct
      img='assets/images/vegetable/fresh/1.jpg'
      promoPercent={50}
      name='Fresh Beat'
      oldPrice='48.00'
      newPrice='50.00'
      weight1='250 G'
      weight2='500 G'
      rating={4}
    />,
    <ArrivalProduct
      img='assets/images/vegetable/fresh/2.jpg'
      promoPercent={40}
      name='Beautiful Cauliflower'
      oldPrice='20.00'
      newPrice='15.00'
      weight1='1 KG'
      weight2='500 G'
      rating={5}
    />,
    <ArrivalProduct
      img='assets/images/vegetable/fresh/3.jpg'
      promoPercent={50}
      name='Eggplant'
      oldPrice='50.00'
      newPrice='42.00'
      weight1='1 KG'
      weight2='500 G'
      rating={4}
    />,
    <ArrivalProduct
      img='assets/images/vegetable/fresh/4.jpg'
      promoPercent={50}
      name='Red Tomato'
      oldPrice='48.00'
      newPrice='50.00'
      weight1='2 KG'
      weight2='800 G'
      rating={2}
    />,
    <ArrivalProduct
      img='assets/images/vegetable/fresh/5.jpg'
      promoPercent={50}
      name='Organic Onion'
      oldPrice='48.00'
      newPrice='50.00'
      weight1='300 G'
      weight2='500 G'
      rating={3}
    />,
    <ArrivalProduct
      img='assets/images/vegetable/fresh/6.jpg'
      promoPercent={50}
      name='Fresh Organic Ginger Big Size'
      oldPrice='52.00'
      newPrice='50.00'
      weight1='1 KG'
      weight2='500 G'
      rating={4}
    />
  ]
  return (
    <section id='NewArrivalSection' className='ratio_asos pt pb'>
      <FlexCol className='display-flex'>
        <div className='pb title text-center'>
          <h5>Just For You</h5>
          <h2>Fresh Fruits</h2>
        </div>
        <div className='product-wrapper'>
          <KRousel
            breakpoints={SLIDER_VIEW_BP}
            items={items}
            swipeModules={['Pagination']}
            pagination={{ clickable: true }}
          />
        </div>
      </FlexCol>
    </section>
  )
}
