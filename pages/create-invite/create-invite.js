import { issueInvite, jobList } from '../../api/ajax.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openIdKey: '',
    sessionKey: '',
    token: '',
    curr: 100, // 当前页数据
    limit: 1, // 当前页
    type: 2,
    showApply:false, // 面试时间
    mstime: '', // 面试时间
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    beginTime: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
    endTime: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    btime: '9', //开始时间
    showStart: false, // 开始时间
    etime: '11', // 结束时间
    showEnd: false, // 结束时间
    jobName: '', // 职位
    jobIndex: 0,// 职位索引
    jobid: '', // 职位id
    showJobList: false,
    columns: []
  },

  //获取职位列表
  getJob() {
    let openIdKey = this.data.openIdKey
    let sessionKey = this.data.sessionKey
    let token = this.data.token
    let curr = this.data.curr
    let limit = this.data.limit
    let type = this.data.type
    jobList({ openIdKey: openIdKey, sessionKey: sessionKey, token: token, curr: curr, limit: limit, type: type }).then(res => {
      this.setData({
        columns: res.data.data
      })
    })
  },
  // 职位选择
  showJobList () {
    this.setData({
      showJobList: true
    })
  },
  selectJob () {
    let columns = this.data.columns
    let jobIndex = this.data.jobIndex
    this.setData({
      showJobList: false,
      jobName: columns[jobIndex].jobename,
      jobid: columns[jobIndex].jobid
    })
  },
  slideJob(e) {
    let columns = this.data.columns
    this.setData({
      jobName: columns[e.detail.value[0]].jobename,
      jobIndex: e.detail.value[0]
    })
  },

  // 展示面试时间
  showInterview() {
    this.setData({ showInterview: true });
  },
  // 确定面试时间
  confirmInterview(e) {
    this.setData({
      mstime: e.detail,
      showInterview: false
    })
  },
  // 选择开始时间
  showStart() {
    this.setData({
      showStart: true
    })
  },
  // 确定开始时间
  confirmStart(e) {
    let btime = e.detail.value
    let endTime = []
    for (let i = btime + 1; i < 24; i++) {
      endTime.push(i)
    }
    this.setData({
      showStart: false,
      endTime: endTime,
      btime: e.detail.value
    })
  },
  formatDate(now) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "-" + month + "-" + date
  },


  // 选择结束时间
  showEnd () {
    this.setData({
      showEnd: true
    })
  },
  // 确定结束时间
  confirmEnd(e) {
    let endTime = this.data.endTime
    console.log(e.detail.index)
    this.setData({
      showEnd: false,
      etime: endTime[e.detail.index]
    })
  },

  // 创建预约
  handlerCreate () {
    let openIdKey = this.data.openIdKey
    let sessionKey = this.data.sessionKey
    let token = this.data.token
    let btime = this.data.btime
    let etime = this.data.etime
      
    let mstime = this.formatDate(new Date(this.data.etime))
    let jobid = this.data.jobid
    
    issueInvite({ openIdKey: openIdKey, sessionKey: sessionKey, token: token, btime: btime, etime: etime, mstime: mstime, jobid: jobid}).then( res => {
      if (res.data.Message == 'success') {
        wx.navigateTo({
          url: '../interview-invite/interview-invite',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'openIdKey',
      success: (res) => {
        this.setData({
          openIdKey: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionKey',
      success: (res) => {
        this.setData({
          sessionKey: res.data
        })
      }
    })
    wx.getStorage({
      key: 'token',
      success: (res) => {
        this.setData({
          token: res.data
        })
      }
    })

    this.getJob()
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