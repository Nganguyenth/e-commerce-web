import { Flex, FlexRow } from '../../../components/flex'
import { ImageView } from '../../../components/image-view'
import { SVGView } from '../../../components/svg-view'

export const Footer = () => {
  return (
    <footer className='footer-sm-space'>
      <div className='main-footer'>
        <Flex responsive={{ sm: 'column' }} className='section-container'>
          <FlexRow className='footer-wrap'>
            <div className='footer-contact'>
              <div className='brand-logo'>
                <a href='' className='footer-logo'>
                  <SVGView parentClassName='svg-icon' className='fill-color' href='assets/svg/icons.svg#logo' />
                  <ImageView src='assets/images/logo.png' className='img-fluid blur-up lazyload' alt='logo' />
                </a>
              </div>
              <ul className='contact-lists'>
                <li>
                  <span>
                    <b>Phone:</b>
                    <span className='font-light'></span>
                  </span>
                </li>
                <li>
                  <span>
                    <b>Address:</b>
                    <span className='font-light'>Every where</span>
                  </span>
                </li>
                <li>
                  <span>
                    <b>Email:</b>
                    <span className='font-light'></span>
                  </span>
                </li>
              </ul>
            </div>
          </FlexRow>
          <FlexRow className='footer-wrap'>
            <div className='footer-links'>
              <div className='footer-title'>
                <h3>About us</h3>
              </div>
              <div className='footer-content'>
                <ul>
                  <li>
                    <a href='' className='font-dark'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='' className='font-dark'>
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href='' className='font-dark'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href='' className='font-dark'>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href='' className='font-dark'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FlexRow>
          <FlexRow className='footer-wrap'>
            <div className='footer-links'>
              <div className='footer-title'>
                <h3>New Categories</h3>
              </div>
              <div className='footer-content'>
                <ul>
                  <li>
                    <a href='' className='font-dark'>
                      Latest Shoes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FlexRow>
          <FlexRow className='footer-wrap'>
            <div className='footer-links'>
              <div className='footer-title'>
                <h3>Get Help</h3>
              </div>
              <div className='footer-content'>
                <ul>
                  <li>
                    <a href='' className='font-dark'>
                      Your Orders
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FlexRow>
          <FlexRow className='footer-wrap'>
            <div className='footer-newsletter'>
              <h3>Got Qustion ? Call Us 24/7</h3>
              <div className='footer-number'>
                <div className='footer-number-image'>
                  <ImageView
                    src='assets/images/shoes/other/headphone.png'
                    className='img-fluid blur-up lazyload'
                    alt=''
                  />
                </div>
                <div className='footer-number-container'>
                  <h3>Call me</h3>
                </div>
              </div>
              <div className='footer-details'>
                <p className='font-light'>Description</p>
              </div>
            </div>
          </FlexRow>
        </Flex>
      </div>
      <div className='sub-footer'>
        <Flex layout={{ justifyContent: 'space-between', alignItem: 'center' }} className='section-container'>
          <FlexRow>
            <ul>
              <li className='font-dark'>We accept:</li>
              <li>
                <ImageView
                  src='assets/images/payment-icon/1.jpg'
                  className='img-fluid blur-up lazyload'
                  alt='payment icon'
                  skipSrcSet
                />
              </li>
              <li>
                <ImageView
                  src='assets/images/payment-icon/2.jpg'
                  className='img-fluid blur-up lazyload'
                  alt='payment icon'
                  skipSrcSet
                />
              </li>
              <li>
                <ImageView
                  src='assets/images/payment-icon/3.jpg'
                  className='img-fluid blur-up lazyload'
                  alt='payment icon'
                  skipSrcSet
                />
              </li>
              <li>
                <ImageView
                  src='assets/images/payment-icon/4.jpg'
                  className='img-fluid blur-up lazyload'
                  alt='payment icon'
                  skipSrcSet
                />
              </li>
            </ul>
          </FlexRow>
          <FlexRow>
            <p className='mb-0 font-dark'>© 2022</p>
          </FlexRow>
        </Flex>
      </div>
    </footer>
  )
}
