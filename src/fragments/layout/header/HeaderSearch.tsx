import { forwardRef, MutableRefObject, useRef } from 'react'
import { FeatherIcon } from '../../../components/icons/Feather'
import { ImageView } from '../../../components/image-view'
import { Rating } from '../../../components/rating'
import { HeaderCategory } from './HeaderCategory'

type SearchProps = { onFocus: VoidFunction; onBlur: VoidFunction; onClose: VoidFunction }

export const onChangeStyle = (ref: MutableRefObject<HTMLDivElement | null>, display: 'block' | 'none') => {
  if (ref.current) {
    ref.current.style.display = display
  }
}

export const HeaderSearchMobile = forwardRef<HTMLDivElement, SearchProps>((props, ref) => {
  return (
    <div ref={ref} className='search-full'>
      <div className='input-group'>
        <span className='input-group-text'>
          <FeatherIcon type='search' className='font-light' />
        </span>
        <input
          type='text'
          className='form-control search-type'
          placeholder='Search here..'
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={(evt) => console.log(`evt`, evt.target.value)}
        />
        <span className='input-group-text close-search' onClick={props.onClose}>
          <FeatherIcon type='x' className='font-light' />
        </span>
      </div>
      <div className='search-suggestion'>
        <ul className='custom-scroll'>
          <li>
            <div className='product-cart media'>
              <ImageView src='assets/images/electronics/product/1.jpg' className='img-fluid blur-up lazyload' alt='' />
              <div className='media-body'>
                <a>
                  <h6 className='mb-1'>New Smart Watch 4 ERT2</h6>
                </a>
                <Rating score={3} />
                <p className='mb-0 mt-1'>$28.00</p>
              </div>
            </div>
          </li>
          <li>
            <div className='product-cart media'>
              <ImageView src='assets/images/electronics/product/5.jpg' className='img-fluid blur-up lazyload' alt='' />
              <div className='media-body'>
                <a>
                  <h6 className='mb-1'>Powermatic 900 W Juicer</h6>
                </a>
                <Rating score={5} />
                <p className='mb-0 mt-1'>$35.00</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
})

export const HeaderSearch = (props: { onToggle?: () => void }) => {
  const searchRef = useRef<HTMLDivElement | null>(null)

  const onSearchFocus = () => searchRef.current?.classList.add('show')

  const onSearchBlur = () => searchRef.current?.classList.remove('show')

  const onSearchClose = () => searchRef.current?.classList.remove('open')

  const onToggleSearch = () => searchRef.current?.classList.add('open')

  return (
    <>
      <HeaderCategory onToggle={props.onToggle} onToggleSearch={onToggleSearch} />
      <HeaderSearchMobile ref={searchRef} onBlur={onSearchBlur} onClose={onSearchClose} onFocus={onSearchFocus} />
    </>
  )
}
