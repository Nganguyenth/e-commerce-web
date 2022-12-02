import { useEffect, useState } from 'react'

interface SVGProps {
  parentClassName?: string
  className?: string
  href?: string
}
export const SVGView = (props: SVGProps) => {
  const [state, setState] = useState('')

  useEffect(() => {
    props.href?.match(/http(s)/)
      ? setState(props.href)
      : setState(location.href.replaceAll(location.pathname, '/') + props.href)
  }, [])

  return (
    <svg className={props.parentClassName}>
      <use href={state} className={props.className} />
    </svg>
  )
}
