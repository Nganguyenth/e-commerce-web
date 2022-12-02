import type { Property } from 'csstype'
import { forwardRef, HTMLAttributes, useEffect, useState } from 'react'
import './style.scss'

type FlexProps = HTMLAttributes<HTMLDivElement> & {
  noFlex?: boolean
  layout?: {
    alignContent?: Property.AlignContent
    justifyContent?: Property.JustifyContent
  } & Record<string, unknown>
  responsive?: {
    sm?: Property.FlexDirection
    md?: Property.FlexDirection
    lg?: Property.FlexDirection
    xl?: Property.FlexDirection
  } & Record<string, unknown>
}
export const Flex = forwardRef<HTMLDivElement, FlexProps>((props: FlexProps, ref) => {
  const { layout, responsive, className = '', noFlex, ...rest } = props
  const [classList, setClassList] = useState(['flex-container'])

  useEffect(() => {
    const list: string[] = []
    if (noFlex) list.push('no-flex')
    if (className) list.push(className)
    if (layout) {
      for (const key in layout) {
        list.push(`${key}-${layout[key]}`)
      }
    }
    if (responsive) {
      for (const key in responsive) {
        list.push(`responsive-${key}-${responsive[key]}`)
      }
    }
    setClassList(classList.concat(list))
  }, [className])

  return (
    <div ref={ref} {...rest} className={classList.join(' ')}>
      {props.children}
    </div>
  )
})

export const FlexRow = forwardRef<HTMLDivElement, FlexProps>((props: FlexProps, ref) => {
  const { className, ...rest } = props
  const [classList, setClassList] = useState(['flex-row'])

  useEffect(() => {
    const list: string[] = []
    if (className) list.push(className)
    setClassList(classList.concat(list))
  }, [className])

  return (
    <div ref={ref} {...rest} className={classList.join(' ')}>
      {props.children}
    </div>
  )
})

export const FlexCol = forwardRef<HTMLDivElement, FlexProps>((props: FlexProps, ref) => {
  const { className, ...rest } = props
  const [classList, setClassList] = useState(['flex-col'])

  useEffect(() => {
    const list: string[] = []
    if (className) list.push(className)
    setClassList(classList.concat(list))
  }, [className])

  return (
    <div ref={ref} {...rest} className={classList.join(' ')}>
      {props.children}
    </div>
  )
})
