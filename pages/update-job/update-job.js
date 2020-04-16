// pages/update-job/update-job.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    jobname: '',
    workNat: '',
    show: false,
    workData: [
      {  // 工作性质
        name: '不限',
        state: '0'     
      },
      {
        name: '全职',
        state: '0'
      },
      {
        name: '兼职',
        state: '0'
      },
      {
        name: '实习',
        state: '0'
      }
    ],
    salary: '',
    columns: [
      // 第一列
      {
        values: ['周一', '周二', '周三', '周四', '周五'],
        defaultIndex: 2
      },
      // 第二列
      {
        values: ['上午', '下午', '晚上'],
        defaultIndex: 1
      }
    ]
  },

  good () {
    
  },






  showSelectWork () {
    this.setData({
      show: true
    })
  },
  // 取消工作性质选择
  cancleShow () {
    this.setData({
      show: false
    })
  },

  // 选择工作性质 
  selectWork (e) {
    console.log(this.data.workData[e.currentTarget.dataset.index].name)
    const workNat = this.data.workData[e.currentTarget.dataset.index].name
    this.setData({
      workNat: workNat,
      show: false
    })
  },

  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
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