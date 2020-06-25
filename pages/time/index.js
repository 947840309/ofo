// pages/time/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: false,
    number: '',
    state: '正在计时',
    hour: 0,
    minute: 0,
    second: 0,
    timer: "undefined"
  },
  stop: function () {
    clearInterval(this.data.timer);
    this.setData({
      state: '骑行时长',
      timer: undefined,
      disabled: true
    })
  },
  goBack: function () {
    if (this.data.timer) {
      wx.navigateTo({
        url: '../index1/index?timer=' + this.data.timer,
      })
    }else{
      wx.redirectTo({
        url: '../index1/index?timer=' + this.data.timer,
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      number: options.name
    })
    var _hour = 0,
      _minute = 0,
      _second = 0,
      _timer = ""
    _timer = setInterval(() => {
      _second += 1
      if (_second == 60) {
        _second = 0;
        _minute += 1;
        if (_minute == 60) {
          _minute = 0;
          _hour += 1;
        }
      }
      this.setData({
        second: _second,
        minute: _minute,
        hour: _hour,
        timer: _timer
      })
    }, 1000)
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