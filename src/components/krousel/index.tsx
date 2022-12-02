import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

interface KRouselProps {
  items: JSX.Element[]
  swipeModules: Array<'Navigation' | 'Pagination' | 'Scrollbar' | 'A11y'>
}
export const KRousel = (props: SwiperProps & KRouselProps) => {
  const { swipeModules, items = [], ...rest } = props
  const modules = swipeModules.map((m) => {
    switch (m) {
      case 'A11y':
        return A11y
      case 'Navigation':
        return Navigation
      case 'Scrollbar':
        return Scrollbar
      default:
        return Pagination
    }
  })
  return (
    <Swiper {...rest} modules={modules} onSlideChange={() => console.log('slide change')}>
      {items.map((item, idx) => (
        <SwiperSlide key={idx}>{item}</SwiperSlide>
      ))}
    </Swiper>
  )
}
