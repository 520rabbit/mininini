// pages/deal-record/deal-record.js
import { useRecord } from "../../api/ajax.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: '2',
    selectMonth: [
      { text: '1个月', value: 1 },
      { text: '2个月', value: 2 },
      { text: '3个月', value: 3 },
      { text: '4个月', value: 4 },
      { text: '5个月', value: 5 },
      { text: '6个月', value: 6 }
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' }
    ],
    monthValue: 1
  },

  // 返回个人中心页面
  backPrev() {
    wx.navigateBack({
      delta: 1,
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