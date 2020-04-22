// pages/update-job/update-job.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    jobname: '', // 职位名称
    jobType: '', // 职能分类
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

    // 职能分类
    isShowJob: true, //是否隐藏职能分类
    parent: [
      {
        name: '后端开发',
        id: "01",
        children: [
          {
            value: 'PHP',
            id: '101',
            grandson: [
              {
                value: 'PHP-11',
                id: '1001'
              },
              {
                value: 'PHP-2',
                id: '1002'
              },
              {
                value: 'PHP-3',
                id: '1003'
              }
            ]
          },
          {
            value: 'Java',
            id: '102',
            grandson: [
              {
                value: 'Java-11',
                id: '1101'
              },
              {
                value: 'Java-2',
                id: '1102'
              },
              {
                value: 'Java-3',
                id: '1103'
              }
            ]
          }
        ]
      },
      {
        name: '前端开发',
        id: "02",
        children: [
          {
            value: 'JS',
            id: '201',
            grandson: [
              {
                value: 'JS-11',
                id: '2001'
              },
              {
                value: 'JS-2',
                id: '2002'
              },
              {
                value: 'JS-3',
                id: '2003'
              }
            ]
          },
          {
            value: 'VUE',
            id: '202',
            grandson: [
              {
                value: 'VUE-11',
                id: '2101'
              },
              {
                value: 'VUE-2',
                id: '2102'
              },
              {
                value: 'VUE-3',
                id: '2103'
              }
            ]
          }
        ]
      },
      {
        name: '人工职能',
        id: "03",
        children: [
          {
            value: 'Python',
            id: '301',
            grandson: [
              {
                value: 'Python-11',
                id: '3001'
              },
              {
                value: 'Python-2',
                id: '3002'
              },
              {
                value: 'Python-3',
                id: '3003'
              }
            ]
          },
          {
            value: 'C#',
            id: '302',
            grandson: [
              {
                value: 'C#-11',
                id: '3101'
              },
              {
                value: 'C#-2',
                id: '3102'
              },
              {
                value: 'C#-3',
                id: '3103'
              }
            ]
          }
        ]
      }
    ]
  },

  slelctJob () {
    this.setData({
      isShowJob: false
    })
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
    const education = this.data.educationData[e.currentTarget.dataset.index].name
    this.setData({
      education: education,
      showEducation: false
    })
  },

  onChange(event) {
 
  },






  /**职能分类 */
  getMyJob (e) {
    console.log(e)
    this.setData({
      jobType: e.detail.jobType,
      isShowJob: true
    })
  },

  backPrev () {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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