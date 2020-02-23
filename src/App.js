import React, { useState, useEffect } from 'react'
import channelService from './services/channels'
import ChannelList from './components/ChannelList'

const App = () => {
  const [page, setPage] = useState(null)
  const [channels, setChannels] = useState(null)

  useEffect(() => {
    channelService.getChannels().then((response) => {
      setChannels(response.channels)
    })
  }, [])

  const pages = new Map([
    ['all', <ChannelList channels={channels} />]
  ])

  const showPage = (input) => {
    let visible = pages.get(page)
    return visible
  }

  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={() => setPage('all')}>All channels</button>
      {showPage()}
    </div>
  )
}

export default App
