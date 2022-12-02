import { ProductAction } from '../../../components/product-action'
import { ImageView } from '../../../components/image-view'
import { Rating } from '../../../components/rating'
const data = [
  {
    img1: 'assets/images/fashion/product/front/1.jpg',
    img2: 'assets/images/fashion/product/back/1.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  },
  {
    img1: 'assets/images/fashion/product/front/2.jpg',
    img2: 'assets/images/fashion/product/back/2.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  },
  {
    img1: 'assets/images/fashion/product/front/3.jpg',
    img2: 'assets/images/fashion/product/back/3.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  },
  {
    img1: 'assets/images/fashion/product/front/4.jpg',
    img2: 'assets/images/fashion/product/back/4.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  },
  {
    img1: 'assets/images/fashion/product/front/5.jpg',
    img2: 'assets/images/fashion/product/back/5.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  },
  {
    img1: 'assets/images/fashion/product/front/6.jpg',
    img2: 'assets/images/fashion/product/back/6.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  },
  {
    img1: 'assets/images/fashion/product/front/7.jpg',
    img2: 'assets/images/fashion/product/back/7.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  },
  {
    img1: 'assets/images/fashion/product/front/8.jpg',
    img2: 'assets/images/fashion/product/back/8.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  },
  {
    img1: 'assets/images/fashion/product/front/1.jpg',
    img2: 'assets/images/fashion/product/back/1.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  },
  {
    img1: 'assets/images/fashion/product/front/2.jpg',
    img2: 'assets/images/fashion/product/back/2.jpg',
    category: 'B&Y Jacket',
    product: 'Slim Fit Plastic Coat',
    price: '$78.00',
    score: 3
  }
]
export const ProductResult = () => {
  return (
    <>
      {data.map((item) => (
        <div className='product-box'>
          <div className='img-wrapper'>
            <div className='front'>
              <a href=''>
                <ImageView src={item.img1} className='bg-img blur-up lazyload' alt='' />
              </a>
            </div>
            <div className='back'>
              <a href=''>
                <ImageView src={item.img2} className='bg-img blur-up lazyload' alt='' />
              </a>
            </div>
            <ProductAction img='' />
          </div>
          <div className='product-details'>
            <div className='rating-details'>
              <span className='font-light grid-content'>{item.category}</span>
              <Rating score={item.score} />
            </div>
            <div className='main-price'>
              <a href='' className='font-default'>
                <h5 className='ms-0'>{item.product}</h5>
              </a>
              <div className='listing-content'>
                <span className='font-light'>Regular Fit</span>
                <p className='font-light'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, deserunt? Asperiores aliquam voluptatum
                  culpa aliquid ab ducimus eaque illum, quibusdam reiciendis id ad consectetur quis, animi qui, minus
                  quidem eveniet! Dolorum magnam numquam, asperiores accusantium architecto placeat quam officia,
                  tempore repellendus.
                </p>
              </div>
              <h3 className='theme-color'>{item.price}</h3>
              <button className='btn listing-content'>Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
