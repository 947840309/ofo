// pages/index5/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    juan: 0
  },
  click: function (e) {
    var title,
        data;
    switch(e.target.dataset.name){
      case 'yue':
        title = '余额说明'
        data = '这是余额说明，巴拉巴拉巴拉，啊吧啊吧奥巴！！！'
        break
      case 'tui':
        title = '押金退款'
        data = '这是押金退款，走吧！不可能退的！！爬！！！'
        break
      case 'juan':
        title = '我的用车卷'
        data = '这是我的用车卷，不存在的你没有，啊吧啊吧奥巴！！！'
        break
      case 'guan':
        title = '关于'
        data = '这是关于，自己上官网看吧，啊吧啊吧奥巴！！！'
        break
    }
    wx.showModal({
      title: title,
      content: data,
      showCancel: false
    })
  },
  oMoney: function () {
    wx.navigateTo({
      url: '../index6/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'user',
      success: (e) => {
        this.setData({
          num: e.data.num
        })
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
    wx.getStorage({
      key: 'user',
      success: (e) => {
        this.setData({
          num: e.data.num
        })
      }
    })
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