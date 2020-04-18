// pages/issue-compete/issue-compete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    applyDate: '', // 报名截止时间
    showApply: false, // 报名截止时间
    interviewData: '', // 面试时间
    showInterview: false,  // 面试时间
    minDate: new Date().getTime(),
    formatter(type, value) { 
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    minHour2: 0,
    maxHour2: 23,
    minHour: 0,
    maxHour: 23,
    startTime:'9:00', //开始时间
    showStart: false, // 开始时间
    endTIme: '11:00', // 结束时间
    showEnd: false, // 结束时间
    jobId: '', // 交付节点单选
    jobWay: [
      {
        value: '到场面试',
        id: '1'
      },
      {
        value: '面试通过',
        id: '2'
      },
      {
        value: '成功入职',
        id: '3'
      },
      {
        value: '保过一个月',
        id: '4'
      },
      {
        value: '保过三个月',
        id: '5'
      }
    ],
    issueSelect: '',
    issue: [{
      issue_id: '10',
      issue_name:'公开竞聘',
      isSelect: false
      },
      {
        issue_id: '11',
        issue_name: 'ssc推荐',
        isSelect: false
      }],
    showNode: false // 交付节点
  },

  isTrue({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },

  // 展示报名截止时间
  showApply() {
    console.log("63225")
    this.setData({ showApply: true });
  },

  // 展示面试时间
  showInterview() {
    console.log("65")
    this.setData({ showInterview: true });
  },

  // 取消触发事件
  onClose() {
    this.setData({ 
      showApply: false,
      showInterview: false,
      showStart: false
    });
  },

  // 确定选择报名时间
  confirmApply(event) {
    this.setData({
      applyDate: event.detail,
      showApply: false
    })
  },
  // 确定选择面试时间
  confirmInterview (event) {
    this.setData({
      interviewData: event.detail,
      showInterview: false
    })
  },
  // 选择开始时间
  showStart () {
    this.setData({
      showStart: true
    })
  },
  // 确定开始时间
  confirmStart (e) {
    this.setData({
      startTime: e.detail,
      showStart: false
    })
  },
  // 交付节点data-
  selectItem (e) {
    console.log(e.currentTarget.dataset)
    const index = e.currentTarget.dataset.index
    console.log(index)
    this.setData({
      jobId: index
    })
  },

  // 发布渠道
  selectIssue (e) {
    var issueSelect = e.currentTarget.dataset.index;
    // var item = this.data.issue[index]
    // item.isSelect = !item.isSelect
    this.setData({
      issueSelect: issueSelect
      // issue: this.data.issue
    })
    console.log()
  },


  // 节点
  showNode () {
    this.setData({
      showNode: true
    })
  },

  nodeClose () {
    this.setData({
      showNode: false
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