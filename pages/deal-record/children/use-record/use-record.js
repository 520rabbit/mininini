// pages/deal-record/children/use-record.js
import { useRecord } from "../../../../api/ajax.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    useData: {         
      type: Array,     
      value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // useForm: {
    //   openIdKey: '',
    //   sessionKey: '',
    //   token: '',
    //   limit: '1', // 页数
    //   curr: '10', // 行数
    //   month: ''
    // },
    // useRcord: []   // 购买记录
  },

  // attached() {
  //   let openIdKey = 'useForm.openIdKey'
  //   let sessionKey = 'useForm.sessionKey'
  //   let token = 'useForm.token'
  //   wx.getStorage({
  //     key: 'openIdKey',
  //     success: (res) => {
  //       this.setData({
  //         [openIdKey]: res.data
  //       })
  //     }
  //   })
  //   wx.getStorage({
  //     key: 'sessionKey',
  //     success: (res) => {
  //       this.setData({
  //         [sessionKey]: res.data
  //       })
  //     }
  //   })
  //   wx.getStorage({
  //     key: 'token',
  //     success: (res) => {
  //       this.setData({
  //         [token]: res.data
  //       })
  //     }
  //   })
  // },


  // ready() {
  //   this.useData()
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    // useData () {
    //   let useForm = this.data.useForm
    //   const oldData = this.data.useRcord
    //   useRecord(useForm).then(res => {
    //     this.setData({
    //       useRcord: oldData.concat(res.data.data)
    //     })
    //   })
    // },
  }
  // onReachBottom () {
  //   this.useData()
  //   wx.showLoading({
  //     title: '玩命加载中',
  //   })
  //   let limit = 'useForm.limit'
  //   this.setData({
  //     [limit]: oldLimit + 1
  //   })
  //   wx.hideLoading();
  //  }
})
