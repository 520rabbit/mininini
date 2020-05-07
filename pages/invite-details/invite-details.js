import { inviteDetail } from '../../api/ajax'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    showApply: false, // 面试时间
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
    minHour2: 9,
    maxHour2: 23,
    minHour: 0,
    maxHour: 23,
    startTime: '9:00', //开始时间
    showStart: false, // 开始时间
    endTIme: '11:00', // 结束时间
    showEnd: false, // 结束时间

    detaliForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      jobid: ''
    },
    dataList:[]
  },

  getData () {
    let form = this.data.detaliForm
    inviteDetail(form).then( res => {
      console.log(res)
      this.setData({
        dataList: res.data.data.list
      })
    })

  },

  // 展示面试时间
  showInterview() {
    this.setData({ showInterview: true });
  },
  // 确定面试时间
  confirmInterview(event) {
    this.setData({
      interviewData: event.detail,
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
    let min = parseInt(e.detail) + 1
    this.setData({
      startTime: e.detail,
      minHour2: min,
      showStart: false
    })
  },
  // 选择结束时间
  showEnd() {
    this.setData({
      showEnd: true
    })
  },
  // 确定开始时间
  confirmEnd(e) {
    this.setData({
      endTIme: e.detail,
      showEnd: false
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let openIdKey = 'detaliForm.openIdKey'
    let sessionKey = 'detaliForm.sessionKey'
    let token = 'detaliForm.token'
    let jobid = 'detaliForm.jobid'
    this.setData({
      [jobid]: options.id
    })
    wx.getStorage({
      key: 'openIdKey',
      success: (res) => {
        this.setData({
          [openIdKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionKey',
      success: (res) => {
        this.setData({
          [sessionKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'token',
      success: (res) => {
        this.setData({
          [token]: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getData()
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