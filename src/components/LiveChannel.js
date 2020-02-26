import React from 'react'

const LiveChannel = ({ channel, setChannelId, setPage, liveByChannel, liveDescriptionByChannel }) => {
  return (
    <div className="channel-description">
      <button className="list-button" onClick={() => {
        setChannelId(channel.id)
        setPage('channel')
      }}>
        <img src={channel.logos[6].url} alt="Channel logo" />
        <p>Guide</p>
      </button>
      <h3>{liveByChannel(channel.id)}</h3>
      <p>{liveDescriptionByChannel(channel.id)}</p>
    </div>
  )
}

export default LiveChannel