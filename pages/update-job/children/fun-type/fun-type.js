import { getFun } from "../../../../api/ajax.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    parent: Array
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
    // 读取职能
    funList: [],
    popoverSecond: false,
    second: [], // 第二层
    third: [], //第三层
    currentIndex: 0, // 当前第二 变色
    currentTmp: 0, // 当前第二  展示
    jobSelect: '', // 选择的职能
    jobId: '',  // 选择职能的id
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击第一  展示第二  第三
    showFirst(e) {
      this.setData({
        popoverSecond: true,
        currentTmp: e.target.dataset.index,
        currentThird: 0
      })
      this.dispose()
    },

    // 点击第二  展示第三
    selectSecond(e) {
      const second = this.data.second
      const third = new Array()
      second.forEach(i => {
        third.push(i.list)
      })
      this.setData({
        currentIndex: e.target.dataset.index,
        third: third[e.target.dataset.index]
      })
    },

    // 点击第三
    selectThird(e) {
      const jobType = e.target.dataset.title
      const jobId = e.target.dataset.id
      this.triggerEvent("getJob", { jobType: jobType, jobId: jobId})
      this.setData({
        currentTmp: e.target.dataset.index,
        popoverSecond: false
      })
    },

    // 后端返回数据处理
    dispose() {
      const tmp = this.data.currentTmp
      const first = this.data.funList
      const second = new Array()
      first.forEach(item => {
        second.push(item.lists)
      })
      this.setData({
        second: second[tmp]
      })
      const Newsecond = this.data.second
      const third = new Array()
      Newsecond.forEach(i => {
        third.push(i.list)
      })
      this.setData({
        third: third[0]
      })
    },


  },

  attached () {
    var that = this
    let openIdKey = 'updateForm.openIdKey'
    let sessionKey = 'updateForm.sessionKey'
    let token = 'updateForm.token'
    wx.getStorage({
      key: 'openIdKey',
      success: function (res) {
        that.setData({
          [openIdKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionKey',
      success: function (res) {
        that.setData({
          [sessionKey]: res.data
        })
      }
    })
    wx.getStorage({
      key: 'token',
      success: function (res) {
        that.setData({
          [token]: res.data
        })
      }
    })
  },
  ready () {
    let openIdKey = this.data.openIdKey
    let sessionKey = this.data.sessionKey
    let token = this.data.token
    getFun({ openIdKey: openIdKey, sessionKey: sessionKey, token: token }).then(res => {
      this.setData({
        funList: res.data.data
      })
    })
  }
})
