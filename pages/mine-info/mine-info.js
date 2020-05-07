// pages/mine-info/mine-info.js
import { editorUserInfo, userCode, userInfoDetails } from "../../api/ajax.js"
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    updateForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      imagename: '', //图片64位编码
      imagepath: '',   // 图片后缀名
      loginuser: '', // 昵称
      jobename: '', // 职位名称
      xtel: '', // 联系电话
      email: '', // 电子邮箱
      cname: '' // 公司名称
    },
    //微信二维码
    wxForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      wximagename: '', //图片64位编码
      wximagepath: '',   // 图片后缀名
    },
    showImg: '/assets/images/avatar.png',  // 展示的头像图片
    codeImg: '/assets/images/avatar.png'  // 微信二维码
  },

  // 昵称
  updateName (e) {
    let loginuser = 'updateForm.loginuser'
    this.setData({
      [loginuser]: e.detail
    })
  },
  // 职位
  updateJob(e) {
    let jobename = 'updateForm.jobename'
    this.setData({
      [jobename]: e.detail
    })
  },
  // 联系电话
  updatePhone(e) {
    let xtel = 'updateForm.xtel'
    this.setData({
      [xtel]: e.detail
    })
  },
  // 电子邮箱
  updateEmail(e) {
    let email = 'updateForm.email'
    this.setData({
      [email]: e.detail
    })
  },
  // 公司名称
  updateCname(e) {
    let cname = 'updateForm.cname'
    this.setData({
      [cname]: e.detail
    })
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
        let imagename = 'updateForm.imagename'
        let wximagename = 'wxForm.wximagename'
        this.setData({
          [imagename]: base64,
          [wximagename]: base64
        })
        console.log(this.data.wxForm.wximagename)
      }   
    })
  },

  beforeRead(e) {
    let imagename = e.detail.file.path
    let imagepath = e.detail.file.path.substring(e.detail.file.path.lastIndexOf("."), e.detail.file.path.length)
    this.getBase64(imagename)
    let helpImagePath = 'updateForm.imagepath'
    this.setData({
      showImg: imagename,
      [helpImagePath]: imagepath
    })
  },

  beforeReadWx(e) {
    let wximagename = e.detail.file.path
    let myMagepath = e.detail.file.path.substring(e.detail.file.path.lastIndexOf("."), e.detail.file.path.length)
    this.getBase64(wximagename)
    let helpImagePath = 'wxForm.wximagepath'
    this.setData({
      [helpImagePath]: myMagepath
    })
    console.log(wximagename)
    setTimeout( () => {

      let wxForm = this.data.wxForm
      userCode(wxForm).then( res => {
        console.log(res)
        this.setData({
          codeImg: res.data.imagepath
        })
      })
    },500)
  },

// 上传图片

  // 跳到个人中心页面
  goMine () {
    const updateForm = this.data.updateForm
    if (this.data.updateForm.loginuser == "") {
      Dialog.alert({
        title: '提示',
        message: '昵称不能为空'
      }).then(() => {
        // on close
      })
    } else if (this.data.updateForm.jobename == "") {
      Dialog.alert({
        title: '提示',
        message: '职位不能为空'
      }).then(() => {
        // on close
      })
    } else if (this.data.updateForm.xtel == "") {
      Dialog.alert({
        title: '提示',
        message: '联系电话不能为空'
      }).then(() => {
        // on close
      })
    } else if (this.data.updateForm.email == "") {
      Dialog.alert({
        title: '提示',
        message: '电子邮箱不能为空'
      }).then(() => {
        // on close
      })
    } else if (this.data.updateForm.cname == "") {
      Dialog.alert({
        title: '提示',
        message: '公司名称不能为空'
      }).then(() => {
        // on close
      })
    } else if (this.data.showImg == "") {
      Dialog.alert({
        title: '提示',
        message: '请上传图片'
      }).then(() => {
        // on close
      })
    } else {
      editorUserInfo(updateForm).then(res => {

        if (res.data.Message = "success") {
          this.setData({
            showImg: res.data.imagepath
          })
          wx.switchTab({
            url: '../mine/mine'
          })
        }
      })
    }
  },

  // 返回个人中心页面
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
    let openIdKey = 'updateForm.openIdKey'
    let sessionKey = 'updateForm.sessionKey'
    let token = 'updateForm.token'

    let wxopenIdKey = 'wxForm.openIdKey'
    let wxsessionKey = 'wxForm.sessionKey'
    let wxtoken = 'wxForm.token'
    
    wx.getStorage({
      key: 'openIdKey',
      success: function (res) {
        that.setData({
          [openIdKey]: res.data,
          [wxopenIdKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionKey',
      success: function (res) {
        that.setData({
          [sessionKey]: res.data,
          [wxsessionKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'token',
      success: function (res) {
        that.setData({
          [token]: res.data,
          [wxtoken]: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let openIdKey = this.data.updateForm.openIdKey
    let sessionKey = this.data.updateForm.sessionKey
    let token = this.data.updateForm.token
    userInfoDetails({ openIdKey: openIdKey, sessionKey: sessionKey, token: token}).then( res =>{
      let loginuser = 'updateForm.loginuser'
      let jobename = 'updateForm.jobename'
      let xtel = 'updateForm.xtel'
      let email = 'updateForm.email'
      let cname = 'updateForm.cname'
      this.setData({
        [loginuser]: res.data.data.loginUser,
        [jobename]: res.data.data.jobename,
        [xtel]: res.data.data.xtel,
        [email]: res.data.data.email,
        [cname]: res.data.data.cname,
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