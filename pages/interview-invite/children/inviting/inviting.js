import { inviteList } from '../../../../api/ajax'
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
    listForm: {
      openIdKey: '',
      sessionKey: '',
      token: "",
      state: 1,
      curr: 10, // 当前页数据
      limit: 1 // 当前页
    },
    dataList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData () {
      let form = this.data.listForm
      inviteList(form).then( res => {
        this.setData({
          dataList: res.data.data
        })
      })
    },
    goDetails(e) {
      console.log(e)
      let jobid = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '../../../../invite-details/invite-details?id=' + jobid
      })
    }
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      let openIdKey = 'listForm.openIdKey'
      let sessionKey = 'listForm.sessionKey'
      let token = 'listForm.token'
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
      this.getData()
    },
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
    },
    hide: function () { },
    resize: function () { },
  }
})
