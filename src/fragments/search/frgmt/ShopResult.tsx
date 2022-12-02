import { Dropdown } from '../../../components/dropdown'
import { FlexCol } from '../../../components/flex'
import { FeatherIcon } from '../../../components/icons/Feather'

export const ShopResult = () => {
  return (
    <>
      <FlexCol>
        <ul className='short-name'>
          <li>
            <div className='label-tag'>
              <span>Shirts</span>
              <button type='button' className='btn-close' aria-label='Close'>
                <FeatherIcon type='x' />
              </button>
            </div>
          </li>
          <li>
            <div className='label-tag'>
              <span>Kurtas</span>
              <button type='button' className='btn-close' aria-label='Close'>
                <FeatherIcon type='x' />
              </button>
            </div>
          </li>
        </ul>
      </FlexCol>
      <FlexCol>
        <div className='filter-options'>
          <div className='select-options'>
            <div className='page-view-filter'>
              <Dropdown
                placeholder='Please Select'
                items={[
                  'Alphabetically A-Z',
                  'Alphabetically Z-A',
                  'Price, High To Low',
                  'Price, Low To High',
                  'Date, Old To New',
                  'Date, New To Old'
                ]}
              />
            </div>
            <Dropdown placeholder='Select Featured' items={['Jeans', 'T-Shirt', 'Shirt', 'Jacket', 'Hoodie']} />
          </div>
        </div>
      </FlexCol>
    </>
  )
}
