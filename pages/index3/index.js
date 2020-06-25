// pages/index3/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: 'default',
    oArray: [{
      value: '私锁私用',
      checked: false
    },
    {
      value: '车牌坏了',
      checked: false
    },
    {
      value: '车轮坏了',
      checked: false
    },
    {
      value: '车锁坏了',
      checked: false
    },
    {
      value: '违章乱停',
      checked: false
    },
    {
      value: '密码不对',
      checked: false
    },
    {
      value: '刹车坏了',
      checked: false
    },
    {
      value: '其他故障',
      checked: false
    }],
    oText: '拍照/相册',
    photo: [],
    data: {
      value: [],
      photo: []
    },
    num: '',
    bz: ''
  },
  option: function (data) {
    this.setData({
      data: {
        value: data.detail.value,
        photo: this.data.photo
      }
    })
    if (this.data.data.value == '') {
      this.setData({
        color: 'default'
      })
    } else {
      this.setData({
        color: 'primary'
      })
    }

  },
  pat: function () {
    var self = this
    wx.chooseImage({
      count: 7,
      success: (data) => {
        var ph = self.data.photo
        data.tempFilePaths.forEach(function (ele) {
          self.data.photo.push(ele)
          self.setData({
            photo: ph,
            oText: '+'
          })
        })
      }
    })
  },
  clear: function (e) {
    var num = e.target.dataset.index,
        ph = this.data.photo
        this.data.photo.splice(num,1)
    this.setData({
      photo: ph
    })
    if(ph == ''){
      this.setData({
        oText: '拍照/相册'
      })
    }
  },
  submit: function () {
    this.setData({
      data: {
        photo: this.data.photo,
        value: this.data.data.value
      }
    })
    var ph = this.data.data.photo,
        val = this.data.data.value
    if(ph == '' || val == ''){
      wx.showModal({
        cancelColor: '#000000',
        confirmText: '我填！！',
        cancelText: '劳资不填',
        title: '信息不完全',
        content: '你瞅啥，赶紧去填！干你啊！',
        success: (ele) => {
          if(ele.confirm == false){
            wx.navigateBack({
              delta: 1,
            })
          }
        }
      })
    }else{
      wx.showLoading({
        title: '提交中',
        mask: true
      })
      wx.request({
        url: 'https://www.easy-mock.com/mock/5eef552eaa78635a7b462664/ofo/tijiao',
        timeout: 10000,
        fail: () => {
          wx.hideLoading({
            success: (res) => {
              wx.showToast({
                title: '提交失败',
                duration: 2000,
                icon: 'none'
              })
            },
          })
        },
        success: (ele) => {
          wx.hideLoading({
            success: (res) => {
              wx.showToast({
                title: ele.data.data.text,
                duration: 2000,
                mask: true,
                success: () => {
                  setTimeout(() => {
                    wx.redirectTo({
                      url: '../index1/index',
                    })
                  } ,2000)
                }
              })
            },
          })
        }
      })
    }
  },
  put: function (ele){
    if(ele.target.dataset.index == '1'){
      this.setData({
        num: ele.detail.value
      })
    }else{
      this.setData({
        bz: ele.detail.value
      })
    }
    console.log(this.data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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