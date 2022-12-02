import { Flex } from '../../components/flex'
import { ServiceProduct } from './frgmt/ServiceProduct'

export const ServiceSection = () => {
  return (
    <section id='ServiceSection' className='service-section'>
      <Flex layout={{ justifyContent: 'space-around' }} className='flex-gap section-container'>
        <ServiceProduct
          svg='assets/svg/icons.svg#customer'
          title='Customer Services'
          content='Top notch customer service.'
        />
        <ServiceProduct
          svg='assets/svg/icons.svg#shop'
          title='Pickup At Any Store'
          content='We accept all major credit cards.'
        />
        <ServiceProduct
          svg='assets/svg/icons.svg#secure-payment'
          title='Secured Payment'
          content='We accept all major credit cards.'
        />
        <ServiceProduct svg='assets/svg/icons.svg#return' title='Free Returns' content='30-days free return policy.' />
      </Flex>
    </section>
  )
}
