import { Flex } from '../../components/flex'
import { ImageView } from '../../components/image-view'
import { ColDef, Table } from '../../components/table'

const datas = [
  {
    image: 'assets/images/fashion/product/front/1.jpg',
    productName: 'Blue Jeans ',
    price: 80,
    quantity: 'number',
    total: 80
  },
  {
    image: 'assets/images/fashion/product/front/2.jpg',
    productName: 'Blue Jeans Color Jacket',
    price: 63,
    quantity: 'number',
    total: 63
  },
  {
    image: 'assets/images/fashion/product/front/3.jpg',
    productName: 'yellow packets',
    price: 123,
    quantity: 'number',
    total: 123
  },
  {
    image: 'assets/images/fashion/product/front/4.jpg',
    productName: 'Blue Jeans Color Jacket',
    price: 63,
    quantity: 'number',
    total: 63
  }
]
const col = [
  {
    key: 'image',
    title: 'Image',
    render: ({ image }: { image: string }) => <ImageView src={image} />
  },
  { key: 'productName', title: 'Product Name' },
  { key: 'price', title: 'price' },
  {
    key: 'quantity',
    title: 'quantity',
    render: ({ quantity }: { quantity: string }) => <input type={quantity} value={1} />
  },
  { key: 'total', title: 'total' }
]
export const CartList = () => {
  return (
    <section id='CartTable'>
      <Flex className='section-container'>
        <Table data={datas} cols={col as ColDef[]} />
      </Flex>
    </section>
  )
}
