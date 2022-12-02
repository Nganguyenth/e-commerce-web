import { AddToCartIcon, FeatherIcon } from '../icons/Feather'

type Props = { img: string }
export const ProductAction = (props: Props) => {
  return (
    <div className='cart-wrap'>
      <ul>
        <li>
          <AddToCartIcon pid={1} img={props.img} price={1} />
        </li>
        <li>
          <a tabIndex={0}>
            <FeatherIcon type='quick-view' className='feather-eye' />
          </a>
        </li>
        <li>
          <a tabIndex={0}>
            <FeatherIcon type='compare' className='feather-refresh-cw' />
          </a>
        </li>
        <li>
          <a className='wishlist' tabIndex={0}>
            <FeatherIcon type='heart' className='feather-heart' />
          </a>
        </li>
      </ul>
    </div>
  )
}
