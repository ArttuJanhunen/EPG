import React, { useState, useEffect } from 'react'
import timeService from '../services/time'
import channelService from '../services/channels'

const Channel = ({ channelId, channels }) => {
  const [channel, setChannel] = useState(null)
  const [dayEPG, setDayEPG] = useState(null)
  const [date, setDate] = useState(null)

  useEffect(() => {
    const current = channels.filter(channel => channel.id === channelId)
    setChannel(current[0])
    setDate(timeService.today())
    channelService.getDayForChannel(channelId, timeService.today()).then(response => {
      setDayEPG(response.schedule[0].programs)
    })
  }, [])

  if (!channel || !dayEPG) {
    return (
      <h2>Loading information...</h2>
    )
  }


  const upcomingPrograms = dayEPG.filter(program =>
    program.status === 'live' || program.status === 'upcoming')

  return (
    <div>
      <img src={channel.logos[6].url} alt="Channel logo" />
      <h1>Today on {channel.name}:</h1>
      {upcomingPrograms.map(program => {
        return (
          <div>
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