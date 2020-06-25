// pages/index4/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '点击登录',
    src: '',
    name: '请登录',
    color: 'primary',
    bind: 'log'
  },
  click: function () {
    if (this.data.bind == 'quit') {
      this.setData({
        text: '点击登录',
        src: '',
        name: '请登录',
        color: 'primary',
        bind: 'log'
      })
      wx.removeStorage({
        key: 'user',
      })
    } else {
      wx.getUserInfo({
        success: (e) => {
          this.setData({
            src: e.userInfo.avatarUrl,
            name: e.userInfo.nickName,
            color: 'warn',
            text: '点击退出',
            bind: 'quit'
          })
          wx.setStorage({
            data: {
              userImg: e.userInfo.avatarUrl,
              userName: e.userInfo.nickName,
              num: 0
            },
            key: 'user',
          })
        }
      })
    }
  },
  money: function () {
    wx.navigateTo({
      url: '../index5/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'user',
      success: (e) => {
        if (e.data !== '') {
          this.setData({
            src: e.data.userImg,
            name: e.data.userName,
            text: '点击退出',
            color: 'warn',
            bind: 'quit'
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})