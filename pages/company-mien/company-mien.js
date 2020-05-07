import { companyInfo } from "../../api/ajax.js"

Page({
  /**
   * 页面的初始数据
   */
  data: {
    listForm: {
      openIdKey: '',
      sessionKey: '',
      token: ''
    },
    address: '',
    cnaturename: '',  // 行业
    cscalename: '',  // 人数
    companybrief: '', // 公司介绍
    imageList: '', // 公司图片
  },
  // 返回个人中心页面
  backPrev () {
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let openIdKey = 'listForm.openIdKey'
    let sessionKey = 'listForm.sessionKey'
    let token = 'listForm.token'
    wx.getStorage({
      key: 'openIdKey',
      success: res => {
        this.setData({
          [openIdKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionKey',
      success: res => {
        this.setData({
          [sessionKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'token',
      success: res => {
        this.setData({
          [token]: res.data
        })
      }
    })

    let listForm = this.data.listForm
    companyInfo(listForm).then( res => {
      console.log(res)
      this.setData({
        cname: res.data.data.cname,
        cnaturename: res.data.data.cnaturename,
        cscalename: res.data.data.cscalename,
        companybrief: res.data.data.companybrief,
        imageList: res.data.data.imageList,
        address: res.data.data.address,
      })
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