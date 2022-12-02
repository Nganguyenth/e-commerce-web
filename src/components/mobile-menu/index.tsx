import { FeatherIcon } from '../icons/Feather'

export const MobileMenu = () => {
  return (
    <>
      <div className='mobile-menu d-sm-none'>
        <ul>
          <li>
            <a href='' className='active'>
              <FeatherIcon type='home' className='feather-home' />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className='toggle-category'>
              <FeatherIcon type='category' className='feather-home' />
              <span>Category</span>
            </a>
          </li>
          <li>
            <a href=''>
              <FeatherIcon type='shopping-bag' className='feather-home' />
              <span>Cart</span>
            </a>
          </li>
          <li>
            <a href=''>
              <FeatherIcon type='heart' className='feather-home' />
              <span>Wishlist</span>
            </a>
          </li>
          <li>
            <a href=''>
              <FeatherIcon type='account' className='feather-home' />
              <span>Account</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
