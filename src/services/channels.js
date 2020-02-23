import axios from 'axios'

const getChannels = async () => {
  const response = await axios.get(' https://rest-api.elisaviihde.fi/rest/epg/channels')
  return response.data
}

export default { getChannels }