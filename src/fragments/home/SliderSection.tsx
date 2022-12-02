import { FeatherIcon } from '../../components/icons/Feather'
import { ImageView } from '../../components/image-view'

export const SliderSection = () => {
  return (
    <section id='SliderSection' className='pt-0 poster-section-6'>
      <div className='poster-image slider-for custome-arrow classic-arrow-1'>
        <div>
          <ImageView src='assets/images/vegetable/poster/1.webp' className='img-fluid blur-up lazyload' />
        </div>
        <div>
          <ImageView src='assets/images/vegetable/poster/2.webp' className='img-fluid blur-up lazyload' />
        </div>
        <div>
          <ImageView src='assets/images/vegetable/poster/3.webp' className='img-fluid blur-up lazyload' />
        </div>
      </div>
      <div className='background-circle'>
        <ImageView src='assets/images/vegetable/circle.webp' className='round-circle' />
      </div>
      <div className='slider-nav image-show'>
        <div>
          <div className='poster-img'>
            <ImageView src='assets/images/vegetable/poster/t1.jpg' className='img-fluid blur-up lazyload' />
            <div className='overlay-color'>
              <FeatherIcon type='plus-square' />
            </div>
          </div>
        </div>
        <div>
          <div className='poster-img'>
            <ImageView src='assets/images/vegetable/poster/t2.jpg' className='img-fluid blur-up lazyload' />
            <div className='overlay-color'>
              <FeatherIcon type='plus-square' />
            </div>
          </div>
        </div>
        <div>
          <div className='poster-img'>
            <ImageView src='assets/images/vegetable/poster/t3.jpg' className='img-fluid blur-up lazyload' />
            <div className='overlay-color'>
              <FeatherIcon type='plus-square' />
            </div>
          </div>
        </div>
      </div>
      <div className='left-side-contain'>
        <div className='banner-left'>
          <h4>
            Sale <span className='theme-color'>35% Off</span>
          </h4>
          <h1>
            Fresh &amp; Tasty <span>Corn Cobe</span>
          </h1>
          <p>
            BUY ONE GET ONE <span className='theme-color'>FREE</span>
          </p>
          <h2>
            $79.00
            <span className='theme-color'>
              <del>$65.00</del>
            </span>
          </h2>
          <p className='poster-details'>Lorem Ipsum is simply dummy text of typesetting.</p>
          <div className='banner-btn-grup'>
            <button type='button' className='btn btn-solid-default'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <ImageView src='assets/images/vegetable/percentage.webp' className='slider-background' />
    </section>
  )
}
