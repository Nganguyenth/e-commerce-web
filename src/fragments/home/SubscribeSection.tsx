import { Flex } from '../../components/flex'
export const SubscribeSection = () => {
  return (
    <section id='SubscribeSection' className='subscribe-section-light section-b-space'>
      <Flex className='section-container' layout={{ justifyContent: 'space-between' }}>
        <div className='subscribe-details'>
          <h2 className='mb-3 theme-color'>Subscribe Our News</h2>
          <h6>
            Subscribe and receive our newsletters to follow the news about our fresh and fantastic Shoes Products.
          </h6>
        </div>
        <div className='subsribe-input'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Your Email Address'
              aria-label="Recipient's username"
            />
            <button className='btn btn-solid-default' type='button'>
              Button
            </button>
          </div>
        </div>
      </Flex>
    </section>
  )
}
