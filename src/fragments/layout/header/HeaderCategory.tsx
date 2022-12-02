import { FeatherIcon } from '../../../components/icons/Feather'
import { HeaderCart } from './HeaderCart'

export const HeaderCategory = (props: { onToggle?: VoidFunction; onToggleSearch?: VoidFunction }) => {
  return (
    <div className='menu-right'>
      <ul>
        <li>
          <div className='toggle-nav' onClick={props.onToggle}>
            <FeatherIcon type='menu' />
          </div>
        </li>
        <li>
          <div className='search-box theme-bg-color' onClick={props.onToggleSearch}>
            <FeatherIcon type='search' />
          </div>
        </li>
        <li className='onhover-dropdown wislist-dropdown'>
          <div className='cart-media'>
            <div className='cart-icon'>
              <FeatherIcon type='heart' />
              <span className='label label-theme rounded-pill'>0</span>
            </div>
            <div className='cart-content'>
              <h6>Empty</h6>
              <span>Wish List</span>
            </div>
          </div>
          <div className='onhover-div'>
            <a href='/'>
              <div className='wislist-empty'>
                <FeatherIcon type='heart' />
                <h6 className='mb-1'>Your wislist empty !!</h6>
                <p className='font-light mb-0'>explore more and shortlist items.</p>
              </div>
            </a>
          </div>
        </li>
        <HeaderCart />
      </ul>
    </div>
  )
}
