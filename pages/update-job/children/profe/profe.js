import { getProfe } from "../../../../api/ajax.js"
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
    updateForm: {
      openIdKey: '',
      sessionKey: '',
      token: '',
    },
    profeList: [], // 行业
    currentIndex: 0,
    second: [], // 第二层
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 第一次点击
    selectOne (e) {
      console.log(e.target.dataset.index)
      this.setData({
        currentIndex: e.target.dataset.index
      })
      this.dispose()
    },

    // 第二层点击
    selectProfe (e) {
      const profe = e.target.dataset.title
      const profeId = e.target.dataset.id
      const tmp = e.target.dataset.index
      this.triggerEvent("getProfe", { profe: profe, profeId: profeId })
      this.setData({
        currentIndex: tmp
      })
    },

    dispose() {
      const first = this.data.profeList
      const currentIndex = this.data.currentIndex
      const second = new Array()
      first.forEach(item => {
        second.push(item.GetHyItems)
      })
      this.setData({
        second: second[currentIndex]
      })
    }
  },


  attached() {
    let openIdKey = 'updateForm.openIdKey'
    let sessionKey = 'updateForm.sessionKey'
    let token = 'updateForm.token'
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
    const updateForm = this.data.updateForm
    getProfe(updateForm).then(res => {
      this.setData({
        profeList: res.data.data
      })
    })
  },
  ready() {
    this.dispose()
  }
})
