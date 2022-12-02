import { FeatherIcon } from '../../../components/icons/Feather'
import { ImageView } from '../../../components/image-view'
import { useCartStore } from '../../../store/cart-store'

export const HeaderCart = () => {
  const cart = useCartStore((store) => store.cart)
  console.log(`cart`, cart)

  return (
    <li className='onhover-dropdown cart-dropdown'>
      <button type='button' className='btn btn-solid-default btn-spacing'>
        <FeatherIcon type='shopping-cart' className='pe-2' />
        <span>$5686.25</span>
      </button>
      <div className='onhover-div'>
        <div className='cart-menu'>
          <div className='cart-title'>
            <h6>
              <FeatherIcon type='shopping-bag' />
              <span className='label label-theme rounded-pill'>5</span>
            </h6>
            <span className='d-md-none d-block'>
              <FeatherIcon type='arrow-right' className='back-cart' />
            </span>
          </div>
          <ul className='custom-scroll'>
            <li>
              <div className='media'>
                <ImageView
                  src='assets/images/fashion/product/front/1.jpg'
                  className='img-fluid blur-up lazyload'
                  alt=''
                />
                <div className='media-body'>
                  <h6>Slim Fit Plastic Coat</h6>
                  <div className='qty-with-price'>
                    <span>$78.00</span>
                    <span>
                      <input type='number' className='form-control' defaultValue={1} />
                    </span>
                  </div>
                </div>
                <button type='button' className='btn-close' aria-label='Close'>
                  <FeatherIcon type='x' />
                </button>
              </div>
            </li>
            <li>
              <div className='media'>
                <ImageView
                  src='assets/images/fashion/product/front/7.jpg'
                  className='img-fluid blur-up lazyload'
                  alt=''
                />
                <div className='media-body'>
                  <h6>Womens Stylish Jacket</h6>
                  <div className='qty-with-price'>
                    <span>$24.00</span>
                    <span>
                      <input type='number' className='form-control' defaultValue={1} />
                    </span>
                  </div>
                </div>
                <button type='button' className='btn-close' aria-label='Close'>
                  <FeatherIcon type='x' />
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className='cart-btn'>
          <h6 className='cart-total'>
            <span className='font-light'>Total:</span> $ 542.00
          </h6>
          <button type='button' className='btn btn-solid-default btn-block'>
            Proceed to payment
          </button>
        </div>
      </div>
    </li>
  )
}
