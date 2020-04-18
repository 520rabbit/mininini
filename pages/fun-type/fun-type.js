// pages/fun-type/fun-type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parent: [
      {
        name: '后端开发',
        id: "111",
        children: [
          {
            value: 'PHP',
            id: '0111'
          },
          {
            value: 'Java',
            id: '0222'
          }
        ]
      },
      {
        name: '前端开发',
        id: "222",
        children: [
          {
            value: 'JS',
            id: '0111'
          },
          {
            value: 'VUE',
            id: '0222'
          }
        ]
      },
      {
        name: '人工职能',
        id: "333",
        children: [
          {
            value: 'Python',
            id: '0111'
          },
          {
            value: 'C#',
            id: '0222'
          }
        ]
      }
    ],
    popoverSecond: false,
    second: [],
    currentIndex: 0 // 当前选中
  },
  showSecond (e) {
    console.log(e)
    this.setData({
      popoverSecond: true,
      currentIndex: e.target.dataset.index
    })
    this.dispose()
  },



  selectOne (e) {
    console.log(e)
  },


  dispose () {
    const first = this.data.parent
    const second = new Array()
    first.forEach(item => {
      second.push(item.children)
    })
    this.setData({
      second: second
    })
    console.log(this.data.second)
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})