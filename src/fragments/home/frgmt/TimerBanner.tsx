export const TimmerBanner = () => {
  return (
    <div className='timer'>
      <ul className='light-color'>
        <li>
          <div className='counter'>
            <div>
              <h2 id='days1'>365</h2>
              Days
            </div>
          </div>
        </li>
        <li>
          <div className='counter'>
            <div>
              <h2 id='hours1'>0</h2>
              Hour
            </div>
          </div>
        </li>
        <li>
          <div className='counter'>
            <div>
              <h2 id='minutes1'>00</h2>
              Min
            </div>
          </div>
        </li>
        <li>
          <div className='counter'>
            <div>
              <h2 id='seconds1'>00</h2>
              Sec
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
