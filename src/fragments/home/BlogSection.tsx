import { Flex } from '../../components/flex'
import { KRousel } from '../../components/krousel'
import { BASE_SLIDER_PER_VIEW_BP } from '../../constants/AppConstant'
import { deepClone, deepMerge } from '../../utils'
import { BlogProduct } from './frgmt/BlogProduct'

const SLIDER_VIEW_BP = deepMerge(deepClone(BASE_SLIDER_PER_VIEW_BP), {
  480: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
  1440: { slidesPerView: 3 }
})

export const BlogSection = () => {
  const items = [
    <BlogProduct img='assets/images/vegetable/update/1.jpg' day='16' month='May' />,
    <BlogProduct img='assets/images/vegetable/update/2.jpg' day='16' month='May' />,
    <BlogProduct img='assets/images/vegetable/update/3.jpg' day='16' month='May' />
  ]
  return (
    <section id='BlogSection' className='section-b-space'>
      <Flex className='section-container'>
        <div className='title-3 text-center mt-0'>
          <h2>Our News &amp; Update</h2>
          <h5 className='theme-color'>Our Blog</h5>
        </div>
        <div className='product-wrapper slide-3'>
          <KRousel
            breakpoints={SLIDER_VIEW_BP}
            items={items}
            swipeModules={['Pagination']}
            slidesPerView={3}
            pagination={{ clickable: true, enabled: false }}
            spaceBetween={15}
          />
        </div>
      </Flex>
    </section>
  )
}
