const api = require('../../utils/api.js')
const oneHundredMillion = 100000000
const tenThousand = 10000

Page({

  /**
   * 页面的初始数据
   */
  data: {
    playCount: '',
    playlist: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data = JSON.parse(decodeURIComponent(options.data))

    // console.log(data)


    this.getPlayListDetail()
  },
  /**
   * 播放
   */
  play(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `../play/play?id=${e.currentTarget.dataset.id}`,
    })

  },
  /**
   * 根据id获取歌单详情
   */
  getPlayListDetail() {
    api.get('/playlist/detail', {
      id: this.data.id
    }).then(res => {
      console.log(res)
      if (res) {
        this.setData({
          playCount: this.transfromPlayCount(res.playlist.playCount),
          playlist: res.playlist
        })
      }
    })

  },

  /**
   * 转换播放量
   */
  transfromPlayCount(playCount) {
    console.log(playCount)
    if (playCount > oneHundredMillion) {
      playCount = (playCount / oneHundredMillion).toFixed(1) + '亿'
    } else if (playCount > tenThousand) {
      playCount = Math.round(playCount / tenThousand) + '万'
    } else {
      playCount = Math.round(playCount)
    }
    return playCount

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