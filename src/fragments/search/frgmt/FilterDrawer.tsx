import { forwardRef } from 'react'
import { FeatherIcon } from '../../../components/icons/Feather'
import { ButtonCollapse } from './ButtonCollapse'

const COLOR_FILTER = ['#ff0000', '#fab1a0', '#10ac84', '#ff9f43', '#8395a7', '#fab1a0', '#10ac84', '#ff9f43', '#8395a7']

type FilterProps = { onFilterClose: VoidFunction }

export const FilterDrawer = forwardRef<HTMLDivElement, FilterProps>((props, ref) => {
  return (
    <div ref={ref} id='FilterDrawer' className='drawer' tabIndex={-1}>
      <div className='drawer-body'>
        <div aria-label='Close' className='drawer-header'>
          <h5 className='drawer-title'>Close</h5>
          <button type='button' className='btn-close text-reset' onClick={props.onFilterClose}>
            <FeatherIcon type='x' />
          </button>
        </div>
        <div className='category-option'>
          <div className='accordion category-name' id='accordionExample'>
            <ButtonCollapse title={'Brand'} className={'category-rating'}>
              <div className='accordion-body category-scroll'>
                <ul className='category-list'>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault1' />
                      <label className='form-check-label' htmlFor='flexCheckDefault1'>
                        Zara
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault2' />
                      <label className='form-check-label' htmlFor='flexCheckDefault2'>
                        Allen Solly
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ButtonCollapse>
            <ButtonCollapse title={'Color'} className={'category-color'}>
              <div className='accordion-body'>
                <ul className='category-list'>
                  {COLOR_FILTER.map((color) => (
                    <li>
                      <a href='' style={{ background: color }}></a>
                    </li>
                  ))}
                </ul>
              </div>
            </ButtonCollapse>
            <ButtonCollapse title={'Category'} className={'category-rating'}>
              <div className='accordion-body category-scroll'>
                <ul className='category-list'>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault10' />
                      <label className='form-check-label' htmlFor='flexCheckDefault10'>
                        Shirts
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ButtonCollapse>
            <ButtonCollapse title={'Discount Range'}>
              <div className='accordion-body'>
                <ul className='category-list'>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault19' />
                      <label className='form-check-label' htmlFor='flexCheckDefault19'>
                        5% and above
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </ButtonCollapse>
          </div>
        </div>
      </div>
    </div>
  )
})
