// pages/mine/mine.js
import { getUserInfo } from "../../api/ajax.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mustForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
    },
    loginUser: '', // 名字
    companyauthentication: '', //  资质认证
    authentication: '', //   企业信息
    jobename: ''
  },

  // 跳转到个人信息页面
  goMineInfo () {
    console.log("98468")
    wx.navigateTo({
      url: '../mine-info/mine-info'
    })
  },

  // 跳到企业风采
  goMien() {
    wx.navigateTo({
      url: '../company-mien/company-mien'
    })
  },

  // 跳到福利标签页面
  goWelfare () {
    wx.navigateTo({
      url: '../welfare/welfare'
    })
  },

  // 跳到我的资产页面
  goMyAsset () {
    wx.navigateTo({
      url: '../my-asset/my-asset'
    })
  },

  // 跳到审核不通过
  goCheck () {
    wx.navigateTo({
      url: "../check-no/check-no"
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    var that = this
    let openIdKey = 'mustForm.openIdKey'
    let sessionKey = 'mustForm.sessionKey'
    let token = 'mustForm.token'
    wx.getStorage({
      key: 'openIdKey',
      success: function(res) {
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
    const mustForm = that.data.mustForm
    getUserInfo(mustForm).then( res => {
      // console.log(res.data.data)
      that.setData({
        loginUser: res.data.data.loginUser, // 名字
        companyauthentication: res.data.data.Companyauthentication, //  资质认证
        authentication: res.data.data.authentication, //   企业信息
        jobename: res.data.data.jobename
      })
    })
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