import React from 'react'
import timeService from '../services/time'

const DatePicker = ({ handleHide, handleSubmit, setDate }) => {
  return (
    <div className="date-picker">
      <h2>Choose a day</h2>
      <form onSubmit={handleSubmit}>
        <input name="date" type="date" min={timeService.today()} max={timeService.weekFromNow()}
          onChange={({ target }) => setDate(target.value)} />
        <div>
          <button className="day-button" type="submit">Show</button>
        </div>
      </form>
      <br />
      <div>
        <button className="day-button" onClick={() => handleHide()}>Cancel</button>
      </div>
    </div>
  )
}

export default DatePicker