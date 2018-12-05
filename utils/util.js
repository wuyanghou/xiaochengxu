const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const request = ({ method = 'GET', header = {'content-type': 'application/json' },url,...params})=>{
  return wx.request({
    method,
    header,
    url:'https://www.luomings.com/koa'+url,
    ...params
  })
}

const download =({url,...params})=>{
  return wx.downloadFile({
    url,
    ...params
  })
}

module.exports = {
  formatTime: formatTime,
  request,
  download
}
