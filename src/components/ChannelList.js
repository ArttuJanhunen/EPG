import React from 'react'

const ChannelList = ({ channels }) => {

  console.log(channels)
  return (
    <div>
      <h2>Channel list</h2>
      {channels.map((channel) => {
        return (
          <div className="channel-description">
            <img src={channel.logos[6].url} alt="Channel logo" />
            <p>{channel.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ChannelList