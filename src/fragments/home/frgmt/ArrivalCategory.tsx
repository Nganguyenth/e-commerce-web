import { ImageView } from '../../../components/image-view'

interface ArrivalCategoryProduct {
  imgBg: string
  img: string
  category: string
}
export const ArrivalCategory = (props: ArrivalCategoryProduct) => {
  const { imgBg, img, category } = props
  return (
    <div className='category-image-fruit'>
      <ImageView src={imgBg} className='img-fluid blur-up lazyload' alt='' skipSrcSet />
      <div className='category-contain'>
        <ImageView src={img} className='blur-up lazyload' alt='' skipSrcSet />
      </div>
      <div className='category-text'>
        <h2>{category}</h2>
        <h5>Healthy Fruits</h5>
      </div>
    </div>
  )
}
