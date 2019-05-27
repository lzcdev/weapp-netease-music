const baseURL = 'http://netease.lzcdev.xyz'

const http = ({
  url = '',
  params = {},
  ...other
} = {}) => {
  wx.showLoading({
    title: '加载中...',
  })
  let time = Date.now()
  // console.log(`开始:${time}`)
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: params,
      header: getHeader(),
      ...other,
      complete: (res) => {
        wx.hideLoading()
        // console.log(`耗时：${Date.now() - time}`)
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }
    })
  })
}

const getUrl = url => {
  if (url.indexOf('://') == -1) {
    url = baseURL + url
  }
  return url
}

const getHeader = () => {
  try {
    var token = wx.getStorageSync('token')
    if (token) {
      return {
        'token': token
      }
    }

  } catch (e) {

  }
}

module.exports = {
  baseURL,
  get(url, params = {}) {
    return http({
      url,
      params,
      method: 'get'
    })
  },
  post(url, params = {}) {
    return http({
      url,
      param,
      method: 'post'
    })
  }
}