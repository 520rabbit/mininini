import { homeList } from '../../../../api/ajax.js'
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
    waitForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      state: 1,
      limit: 1, // 当前页数
      curr: 5, // 行数
    },
    dataList: []
  },

  
  /* 组件的方法列表
   */
  methods: {
    // 查看竞聘人数详情
    goDetails () {
      wx.navigateTo({
        url: '../../../../compete-details/compete-details'
      })
    },
    // 查看职位详情
    goJobDetails () {
      wx.navigateTo({
        url: '../../../../job-details/job-details'
      })
    },
    getData () {
      let odlLimit = this.data.waitForm.limit
      let limit = 'waitForm.limit'
      let dataList = this.data.dataList
      let waitForm = this.data.waitForm
      homeList(waitForm).then( res => {
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
    let openIdKey = 'waitForm.openIdKey'
    let sessionKey = 'waitForm.sessionKey'
    let token = 'waitForm.token'
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
