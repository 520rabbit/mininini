// pages/manage/manage.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    showIssu: false,
    dataList: '' // 数据
  },

  toggleTab (e) {
    // 待审核
    if(e.detail.index == 1) {
      this.waitList()
    }
    //  审核不通过
    if(e.detail.index == 2) {
      this.passList()
    }
    //  草稿职位
    if(e.detail.index == 3) {
      this.draftsList()
    }
    this.setData ({
      active: e.detail.index
    })
  },
  // 使用中
  usingList () {
    this.selectComponent("#using").getData()
  },
  // 待审核
  waitList () {
    this.selectComponent("#wait").getData()
  },
  // 审核不通过
  passList () {
    this.selectComponent("#pass").getData()
  },
  // 审核不通过
  draftsList () {
    this.selectComponent("#drafts").getData()
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
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用中
    this.usingList()
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
    let currentIndex = this.data.active
    if(currentIndex == 0) {
      this.usingList()
    }
    if(currentIndex == 1) {
      this.waitList()
    }
    if(currentIndex == 2) {
      this.passList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})