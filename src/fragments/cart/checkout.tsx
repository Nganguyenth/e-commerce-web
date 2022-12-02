import { Flex } from '../../components/flex'
export const CheckoutCart = () => {
  return (
    <>
      <section id='CartCheckoutSection'>
        <Flex className='section-container'>
          <div className='promo-section'>
            <form>
              <div>
                <input type='text' className='form-control' id='number' placeholder='Coupon Code' />
              </div>
              <div>
                <button className='btn btn-solid-default rounded btn'>Apply Coupon</button>
              </div>
            </form>
          </div>
          <div className='checkout-button'>
            <a className='btn btn-solid-default btn fw-bold'>Check Out</a>
          </div>
          <div className='cart-box'>
            <div className='top-details'>
              <h3>Cart Totals</h3>
              <h6>
                Total MRP <span>$250.00</span>
              </h6>
              <h6>
                Coupon Discount <span>-$25.00</span>
              </h6>
              <h6>
                Convenience Fee{' '}
                <span>
                  <del>$25.00</del>
                </span>
              </h6>
            </div>
            <div className='bottom-details btn text-center'>
              <a>Process Checkout</a>
            </div>
          </div>
        </Flex>
      </section>
    </>
  )
}
