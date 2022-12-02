import { ImageView } from '../../components/image-view'

const ImageSlider = (props: { src: string; label: string }) => {
  return (
    <div className='image-slider'>
      <div className='image-product'>
        <ImageView src={props.src} className='w-100 blur-up lazyload' alt='' />
        <div className='image-contain'>
          <h5>{props.label}</h5>
        </div>
      </div>
    </div>
  )
}

export const ListSliderSection = () => {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='slide-7-1 product-wrapper slick-lg-space'>
              <ImageSlider src='assets/images/fashion/category/5.jpg' label='tops' />
              <ImageSlider src='assets/images/fashion/category/6.jpg' label='bottom' />
              <ImageSlider src='assets/images/fashion/category/7.jpg' label='Bags' />
              <ImageSlider src='assets/images/fashion/category/8.jpg' label='Denims' />
              <ImageSlider src='assets/images/fashion/category/9.jpg' label='Hoddies' />
              <ImageSlider src='assets/images/fashion/category/10.jpg' label='Footwear' />
              <ImageSlider src='assets/images/fashion/category/11.jpg' label='Makeup' />
              <ImageSlider src='assets/images/fashion/category/12.jpg' label='Accessories' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
