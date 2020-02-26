import React from 'react'

const ChannelInList = ({ channel, setChannelId, setPage }) => {
  return (
    <div className="channel-description">
      <button className="list-button" onClick={() => {
        setChannelId(channel.id)
        setPage('channel')
      }}>
        <img src={channel.logos[6].url} alt="Channel logo" />
        <p>Guide</p>
      </button>
      <p>{channel.description}</p>
    </div>
  )
}

export default ChannelInList