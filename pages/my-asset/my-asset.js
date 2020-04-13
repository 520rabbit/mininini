// pages/my-asset/my-asset.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    popover: true, // 隐藏充值弹层
    upstate:true, // 充值状态
  },
  // 充值的弹层
  handlerupdate () {
    this.setData({
      popover: false
    })
  },

  // 关闭充值成功或者失败
  handlerKown () {
    this.setData({
      popover: true
    })
  },

  // 返回个人中心页面
  backPrev () {
    wx.navigateBack({
      delta: 1
    })
  },


  // 跳转到交易记录页面
  goDealRecord() {
    wx.navigateTo({
      url: '../deal-record/deal-record',
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