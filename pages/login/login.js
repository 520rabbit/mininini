// pages/login/login.js

import { login, getCode, wxLogin } from "../../api/ajax.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      loginuser: '18977784437', // 企业手机号码
      code: '11111', // 手机验证码
    },
    type: '3',
    wxcode: '', // 微信打开返回的code
    tel:"",
    currentTime: '获取验证码',
    time: 60,
    disabled: false
  },

  // 手机号码
  inputPhone(e) {
    let loginuser = 'form.loginuser'
    var regNum = new RegExp('/[^\d]/g', 'g');
    let inputPhone = e.detail.value.replace(/[^\d]/g, '') 
    this.setData({ 
      [loginuser]: inputPhone
    })

    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.data.form.loginuser.length == 0) {
      wx.showToast({
        title: '手机号为空',
        icon: 'error',
        duration: 3000
      })
      return;
    } 
  },
  // 验证码
  codePhone (e) {
    let code = 'form.code'
    this.setData({
      [code]: e.detail.value
    })
  },

  // 获取验证码
  phoneCode(e) {
    const loginuser = this.data.form.loginuser
    const type = this.data.type
    getCode({ loginuser: loginuser, type: type }).then(res => {
      if (res.data.Message == "-20") {
        wx.showToast({
          title: '号码不正确',
          icon: 'error',
          duration: 3000
        })
      }
      console.log(res)
      if (res.data.Message == "OK") {
        this.setData({
          disabled: true
        })
        var time = this.data.time
        let interval = setInterval(() => {
          time--;
          this.setData({
            currentTime: time + 's后重新发送',
            disabled: true
          })
          if (time <= 0) {
            clearInterval(interval)
            this.setData({
              currentTime: '重新发送',
              disabled: false
            })
          }
        }, 1000) 
      }
    })
  },

  // 登录
  handlerLogin () {
    let form = this.data.form
    let tel = this.data.form.loginuser
    let wxcode = wx.getStorageSync('myCode')
    console.log(wx.getStorageSync('myCode'))
    login(form).then(res => {
      if (res.data.Message == '-3') {
        wx.showToast({
          title: '验证码不正确',
          icon: 'error',
          duration: 3000
        })
      }
      if(res.data.Message == 'success') {
        wxLogin({ tel: tel, wxcode: wxcode}).then( res => {

          // 保存必要参数
          wx.setStorage({key: 'openIdKey',data: res.data.data.OpenIdKey})
          wx.setStorage({key: 'sessionKey', data: res.data.data.SessionKey})
          wx.setStorage({key: 'token', data: res.data.data.token})

          
          

          // console.log(wx.getStorage('token'))
          // console.log(wx.getStorage('sessionKey'))
          if (res.data.Message == 'success') {
            wx.reLaunch({
              url: '../home/home'
            })
          }
        })
      }
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