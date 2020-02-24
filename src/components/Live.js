import React from 'react'

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
          <div className="channel-description">
            <button className="list-button" onClick={() => {
              setChannelId(channel.id)
              setPage('channel')
            }}>
              <img src={channel.logos[6].url} alt="Channel logo" />
              <p>More</p>
            </button>
            <h3>{liveByChannel(channel.id)}</h3>
            <p>{liveDescriptionByChannel(channel.id)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Live