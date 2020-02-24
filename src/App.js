import React, { useState, useEffect } from 'react'
import channelService from './services/channels'
import ChannelList from './components/ChannelList'
import Live from './components/Live'
import Channel from './components/ChannelView'

const App = () => {
  const [page, setPage] = useState('live')
  const [channels, setChannels] = useState(null)
  const [live, setLive] = useState(null)
  const [channelId, setChannelId] = useState(null)

  useEffect(() => {
    channelService.getChannels().then((response) => {
      setChannels(response.channels)
    })
    channelService.getLive().then(response => {
      setLive(response.schedule)
    })
  }, [])

  const pages = new Map([
    ['all', <ChannelList channels={channels} setPage={setPage} setChannelId={setChannelId} />],
    ['live', <Live live={live} setLive={setLive} channels={channels} setPage={setPage} setChannelId={setChannelId} />],
    ['channel', <Channel channelId={channelId} channels={channels} />]
  ])

  const showPage = () => {
    let visible = pages.get(page)
    return visible
  }

  return (
    <div>
      <header>
        <button className="header-button" onClick={() => setPage('all')}>All channels</button>
        <button className="header-button" onClick={() => setPage('live')}>Live now</button>
      </header>
      {showPage()}
    </div>
  )
}

export default App
