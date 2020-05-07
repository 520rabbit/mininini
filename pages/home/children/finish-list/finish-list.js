// pages/home/children/finish-list/finish-list.js
import { homeList } from '../../../../api/ajax'


Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },
  /**
   * 组件的初始数据
   */
  data: {
    finishForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      state: 7,
      curr: 10,
      limit: 1
    },
    dataList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData () {
      let odlLimit = this.data.finishForm.limit
      let limit = 'finishForm.limit'
      let dataList = this.data.dataList
      let finishForm = this.data.finishForm
      homeList (finishForm).then(res => {
        this.setData({
          dataList: dataList.concat(res.data.data) 
        })
      })
      this.setData({
        [limit]: odlLimit + 1
      }) 
    }
  },
  attached: function () {
    let openIdKey = 'finishForm.openIdKey'
    let sessionKey = 'finishForm.sessionKey'
    let token = 'finishForm.token'
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
  ready: function () {
  }
})
