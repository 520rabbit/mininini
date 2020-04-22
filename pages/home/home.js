// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: '0'
  },
  // 跑去交付成功
  goResult (){
    wx.navigateTo({
      url: '../result/result',
    })
  },

  //跑去面试邀约
  goInvite() {
    wx.navigateTo({
      url: '../interview-invite/interview-invite'
    })
  },

  //跑去创建职位
  goUpadte (){
    wx.navigateTo({
      url: '../update-job/update-job'
    })
  },

  // 跑去发布竞聘
  goIssue () {
    wx.navigateTo({
      url: '../issue-compete/issue-compete'
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
    console.log(wx.getStorageSync('myCode'))
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