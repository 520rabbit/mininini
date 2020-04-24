// pages/deal-record/children/use-record.js
import { useRecord } from "../../../../api/ajax.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectMonth: {            // 属性名
      type: Array,     
      value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    monthValue: {
      type: Number,
      value: 1    // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    useForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      limit: '1', // 页数
      curr: '10', // 行数
      month: ''
    },
    useRcord: []   // 购买记录
  },

  attached() {
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
  },

  ready() {
    const useForm = this.data.useForm
    useRecord(useForm).then(res => {
      console.log(res)
      this.setData({
        useRcord: res.data.data
      })
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
