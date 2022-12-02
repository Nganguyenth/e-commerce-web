import { useRef } from 'react'
import { Flex, FlexRow } from '../../components/flex'
import { FeatherIcon } from '../../components/icons/Feather'
import { FilterDrawer } from './frgmt/FilterDrawer'
import { ProductResult } from './frgmt/ProductResult'
import { ShopResult } from './frgmt/ShopResult'

export const ShopSection = () => {
  const filterRef = useRef<HTMLDivElement | null>(null)
  const onFilterOpen = () => filterRef.current?.classList.add('show')
  const onFilterClose = () => filterRef.current?.classList.remove('show')
  return (
    <>
      <section id='ShopSection' className='section-b-space'>
        <Flex className='section-container'>
          <FlexRow>
            <div className='hide-button'>
              <button
                className='btn'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasExample'
                onClick={onFilterOpen}>
                <FeatherIcon type='filter' />
                Filter
              </button>
            </div>
            <FlexRow>
              <ShopResult />
            </FlexRow>
          </FlexRow>
          <FlexRow className='shop-wrap'>
            <ProductResult />
          </FlexRow>
          <nav className='page-section'>
            <ul className='pagination'>
              <li className='page-item'>
                <a className='page-link' href='' aria-label='Previous'>
                  <span aria-hidden='true'>
                    <FeatherIcon type='chevron-left' />
                  </span>
                </a>
              </li>
              <li className='page-item active'>
                <a className='page-link' href=''>
                  1
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href=''>
                  2
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' href=''>
                  3
                </a>
              </li>
              <li className='page-item'>
                <a className='page-link' aria-label='Next'>
                  <span aria-hidden='true'>
                    <FeatherIcon type='chevron-right' />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </Flex>
      </section>
      <FilterDrawer ref={filterRef} onFilterClose={onFilterClose} />
    </>
  )
}
