import { FlexRow } from '../../../components/flex'
import { SVGView } from '../../../components/svg-view'

interface Item {
  svg: string
  title: string
  content: string
}
export const ServiceProduct = (props: Item) => {
  return (
    <FlexRow className='service-wrap display-flex'>
      <div className='service-icon'>
        <SVGView href={props.svg} />
      </div>
      <div className='service-content'>
        <h3 className='mb-2'>{props.title}</h3>
        <span>{props.content}</span>
      </div>
    </FlexRow>
  )
}
