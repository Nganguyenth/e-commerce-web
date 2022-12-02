import { useCartStore } from '../../store/cart-store'

export type IconType =
  | 'search'
  | 'x'
  | 'heart'
  | 'compare'
  | 'shopping-cart'
  | 'shopping-bag'
  | 'refresh-cw'
  | 'add-to-cart'
  | 'quick-view'
  | 'filter'
  | 'home'
  | 'star'
  | 'percent'
  | 'plus-square'
  | 'chevron-left'
  | 'chevron-right'
  | 'arrow-right'
  | 'menu'
  | 'check'
  | 'category'
  | 'account'
  | 'minus'
  | 'plus'
  | 'fb'
  | 'inst'
  | 'twitter'
  | 'question'

const svgIcon: Record<IconType, React.ReactNode> = {
  search: (
    <>
      <circle cx='11' cy='11' r='8' />
      <line x1='21' y1='21' x2='16.65' y2='16.65' />
    </>
  ),
  x: <path d='M18 6 6 18M6 6l12 12' />,
  heart: (
    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
  ),
  compare: (
    <>
      <polyline points='23 4 23 10 17 10' />
      <polyline points='1 20 1 14 7 14' />
      <path d='M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' />
    </>
  ),
  'shopping-cart': (
    <>
      <circle cx={9} cy={21} r={1} />
      <circle cx={20} cy={21} r={1} />
      <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
    </>
  ),
  'shopping-bag': (
    <>
      <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' />
      <line x1={3} y1={6} x2={21} y2={6} />
      <path d='M16 10a4 4 0 0 1-8 0' />
    </>
  ),
  'refresh-cw': (
    <>
      <polyline points='23 4 23 10 17 10' />
      <polyline points='1 20 1 14 7 14' />
      <path d='M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' />
    </>
  ),
  'add-to-cart': (
    <>
      <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' />
      <line x1={3} y1={6} x2={21} y2={6} />
      <path d='M16 10a4 4 0 0 1-8 0' />
    </>
  ),
  'quick-view': (
    <>
      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
      <circle cx={12} cy={12} r={3} />
    </>
  ),
  filter: <path d='M17 10H3m18-4H3m18 8H3m14 4H3' />,
  home: (
    <>
      <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </>
  ),
  category: (
    <>
      <path d='M21 10H3m18-4H3m18 8H3m18 4H3' />
    </>
  ),
  account: (
    <>
      <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </>
  ),
  star: (
    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
  ),
  percent: (
    <>
      <line x1='19' y1='5' x2='5' y2='19' />
      <circle cx='6.5' cy='6.5' r='2.5' />
      <circle cx='17.5' cy='17.5' r='2.5' />
    </>
  ),
  'plus-square': (
    <>
      <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
      <line x1='12' y1='8' x2='12' y2='16' />
      <line x1='8' y1='12' x2='16' y2='12' />
    </>
  ),
  'chevron-left': <polyline points='15 18 9 12 15 6' />,
  'chevron-right': <polyline points='9 18 15 12 9 6' />,
  'arrow-right': (
    <>
      <line x1='5' y1='12' x2='19' y2='12' />
      <polyline points='12 5 19 12 12 19' />
    </>
  ),
  menu: (
    <>
      <line x1='3' y1='12' x2='21' y2='12' />
      <line x1='3' y1='6' x2='21' y2='6' />
      <line x1='3' y1='18' x2='21' y2='18' />
    </>
  ),
  check: <polyline points='20 6 9 17 4 12' />,
  minus: <line x1={5} y1={12} x2={19} y2={12} />,
  plus: (
    <>
      <line x1={12} y1={5} x2={12} y2={19} />
      <line x1={5} y1={12} x2={19} y2={12} />
    </>
  ),
  fb: <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />,
  inst: (
    <>
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
    </>
  ),
  question: (
    <>
      <circle cx={12} cy={12} r={10} />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1={12} y1={17} x2={12.01} y2={17} />
    </>
  ),
  twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
}

export const FeatherIcon = (props: { type: IconType; className?: string; strokeWidth?: string | number }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`feather ${props.className || ''}`}>
      {svgIcon[props.type]}
    </svg>
  )
}

type AddToCartProps = { pid: string | number; img: string; price: number }
export const AddToCartIcon = (props: AddToCartProps) => {
  const onAddToCart = useCartStore((store) => store.onAddToCart)

  const addToCartHandler = () => {
    onAddToCart(props.pid, { img: props.img, price: props.price, quantity: 1 })
  }

  return (
    <a className='addtocart-btn' style={{ cursor: 'pointer' }} onClick={addToCartHandler}>
      <FeatherIcon type='add-to-cart' className='feather-shopping-bag' />
    </a>
  )
}
