import { useEffect, useRef, useState } from 'react'

type DropdownProps = { items: string[]; placeholder?: string }

export const Dropdown = (props: DropdownProps) => {
  const [selected, setSelected] = useState('')
  const menuRef = useRef<HTMLUListElement | null>(null)
  const id = Math.random().toString(36)

  useEffect(() => {
    const clickListener = (ev: MouseEvent) => {
      const element = ev.target as HTMLElement
      if (menuRef.current && element.getAttribute('data-id') === id) {
        const classList = menuRef.current.classList
        classList.contains('show') ? menuRef.current.classList.remove('show') : menuRef.current.classList.add('show')
      } else {
        menuRef.current?.classList.remove('show')
      }
    }

    window.addEventListener('click', clickListener)
    return () => window.removeEventListener('click', clickListener)
  }, [selected])

  return (
    <div className='dropdown select-featured'>
      <button className='btn dropdown-toggle' type='button' aria-expanded='false' data-id={id}>
        {selected || props.placeholder}
      </button>
      <ul ref={menuRef} className='dropdown-menu'>
        {props.items.map((item) => (
          <li key={item} style={{ cursor: 'pointer' }}>
            <a className='dropdown-item' onClick={() => setSelected(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
