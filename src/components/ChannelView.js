import React, { useState, useEffect } from 'react'
import timeService from '../services/time'
import channelService from '../services/channels'

const Channel = ({ channelId, channels }) => {
  const [channel, setChannel] = useState(null)
  const [dayEPG, setDayEPG] = useState(null)
  const [day, setDay] = useState('Today')

  useEffect(() => {
    const current = channels.filter(channel => channel.id === channelId)
    setChannel(current[0])
    channelService.getDayForChannel(channelId, timeService.today()).then(response => {
      setDayEPG(response.schedule[0].programs)
    })
  }, [])

  if (!channel || !dayEPG) {
    return (
      <h2>Loading information...</h2>
    )
  }

  const nextDay = () => {
    channelService.getDayForChannel(channelId, timeService.nextDay()).then(response => {
      setDayEPG(response.schedule[0].programs)
      setDay('Tomorrow')
    })
  }

  const today = () => {
    channelService.getDayForChannel(channelId, timeService.today()).then(response => {
      setDayEPG(response.schedule[0].programs)
      setDay('Today')
    })
  }

  const upcomingPrograms = dayEPG.filter(program =>
    program.status === 'live' || program.status === 'upcoming')

  return (
    <div className="listing">
      <img src={channel.logos[7].url} alt="Channel logo" />
      <div>
        <button className="day-button" onClick={() => today()}>Today</button>
        <button className="day-button" onClick={() => nextDay()}>Tomorrow</button>
      </div>
      <h1>{day} on {channel.name}:</h1>
      {upcomingPrograms.map(program => {
        return (
          <div className="channel-description">
            <h2>{timeService.time(program.startTimeUTC)}</h2>
            <h3>{program.name}</h3>
            <p>{program.shortDescription}</p>
          </div>
        )
      })}

    </div>
  )
}

export default Channel