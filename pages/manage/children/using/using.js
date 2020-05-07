import { jobList } from "../../../../api/ajax.js"
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
    usingForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      type: 2,
      curr: 10, // 当前页数据
      limit: 1 // 当前页
    },
    dataList: []
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goDetails(e) {
      let jobid = this.properties.dataList[e.currentTarget.dataset.index].jobid
      wx.navigateTo({
        url: '../../../../job-details/job-details?id=' + jobid,
      })
    },
    getData () {
      let odlLimit = this.data.usingForm.limit
      let limit = 'usingForm.limit'
      let usingForm = this.data.usingForm
      let dataList = this.data.dataList
      jobList(usingForm).then( res => {
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
    let openIdKey = 'usingForm.openIdKey'
    let sessionKey = 'usingForm.sessionKey'
    let token = 'usingForm.token'
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
  }
})
