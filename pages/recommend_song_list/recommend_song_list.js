const api = require('../../utils/api.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
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
          playlist: res.playlist
        })
      }
    })

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