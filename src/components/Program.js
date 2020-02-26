import React from 'react'
import timeService from '../services/time'

const Program = ({ program }) => {

  return (
    <div className="channel-description">
      <h2>{timeService.time(program.startTimeUTC)}</h2>
      <h3>{program.name}</h3>
      <p>{program.shortDescription}</p>
    </div>
  )
}

export default Program