const dateFormat = require('dateformat')

const today = () => {
  const formattedDate = new Date().toString()
  return dateFormat(formattedDate, 'yyyy-mm-dd')
}

const time = (secs) => {
  const readableDate = new Date(secs).toString()
  return dateFormat(readableDate, 'HH:MM')
}

const nextDay = () => {
  let newDate = new Date()
  newDate.setDate(newDate.getDate() + 1)
  const formattedDate = newDate.toString()
  return dateFormat(formattedDate, 'yyyy-mm-dd')
}

export default ({ today, time, nextDay })