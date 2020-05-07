Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: '0',
    activeSecond: '0',
    isShow: true,
    homeForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      state: 8,
      jobnode: 0,
    }
  },
  // 第一级别
  changeFirst (e) {
    if (e.detail.index == 1) {
      this.passForm()
    }
    if (e.detail.index == 2) {
      this.finishForm()
    }
    this.setData({
      active: e.detail.index
    })
  },
 // 第二级别
  changeSecond (e) {
    // 全部快招
    if (e.detail.index == 0) {
      this.homeForm()
    }
    // 简历预审
    if (e.detail.index == 1) {
      this.waitForm()
    }
    // 面试签到
    if (e.detail.index == 2) {
      this.signForm()
    }
    // 面试审核
    if (e.detail.index == 3) {
      this.secondForm()
    }
    // 入职审核
    if (e.detail.index == 4) {
      this.checkForm()
    }
    // 保过审核
    if(e.detail.index == 5) {
      this.blessForm()
    }
    
    this.setData({
      activeSecond: e.detail.index
    })
    console.log(this.data.activeSecond)
  },
  // 跑去交付成功
  goResult (){
    wx.navigateTo({
      url: '../result/result',
    })
  },
  // 1、人才快招全部
  homeForm () {
    this.selectComponent("#list").getData()
  },
  // 2、审核不通过
  passForm () {
    this.selectComponent("#psss-list").getData()
  },
  // 3、已完成
  finishForm () {
    this.selectComponent("#finish-list").getData()
  },
  // 4、简历预审
  waitForm () {
    this.selectComponent("#wait-list").getData()
  },
  // 5、面试签到
  signForm () {
    this.selectComponent("#interviewing-list").getData()
  },
  // 6、面试审核
  secondForm () {
    this.selectComponent("#second-list").getData()
  },
  // 7、入职审核
  checkForm () {
    this.selectComponent("#check-list").getData()
  },
  // 8、保过审核
  blessForm () {
    this.selectComponent("#bless-list").getData()
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
  onLoad: function () {
    
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 首页
    this.homeForm()
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
    let activeSecond = this.data.activeSecond
    // 首页  全部快招
    if (currentIndex == 0 && activeSecond == 0) {
      this.homeForm()
    }
    // 审核不通过
    if (currentIndex == 1) {
      this.passForm()
    }
    // 已经完成
    if (currentIndex == 2) {
      this.finishForm()
    }
    // 简历预审
    if (activeSecond == 1) {
      this.waitForm()
    }
    // 面试签到
    if (activeSecond == 2 ) {
      this.signForm()
    }
    // 面试审核
    if (activeSecond == 3) {
      this.secondForm()
    }
    // 入职审核
    if (activeSecond == 4) {
      this.checkForm()
    }
     // 保过审核
    if (activeSecond == 5) {
      this.blessForm()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})