const api = require('../../utils/api.js')
const oneHundredMillion = 100000000
const tenThousand = 10000

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    personalized: []

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getBannerData()
    this.getRecommend()
  },

  getBannerData() {
    api.get('/banner', {}).then(res => {
      console.log(res)
      if (res) {
        this.setData({
          banners: res.banners
        })
      }
    })

  },
  getRecommend() {
    api.get('/personalized', {}).then(res => {
      console.log(res)
      if (res) {

        this.transfromPlayCount(res.result.slice(0, 6))
        this.setData({
          // personalized: res.result.slice(0, 6)
personalized: res.result


        })
      }
    })
  },
  /**
   * 搜索框点击事件
   */
  goSearchCtrl() {
    wx.navigateTo({
      url: '../searchview/searchview',
    })
  },
  /**
   * 更多
   */
  more() {
    console.log('更多')
  },
  /**
   * 推荐歌单
   */
  goRecommendDetail(event) {
    // console.log(event.currentTarget.dataset.detail)
    var data = encodeURIComponent(JSON.stringify(event.currentTarget.dataset.detail));
    wx.navigateTo({
      url: `../recommend_song_list/recommend_song_list?data=${data}`
    })
  },
  /**
   * banner点击事件
   */
  bannerTap(event) {
    console.log(event)
    const url = event.currentTarget.dataset.banner.url
    if (url) {
      console.log(url)
      wx.showModal({
        title: '这是一个网页',
        content: '个人开发者账号不支持webview',
      })
    } else {
      console.log('不是一个url')
    }
  },
  /**
   * 转换播放量
   */
  transfromPlayCount(data) {
    for (let i = 0; i < data.length; ++i) {
      if (data[i].playCount > oneHundredMillion) {
        data[i].playCount = (data[i].playCount / oneHundredMillion).toFixed(1) + '亿'
      } else if (data[i].playCount > tenThousand) {
        data[i].playCount = Math.round(data[i].playCount / tenThousand) + '万'
      } else {
        data[i].playCount = Math.round(data[i].playCount)
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})