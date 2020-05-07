// pages/deal-record/deal-record.js
import { useRecord } from "../../api/ajax.js"
import { buyRecord } from "../../api/ajax.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: '1',
    useForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      limit: 1, // 页数
      curr: 10, // 行数
      month: ''
    },
    selectMonth: [
      { text: '1个月', value: 1 },
      { text: '2个月', value: 2 },
      { text: '3个月', value: 3 },
      { text: '4个月', value: 4 },
      { text: '5个月', value: 5 },
      { text: '6个月', value: 6 }
    ],
    oldLimit: 1,// 使用记录的页数
    useData: [], // 使用记录
  },

  toggleTab (e) {
    let limit = 'useForm.limit'
    let oldLimit = this.data.oldLimit
    console.log(this.data.useForm.limit)
    let old = this.data.useForm.limit
    this.setData({
      [limit]: 1
    })
  },

  // 返回个人中心页面
  backPrev() {
    wx.navigateBack({
      delta: 1,
    })
  },

  // 使用记录
  useRecord () {
    let useForm = this.data.useForm
    let useData = this.data.useData
    useRecord(useForm).then( res => {
      console.log(res)
      this.setData({
        useData: useData.concat(res.data.data)
      })
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let openIdKey = 'useForm.openIdKey'
    let sessionKey = 'useForm.sessionKey'
    let token = 'useForm.token'
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
    this.useRecord()
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
    let newLimit = this.data.useForm.limit + 1
    const limit = 'useForm.limit'
    this.setData({
      [limit]: newLimit
    })

    this.useRecord()
    console.log(this.data.useForm.limit)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})