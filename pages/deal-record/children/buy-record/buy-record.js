// pages/deal-record/children/use-record.js
import { buyRecord } from "../../../../api/ajax.js"
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
    buyForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      limit: '1', // 页数
      curr: '10', // 行数
      month: ''
    },
    buyRcord: [],   // 购买记录
    startTime:'', // 历史记录
    endTime:''  // 历史记录
  },


  attached() {
    let openIdKey = 'buyForm.openIdKey'
    let sessionKey = 'buyForm.sessionKey'
    let token = 'buyForm.token'
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

  ready () {
    const buyForm = this.data.buyForm
    buyRecord(buyForm).then( res => {
      this.setData({
        buyRcord: res.data.data
      })
    })

    let newData = new Date()

    this.setData({
      endTime: newData.getFullYear() + "." + (newData.getMonth() + 1),
      startTime: newData.getFullYear() + "." + (newData.getMonth() + 1)
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
