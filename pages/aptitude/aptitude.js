import { uploadCompany } from "../../api/ajax.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uploadForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      imagename: "", //图片64位编码
      imagepath: ""   // 图片后缀名
    },
    showImg: ''  // 展示的图片
  },


// 上传图片
  getBase64(url) {
    wx.request({
      url: url,
      responseType: 'arraybuffer', //最关键的参数，设置返回的数据格式为arraybuffer
      success: res => {
        //把arraybuffer转成base64
        let base64 = wx.arrayBufferToBase64(res.data);
        //打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
        let imagename = 'uploadForm.imagename'
        this.setData({
          [imagename]: base64
        })
      }
    })
  },
  beforeRead(e) {
    let imagename = e.detail.file.path
    let imagepath = e.detail.file.path.substring(e.detail.file.path.lastIndexOf("."), e.detail.file.path.length)
    this.getBase64(imagename)
    let helpImagePath = 'uploadForm.imagepath'
    this.setData({
      [helpImagePath]: imagepath
    })

    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    console.log(this.data.uploadForm)
    const uploadForm = this.data.uploadForm
    uploadCompany(uploadForm).then(res => {
      this.setData({
        showImg: res.data.imagepath
      })
      console.log(res)
    })
  },
// 上传图片


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    let openIdKey = 'uploadForm.openIdKey'
    let sessionKey = 'uploadForm.sessionKey'
    let token = 'uploadForm.token'
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