// pages/home/children/list/list.js
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

  },

  /**
   * 组件的方法列表
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
    }
  }
})
