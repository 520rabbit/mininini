import { getAddress } from "../../api/ajax.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openIdKey: '',
    sessionKey: '',
    token: '',
    jobname: '', // 职位名称
    jobType: '', // 职能分类
    jobId: '',  // 职能id
    isShowJob: true, //是否隐藏职能分类

    profe: '', // 选择行业
    profeId: '', //选择行业id
    showProfe: false, // 展示行业

    condition: false, // 是否城市联动
    cityData: '',// 城市联动
    province: '', // 省份
    provinceId: '', // 省份Id
    condition: false,


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
  },
  // 展示行业
  slelctProfe () {
    this.setData({
      showProfe: true
    })  
  },
  // 行业选择
  getProfe (e) {
    console.log(e)
    this.setData({
      profe: e.detail.profe,
      profeId: e.detail.profeId,
      showProfe: false
    })
  },

  // 展示职能分类
  slelctJob () {
    this.setData({
      isShowJob: false
    })
  },
  // 职能分类
  getMyJob(e) {
    console.log(e)
    this.setData({
      jobType: e.detail.jobType,
      jobId: e.detail.jobId,
      isShowJob: true
    })
  },
  
  // 展示城市联动
  slelctCity () {
    this.setData({
      condition: true
    })  

    this.disposeCity()
  },




  disposeCity () {


    this.setData({

    })
  },

  // 城市数据处理

  // //  所在地区
  // slideCity(e) {
  //   var val = e.detail.value
  //   var t = this.data.values;
  //   var cityData = this.data.cityData;
  //   if (val[0] != t[0]) {
  //     // 省份
  //     const citys = [];
  //     const countys = [];
  //     for (let i = 0; i < cityData[val[0]].list.length; i++) {
  //       citys.push(cityData[val[0]].list[i].name)
  //     }
  //     for (let i = 0; i < cityData[val[0]].list[0].list.length; i++) {
  //       countys.push(cityData[val[0]].list[0].list[i].name)
  //     }

  //     this.setData({
  //       province: this.data.provinces[val[0]],
  //       city: cityData[val[0]].list[0].name,
  //       citys: citys,
  //       county: cityData[val[0]].list[0].list[0].name,
  //       countys: countys,
  //       values: val,
  //       value: [val[0], 0, 0]
  //     })
  //     return;
  //   }
  //   if (val[1] != t[1]) {
  //     // 城市
  //     const countys = [];

  //     for (let i = 0; i < cityData[val[0]].list[val[1]].list.length; i++) {
  //       countys.push(cityData[val[0]].list[val[1]].list[i].name)
  //     }

  //     this.setData({
  //       city: this.data.citys[val[1]],
  //       county: cityData[val[0]].list[val[1]].list[0].name,
  //       countys: countys,
  //       values: val,
  //       value: [val[0], val[1], 0]
  //     })
  //     return;
  //   }
  //   if (val[2] != t[2]) {
  //     // 区域
  //     this.setData({
  //       county: this.data.countys[val[2]],
  //       values: val
  //     })
  //     return;
  //   }
  // },
  // //所在地区
  // selectCity: function (e) {
  //   console.log(e)
  //   this.setData({
  //     condition: !this.data.condition
  //   })
  // },
  // slideCity(e) {
  //   const city = this.data.cityData
  //   console.log(city[e.detail.value[0]].name )
  //   console.log(city[e.detail.value[0]].id)
  //   this.setData({
  //     province: city[e.detail.value[0]].name,
  //     provinceId: city[e.detail.value[0]].id
  //   })
  // },

    selectCity: function (e) {
      console.log(e)
      this.setData({
        condition: !this.data.condition
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







  backPrev () {
    wx.navigateBack({
      delta: 1
    })
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
    wx.getStorage({
      key: 'openIdKey',
      success: (res) => {
        this.setData({
          openIdKey: res.data
        })
      }
    })
    wx.getStorage({
      key: 'sessionKey',
      success: (res) => {
        this.setData({
          sessionKey: res.data
        })
      }
    })
    wx.getStorage({
      key: 'token',
      success: (res) => {
        this.setData({
          token: res.data
        })
      }
    })
    let openIdKey = this.data.openIdKey
    let sessionKey = this.data.sessionKey
    let token = this.data.token
    getAddress({ openIdKey: openIdKey, sessionKey: sessionKey, token: token }).then(res => {
      console.log(res.data.data)
      this.setData({
        cityData: res.data.data
      })
    })
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