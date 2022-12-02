import { Flex, FlexRow } from '../../components/flex'
import { KRousel } from '../../components/krousel'
import { BASE_SLIDER_PER_VIEW_BP } from '../../constants/AppConstant'
import { deepClone, deepMerge } from '../../utils'
import { ArrivalCategory } from './frgmt/ArrivalCategory'

const SLIDER_VIEW_BP = deepMerge(deepClone(BASE_SLIDER_PER_VIEW_BP), {
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
  1440: { slidesPerView: 4, spaceBetween: 25 }
})

const items = [
  <ArrivalCategory
    imgBg='assets/images/vegetable/category/1.jpg'
    img='assets/images/vegetable/category/1.png'
    category='Citrus'
  />,
  <ArrivalCategory
    imgBg='assets/images/vegetable/category/2.jpg'
    img='assets/images/vegetable/category/2.png'
    category='Stone Fruit'
  />,
  <ArrivalCategory
    imgBg='assets/images/vegetable/category/3.jpg'
    img='assets/images/vegetable/category/3.png'
    category='Tropical'
  />,
  <ArrivalCategory
    imgBg='assets/images/vegetable/category/4.jpg'
    img='assets/images/vegetable/category/4.png'
    category='Berries'
  />
]

export const NewArrivalCategory = () => {
  return (
    <section id='NewArrivalCategory' className='ratio_asos category-style-3'>
      <Flex className='section-container' noFlex>
        <FlexRow>
          <div className='titleHeader-section title text-center'>
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
        </FlexRow>
      </Flex>
    </section>
  )
}
