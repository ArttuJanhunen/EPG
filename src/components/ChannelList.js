import React from 'react'

const ChannelList = ({ channels, setPage, setChannelId }) => {

  if (!channels) {
    return (
      <h2>Loading channels..</h2>
    )
  }

  return (
    <div className="listing">
      <h1>Channel list</h1>
      {channels.map((channel) => {
        return (
          <div className="channel-description">
            <button className="list-button" onClick={() => {
              setChannelId(channel.id)
              setPage('channel')
            }}>
              <img src={channel.logos[6].url} alt="Channel logo" />
            </button>
            <p>{channel.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ChannelList