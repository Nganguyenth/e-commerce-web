import { Flex } from '../../components/flex'
import { InfoProductDetail} from './frgmt/InfoProductDetail'
import '../../styles/ProductDetailSection.scss';

export const ProductDetailSection = () => {
  return (
    <>
      <section>
        <Flex className='section-container wrapper-container'>
            <InfoProductDetail />
        </Flex>
      </section>
    </>
  )
}
