import { getResult } from '../../api/ajax.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      state: 8,
      jobnode: 0,
      limit: 1, // 页数
      curr: 10, // 行数
    },
    resData: ''
  },

  backPrv () {
    wx.navigateBack({
      data: 1
    })
  },

  getData () {
    let resForm = this.data.resForm
    getResult(resForm).then( res => {
      console.log(res)
      this.setData({
        resData: res.data.data
      })
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let openIdKey = 'resForm.openIdKey'
    let sessionKey = 'resForm.sessionKey'
    let token = 'resForm.token'
    wx.getStorage({
      key: 'openIdKey',
      success: (res) => {
        this.setData({
          [openIdKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionKey',
      success: (res) => {
        this.setData({
          [sessionKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'token',
      success: (res) => {
        this.setData({
          [token]: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getData()
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