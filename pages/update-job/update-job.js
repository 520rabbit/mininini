// pages/update-job/update-job.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    jobname: '', // 职位名称
    detailsAddress: '', // 详细地址
    branch: '', //所属部门
    workNat: '', // 工作性质
    jobSalary: '', // 月薪
    education: '', // 学历要求
    showWork: false, // 工作性质显示隐藏
    showEducation: false, // 学历要求显示隐藏
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
        state: '0',
        subname: '副文本',
        openType: 'share'
      }
    ],
    educationData: [
      {  // 工作性质
        name: '不限',
        state: '0'
      },
      {
        name: '1-3年',
        state: '0'
      },
      {
        name: '3-5年',
        state: '0'
      },
      {
        name: '5年以上',
        state: '0',
        subname: '副文本',
        openType: 'share'
      }
    ],
    showSalary: false,
    salaryId: '',
    salary: [
      {
        text: '3k',
        id: 2
      }, 
      {
        text: '4k',
        id: 4
      }
    ],
  },

  selectSsalary (e) {
    console.log(e.detail.value.text)
  },

  showSalary () {
    this.setData({
      showSalary: true
    })
  },

  // 确定选择月薪
  confirmSalary (e) {
    console.log(e.detail.value.text)
    this.setData({
      jobSalary: e.detail.value.text,
      salaryId: e.detail.value.id,
      showSalary: false
    })
  },
   // 取消选择月薪
  closeShow () {
    this.setData({
      showSalary: false
    })
  },

  // 工作性质
  showSelectWork () {
    this.setData({
      showWork: true
    })
  },
  // 取消工作性质选择
  cancleShow () {
    this.setData({
      showWork: false
    })
  },
  // 选择工作性质 
  selectWork (e) {
    console.log(this.data.workData[e.currentTarget.dataset.index].name)
    const workNat = this.data.workData[e.currentTarget.dataset.index].name
    this.setData({
      workNat: workNat,
      showWork: false
    })
  },

  // 学历要求
  showSelectEducation () {
    this.setData({
      showEducation: true
    })
  },
  // 取消学历要求选择
  cancleShow() {
    this.setData({
      showEducation: false
    })
  },
  // 选择学历要求
  selectEducation(e) {
    console.log(this.data.educationData[e.currentTarget.dataset.index].name)
    const education = this.data.educationData[e.currentTarget.dataset.index].name
    this.setData({
      education: education,
      showEducation: false
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