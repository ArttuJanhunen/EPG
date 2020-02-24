const dateFormat = require('dateformat')

const today = () => {
  const formattedDate = new Date().toString()
  return dateFormat(formattedDate, 'yyyy-mm-dd')
}

const time = (secs) => {
  const readableDate = new Date(secs).toString()
  return dateFormat(readableDate, 'HH:MM')
}

export default ({ today, time })