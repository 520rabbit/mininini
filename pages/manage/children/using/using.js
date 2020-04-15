// pages/manage/children/drafts-job/drafts-job.js
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
    checked: true,
    list: ['a', 'b'],
    result: [],  // 选中的id
    checked: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
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
  }
})
