import { useRef } from 'react'
interface Props {
  title: string
  children?: JSX.Element
  className?: string
}

export const ButtonCollapse = (props: Props) => {
  const { title, children, className } = props
  const collapseRef = useRef<HTMLDivElement | null>(null)
  const onCollapseToogle = () => collapseRef.current?.classList.toggle('show')

  return (
    <div className={`accordion-item category-rating ${className}`}>
      <h2 className='accordion-header' id='headingTwo'>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseTwo'
          onClick={onCollapseToogle}>
          {title}
        </button>
      </h2>
      <div
        ref={collapseRef}
        id='collapseTwo'
        className={`accordion-collapse collapse show`}
        data-bs-parent='#accordionExample'>
        {children}
      </div>
    </div>
  )
}
