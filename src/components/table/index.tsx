import { ReactNode, TableHTMLAttributes } from 'react'
import './style.scss'

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  data: Array<Record<string, unknown>>
  cols: Array<ColDef>
  theadProps?: TableHTMLAttributes<HTMLTableSectionElement>
  tbodyProps?: TableHTMLAttributes<HTMLTableSectionElement>
}

export type ColDef = {
  key: string
  title: string
  render?: (record: unknown) => ReactNode
  align?: 'left' | 'center' | 'right'
}

const RenderCell = (cols: ColDef[], record: Record<string, unknown>) => {
  return cols.map((col: ColDef) => (
    <td className={`align-${col.align || 'center'}`} key={col.key}>
      {col.render ? col.render(record) : (record[col.key] as ReactNode)}
    </td>
  ))
}

export const Table = (props: TableProps) => {
  const { data, cols, theadProps, tbodyProps, ...rest } = props

  return (
    <table {...rest}>
      <thead {...theadProps}>
        <tr>
          {cols.map((col) => (
            <th key={col.key}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody {...tbodyProps}>
        {data.map((item) => (
          <tr>{RenderCell(cols, item)}</tr>
        ))}
      </tbody>
    </table>
  )
}
