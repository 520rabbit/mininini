// pages/manage/manage.js
import { jobList } from "../../api/ajax.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    showIssu: false,
    listForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      type: 2,
      curr: 1, // 页数
      limit: 15 // 行数
    }
  },

  toggleTab (e) {
    let type = 'listForm.type'
    if (e.detail.index == 0) {
      this.setData({
        showIssu: false,
        [type]:2
      })
    }else if (e.detail.index == 1) {
      this.setData({
        showIssu: true,
        [type]: e.detail.index
      })
    }  else {
      this.setData({
        showIssu: true,
        [type]: e.detail.index + 1
      })
    }

    // 切换请求数据
    this.getJobList()
  },


  getJobList () {
    let listForm = this.data.listForm
    jobList(listForm).then(res => {
      console.log(res)
    })
  },


  // 跑去创建职位
  goUpdate () {
    wx.navigateTo({
      url: '../update-job/update-job',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    let openIdKey = 'listForm.openIdKey'
    let sessionKey = 'listForm.sessionKey'
    let token = 'listForm.token'
    wx.getStorage({
      key: 'openIdKey',
      success: function (res) {
        that.setData({
          [openIdKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionKey',
      success: function (res) {
        that.setData({
          [sessionKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'token',
      success: function (res) {
        that.setData({
          [token]: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    that.getJobList()
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