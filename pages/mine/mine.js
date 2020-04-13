// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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