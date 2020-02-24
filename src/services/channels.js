import axios from 'axios'

const getChannels = async () => {
  const response = await axios.get(' https://rest-api.elisaviihde.fi/rest/epg/channels')
  return response.data
}

const getLive = async () => {
  const response = await axios.get('https://rest-api.elisaviihde.fi/rest/epg/schedule/live')
  return response.data
}

const getDayForChannel = async (id, date) => {
  const response = await axios.get(`https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=${id}&date=${date}`)
  return response.data
}

export default { getChannels, getLive, getDayForChannel }