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

const weekFromNow = () => {
  let weekInFuture = new Date()
  weekInFuture.setDate(weekInFuture.getDate() + 7)
  const formattedDate = weekInFuture.toString()
  return dateFormat(formattedDate, 'yyyy-mm-dd')
}

const prettyDate = (date) => {
  const pretty = `${date.substring(8, 10)}.${date.substring(5, 7)}.${date.substring(0, 4)}`
  return pretty
}

export default ({ today, time, nextDay, weekFromNow, prettyDate })