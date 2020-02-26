import React from 'react'
import ChannelInList from './ChannelInList'

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
          <ChannelInList
            channel={channel}
            setChannelId={setChannelId}
            setPage={setPage}
          />
        )
      })}
    </div>
  )
}

export default ChannelList