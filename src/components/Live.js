import React from 'react'
import LiveChannel from './LiveChannel'

const Live = ({ channels, live, setPage, setChannelId }) => {

  if (!live || !channels) {
    return (
      <h2>Loading information...</h2>
    )
  }

  const liveByChannel = (id) => {
    try {
      const program = live.filter(show =>
        show.channel.id === id)
      return program[0].programs[0].name
    } catch (exception) {
      return 'Current show unknown'
    }
  }

  const liveDescriptionByChannel = (id) => {
    try {
      const program = live.filter(show =>
        show.channel.id === id)
      return program[0].programs[0].shortDescription
    } catch (exception) {
      return 'Current show unknown'
    }
  }

  return (
    <div className="listing">
      <h1>Live now:</h1>
      {channels.map(channel => {
        return (
          <LiveChannel
            channel={channel}
            setChannelId={setChannelId}
            setPage={setPage}
            liveByChannel={liveByChannel}
            liveDescriptionByChannel={liveDescriptionByChannel}
          />
        )
      })}
    </div>
  )
}

export default Live