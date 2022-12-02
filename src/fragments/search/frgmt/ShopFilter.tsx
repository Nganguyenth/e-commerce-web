import { FeatherIcon } from '../../../components/icons/Feather'
import { Rating } from '../../../components/rating'

export const ShopFilter = () => {
  return (
    <div className='col-lg-3 col-md-4'>
      <div className='category-option'>
        <div className='button-close mb-3'>
          <button className='btn p-0'>
            <i data-feather='arrow-left' /> Close
          </button>
        </div>
        <div className='accordion category-name' id='accordionExample'>
          <div className='accordion-item category-rating'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'>
                Brand
              </button>
            </h2>
            <div id='collapseTwo' className='accordion-collapse collapse show' data-bs-parent='#accordionExample'>
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
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault3' />
                      <label className='form-check-label' htmlFor='flexCheckDefault3'>
                        Louis Philippe
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault4' />
                      <label className='form-check-label' htmlFor='flexCheckDefault4'>
                        Louis Philippe Sport
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault5' />
                      <label className='form-check-label' htmlFor='flexCheckDefault5'>
                        H&amp;M
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault6' />
                      <label className='form-check-label' htmlFor='flexCheckDefault6'>
                        Fila
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault7' />
                      <label className='form-check-label' htmlFor='flexCheckDefault7'>
                        Puma
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault8' />
                      <label className='form-check-label' htmlFor='flexCheckDefault8'>
                        Nike
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault9' />
                      <label className='form-check-label' htmlFor='flexCheckDefault9'>
                        HRX
                      </label>
                      <p className='font-light'>(25)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='accordion-item category-price'>
            <h2 className='accordion-header' id='headingFour'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'>
                Price
              </button>
            </h2>
            <div
              id='collapseFour'
              className='accordion-collapse collapse show'
              aria-labelledby='headingFour'
              data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <div className='range-slider category-list'>
                  <input type='text' className='js-range-slider' />
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item category-color'>
            <h2 className='accordion-header' id='headingThree'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'>
                Color
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse show'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <ul className='category-list'>
                  <li>
                    <a>
                      <FeatherIcon type='check' />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FeatherIcon type='check' />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FeatherIcon type='check' />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FeatherIcon type='check' />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FeatherIcon type='check' />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FeatherIcon type='check' />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FeatherIcon type='check' />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FeatherIcon type='check' />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FeatherIcon type='check' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='accordion-item category-rating'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'>
                Ratings
              </button>
            </h2>
            <div id='collapseOne' className='accordion-collapse collapse show' aria-labelledby='headingOne'>
              <div className='accordion-body'>
                <ul className='category-list'>
                  <li>
                    <Rating label='25' score={5} isCheckbox />
                  </li>
                  <li>
                    <Rating label='25' score={4} isCheckbox />
                  </li>
                  <li>
                    <Rating label='25' score={3} isCheckbox />
                  </li>
                  <li>
                    <Rating label='25' score={2} isCheckbox />
                  </li>
                  <li>
                    <Rating label='25' score={1} isCheckbox />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingFive'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'>
                Discount Range
              </button>
            </h2>
            <div
              id='collapseFive'
              className='accordion-collapse collapse show'
              aria-labelledby='headingFive'
              data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <ul className='category-list'>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault15' />
                      <label className='form-check-label' htmlFor='flexCheckDefault15'>
                        5% and above
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault16' />
                      <label className='form-check-label' htmlFor='flexCheckDefault16'>
                        10% and above
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className='form-check ps-0 custome-form-check'>
                      <input className='checkbox_animated check-it' type='checkbox' id='flexCheckDefault17' />
                      <label className='form-check-label' htmlFor='flexCheckDefault17'>
                        20% and above
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
