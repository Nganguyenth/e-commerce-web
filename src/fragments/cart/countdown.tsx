import { FlexRow } from '../../components/flex'
export const Countdown = () => {
  return (
    <section id='CountDown'>
      <FlexRow className='section-container'>
        <h5>
          Your cart will be expired in{' '}
          <span className='count-timer theme-color' id='timer'>
            14:00
          </span>{' '}
          minutes !
        </h5>
        <button type='button' className='btn btn-solid-default'>
          Check Out
        </button>
      </FlexRow>
    </section>
  )
}
