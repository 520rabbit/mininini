// pages/interview-invite/interview-invite.js
import { inviteList } from '../../api/ajax'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0
  },

  // 跑去创建预约
  goInvite () {
    wx.navigateTo({
      url: '../create-invite/create-invite'
    })
  },
  onChange (e) {
    if (e.detail.index == 1) {
      this.sign.getData()
    }
    if (e.detail.index == 2) {
      this.finish.getData()
    }
  },


  // 跑回上一步
  backPrv () {
    wx.navigateBack({
      data: 1
    })
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
    // 获取组件
    this.sign = this.selectComponent("#interviewing") 
    this.finish = this.selectComponent("#finish") 
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