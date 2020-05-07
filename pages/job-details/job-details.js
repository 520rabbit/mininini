import { jobDetail, creatJobImg } from "../../api/ajax.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      jobid: ''
    },
    id: '', // 职位id
    type: 1, // 职位海报
    jobename: '', // 职位名称
    jobpays: '', // 月薪
    jobe: '', // 职能分类
    deptname: '', // 所属部门
    naturework: '', // 工作性质
    working: '', // 工作年限
    record: '', // 学历
    address: '', // 工作地址
    jobDescriptive: '',
    showImg: false,
    seaImg: '',
  },

  goMine () {
    let jobid = this.data.id
    wx.navigateTo({
      url: '../update-job/update-job?id=' + jobid,
    })
  },

  onClickHide () {
    console.log("8757481465881")
    this.setData({
      showImg: false
    })
  },


  produceImg () {
    let jid = this.data.id
    let type = this.data.type
    creatJobImg({ jid: jid, type: type }).then(res => {
      console.log(res)
      this.setData({
        showImg: true,
        seaImg: res.data
      })
    })
  },

  nextImg () {
    let type = this.data.type + 1
    if (type >= 4) {
      this.setData({
        type: 1
      })
    } else {
      this.setData({
        type: type
      })
    }
    setTimeout( () => {
      this.produceImg() 
    }, 300)
  },

  createImg () {
    this.produceImg() 
    // 生成竞聘海报
    // GeneratePoster: function (access_token) {
      // wx.request({
      //   url: 'http://192.168.0.95:8002/api/posters/getPosters',//后台请求地址
      //   method: 'GET',
      //   data: {
      //     id: 3460,
      //     type: 4
      //   },
      //   success: (res) => {
      //     console.log(res.data);
      //     this.setData({
      //       imgurl: res.data
      //     });
      //   },
      //   fail: function (res) {
      //     console.log("向后台发送数据失败")
      //   }
      // })
    // },
    // 生成微信小程序码职位投递海报
    // GeneratePoster: function (access_token) {
  },

  // 返回上一步
  backPrev () {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    let openIdKey = 'listForm.openIdKey'
    let sessionKey = 'listForm.sessionKey'
    let token = 'listForm.token'
    let jobid = 'listForm.jobid'
    wx.getStorage({
      key: 'openIdKey',
      success: function (res) {
        that.setData({
          [openIdKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionKey',
      success: function (res) {
        that.setData({
          [sessionKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'token',
      success: function (res) {
        that.setData({
          [token]: res.data
        })
      }
    })
    this.setData({
      [jobid]: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const listForm = this.data.listForm
    jobDetail(listForm).then( res => {
      console.log(res)
      this.setData({
        id: res.data.data.id, // 职位id
        jobename: res.data.data.jobename, // 职位名称
        jobpays: res.data.data.jobpays, // 月薪
        jobe: res.data.data.jobe, // 职能分类
        deptname: res.data.data.deptname, // 所属部门
        naturework: res.data.data.naturework, // 职位名称
        record: res.data.data.record, // 学历
        working: res.data.data.working, // 工作年限
        address: res.data.data.address, // 地址
        jobDescriptive: res.data.data.jobDescriptive  // 工作描述
      })
    })
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