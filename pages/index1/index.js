// ./pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0,
    latitude: 0,
    timer: "undefined"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  click(e) {
    var value = e.target.id;
    switch (value) {
      case "1":
        this.mapdata.moveToLocation();
        break;
      case "2":
        if (this.data.timer == 'undefined' || this.data.timer == undefined) {
          wx.scanCode({
            onlyFromCamera: false,
            success: (data) => {
              wx.showLoading({
                title: '获取密码中',
                mask: true
              })
              var value = {
                name: data.result.split('&')[0].split(':')[1],
                pass: data.result.split('&')[1].split(':')[1]
              }
              wx.request({
                timeout: 6000,
                url: 'https://www.easy-mock.com/mock/5eef552eaa78635a7b462664/ofo/password',
                success: (data) => {
                  var password = data.data.data.password
                  wx.hideLoading()
                  wx.redirectTo({
                    url: "../index2/index2?password=" + password + "&name=" + value.name,
                    success: () => {
                      wx.showToast({
                        title: '获取成功',
                      })
                    }
                  })
                },
                fail: () => {
                  wx.hideLoading()
                  wx.showModal({
                    title: '提示',
                    content: '密码获取失败',
                    confirmColor: '#000000',
                    showCancel: false
                  })
                }
              })
            }
          })
        } else {
          wx.navigateBack({
            delta: 1
          })
        }
        break;
      case "3":
        wx.navigateTo({
          url: '../index3/index',
        })
        break;
      case "4":
        wx.navigateTo({
          url: '../index4/index',
        })
    }
  },
  onLoad: function (options) {
    this.mapdata = wx.createMapContext('myMap');
    this.setData({
      timer: options.timer
    })
    wx.getLocation({
      success: (data) => {
        this.setData({
          longitude: data.longitude,
          latitude: data.latitude
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
    
    this.mapdata.moveToLocation();
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