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
    draftsForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
      type: 4,
      curr: 10, // 当前页数据
      limit: 1 // 当前页
    },
    dataList: [],
    checked: true,
    list: ['a', 'b'],
    result: [],  // 选中的id
    checked: false
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
      let odlLimit = this.data.draftsForm.limit
      let limit = 'draftsForm.limit'
      let draftsForm = this.data.draftsForm
      let dataList = this.data.dataList
      jobList(draftsForm).then( res => {
        console.log(res)
        this.setData({
          dataList: dataList.concat(res.data.data)  
        })
      })
      this.setData({
        [limit]: odlLimit + 1
      }) 
    },
    selectItem(event) {
      console.log(this.data.result)
      this.setData({
        result: event.detail
      })

      if (this.data.result.length == this.data.list.length) {
        this.setData({
          checked: true
        })
      } else {
        this.setData({
          checked: false
        })
      }
    },

    isAll(event) {
      this.setData({
        checked: !this.data.checked,
      })
      if (this.data.checked == true) {
        this.setData({
          result: this.data.list
        })
      } else {
        this.setData({
          result: []
        })
      }
    }
  },
  attached: function () {
    let openIdKey = 'draftsForm.openIdKey'
    let sessionKey = 'draftsForm.sessionKey'
    let token = 'draftsForm.token'
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
