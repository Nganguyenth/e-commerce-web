import { Flex, FlexRow } from '../../../components/flex'
import { FeatherIcon } from '../../../components/icons/Feather'
import { ImageView } from '../../../components/image-view'

const infoProd = {
  thumbnails: [
    'assets/images/fashion/1.jpg',
    'assets/images/fashion/2.jpg',
    'assets/images/fashion/3.jpg',
    'assets/images/fashion/4.jpg'
  ],
  ordered: 37,
  view: 44,
  feeDelivery: 500,
  name: 'Brand New t-Shirt',
  label: '#1 Best seller',
  categoryName: 'In fashion',
  priceSale: 3296,
  sale: '55% off',
  price: 45900,
  size: ['s', 'm', 'l', 'xl'],
  storage: 10
}

export const InfoProductDetail = () => {
  return (
    <Flex className='details-items'>
      <FlexRow className='product-images'>
        <div className='left-contain'>
          {infoProd.thumbnails.slice(0, 3).map((thumbnail) => (
            <ImageView
              src={thumbnail}
              data-zoom-image='assets/images/fashion/1.jpg'
              className='image-fluid blur-up lazyload'
              alt=''
              skipSrcSet
            />
          ))}
        </div>
        <div className='right-contain'>
          <ImageView
            src='assets/images/fashion/4.jpg'
            data-zoom-image='assets/images/fashion/1.jpg'
            className='image-fluid blur-up lazyload'
            alt=''
            skipSrcSet
          />
        </div>
      </FlexRow>
      <FlexRow className='product-infor'>
        <div className='cloth-details-size'>
          <div className='product-count'>
            <span>
              <ImageView
                src='assets/images/gif/fire.gif'
                className='image-fluid blur-up lazyload'
                alt='image'
                skipSrcSet
              />
              <span>{infoProd.ordered} orders in last 24 hours</span>
            </span>
            <span>
              <ImageView
                src='assets/images/gif/person.gif'
                className='image-fluid user_img blur-up lazyload'
                alt='image'
                skipSrcSet
              />
              <span>{infoProd.view} active view this</span>
            </span>
          </div>
          <h2 className='details-image-title'>{infoProd.name}</h2>
          <div className='label-section'>
            <span className='badge-grey-color'>{infoProd.label}</span>
            <span className='label-text'>{infoProd.categoryName}</span>
          </div>
          <h3 className='price-detail'>
            ${infoProd.priceSale} <del>${infoProd.price}</del>
            <span>55% off</span>
          </h3>
          <div className='addeffect-section'>
            <h6 className='product-title size-text'>
              select size
              <span>size chart</span>
            </h6>
            <div className='size-box'>
              {infoProd.size.map((item) => (
                <span>{item}</span>
              ))}
            </div>
            <h6 className='product-title product-title-2'>quantity</h6>
            <div className='qty-box'>
              <button type='button'>
                <FeatherIcon type='minus' />
              </button>
              <input type='text' name='quantity' className='form-control' defaultValue={1} />
              <button type='button'>
                <FeatherIcon type='plus' />
              </button>
            </div>
          </div>
          <div className='product-buttons'>
            <div className='btn-solid'>
              <FeatherIcon type='plus-square' />
              Wishlist
            </div>
            <div className='btn-solid'>
              <FeatherIcon type='shopping-cart' />
              Add To Cart
            </div>
          </div>
          <div className='product-count shipping-order'>
            <ImageView
              src='assets/images/gif/truck.png'
              className='image-fluid blur-up lazyload'
              alt='image'
              skipSrcSet
            />
            <span className='lang'>Free shipping for orders above ${infoProd.feeDelivery} USD</span>
          </div>
          <div className='border-product'>
            <h5 className='hurry-title'>
              Hurry Up! Left <span>{infoProd.storage}</span> in stock
            </h5>
            <div className='progress'>
              <div className='progress-bar' />
            </div>
            <div className='timer-5'>
              <h5 className='font-light'>Order in the next to get 365 Days : 0 Hour : 0 Min : 0 Sec</h5>
            </div>
          </div>
          <div className='border-product'>
            <h6 className='product-title'>share it</h6>
            <div className='product-icon'>
              <span>
                <a href='https://www.facebook.com/'>
                  <FeatherIcon type='fb' />
                </a>
                <a href='https://www.facebook.com/'>
                  <FeatherIcon type='twitter' />
                </a>
                <a href='https://www.facebook.com/'>
                  <FeatherIcon type='inst' />
                </a>
              </span>
            </div>
          </div>
        </div>
      </FlexRow>
    </Flex>
  )
}
