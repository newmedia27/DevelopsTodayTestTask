export const getTimeNow = () => {
  const now = new Date()
  let yy = now.getFullYear()
  let mm = now.getMonth() + 1
  if (mm < 10) mm = '0' + mm
  let dd = now.getDate()
  if (dd < 10) dd = '0' + dd
  let hh = now.getHours()
  let min = now.getMinutes()
  if (min < 10) {
    min = '0' + min
  } else if (min >= 10 && min.length === 1) {
    min = min + '0'
  }
  return `${hh}:${min} ${dd}/${mm}/${yy}`
}