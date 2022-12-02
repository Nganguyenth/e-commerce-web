import { FeatherIcon } from '../icons/Feather'

type RatingProps = { score: number; label?: string; isCheckbox?: boolean }
export const Rating = (props: RatingProps) => {
  const { score, label, isCheckbox } = props
  return (
    <div className='form-check ps-0 custome-form-check'>
      {isCheckbox && <input className='checkbox_animated check-it' type='checkbox' />}
      <ul className='rating mt-0'>
        {Array.from(Array(5)).map((_, idx) => (
          <li className='rating-list' key={idx}>
            {
              <FeatherIcon
                type='star'
                className={`feather-star ${score > idx ? 'theme-color' : ''}`}
                strokeWidth='0.5'
              />
            }
          </li>
        ))}
      </ul>
      {label && <p className='font-light'>({label})</p>}
    </div>
  )
}
