import { getAddress } from "../../api/ajax.js"
import { jobDetail } from "../../api/ajax.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openIdKey: '',
    sessionKey: '',
    token: '',
    jobename: '', // 职位名称
    jobid: '', //  职位名称id
    jobType: '', // 职能分类
    jobe: '',  // 职能id
    isShowJob: true, //是否隐藏职能分类
    profe: '', // 选择行业
    profeId: '', //选择行业id
    showProfe: false, // 展示行业
    condition: false, // 是否城市联动
    cityData: '',// 城市联动
    provinces: [],  // 省份list
    province: '', // 省份
    provinceid: '', // 省份Id
    citys: [], // 市list
    city: "", // 市
    cityid: '', // 市Id
    countys: [],  // 区list
    county: '', // 区
    dictionaryid: '', // 区Id
    condition: false,
    deptname: '', //所属部门
    workNat: '', // 工作性质
    jobpays: '', // 月薪
    education: '', // 学历要求
    showWork: false, // 工作性质显示隐藏
    showEducation: false, // 学历要求显示隐藏
    showYear: false, // 工作年限
    naturework: '', // 工作性质
    working: '', // 工作年限
    address: '', // 详细地址
    workData: [
      {  // 工作性质
        naturework: '不限',
        state: '0'     
      },
      {
        naturework: '全职',
        state: '0'
      },
      {
        naturework: '兼职',
        state: '0'
      },
      {
        naturework: '实习',
        state: '0'
      }
    ],
    educationData: [
      {  // 学历要求
        record: '不限',
        state: '0'
      },
      {
        record: '大专及以上',
        state: '0'
      },
      {
        record: '本科及以上',
        state: '0'
      },
      {
        record: '硕士及以上',
        state: '0'
      },
      {
        record: '博士及以上',
        state: '0'
      }
    ],
    workingYear: [
      {  // 工作年限
        working: '不限',
        state: '0'
      },
      {
        working: '1-3年',
        state: '0'
      },
      {
        working: '3-5年',
        state: '0'
      },
      {
        working: '5年以上',
        state: '0'
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
    this.setData({
      jobType: e.detail.jobType,
      jobId: e.detail.jobId,
      isShowJob: true
    })
  },
  
  // 展示城市联动
  slelctCity (e) {
    console.log(e)
    this.disc() 
    this.setData({
      condition: true
    })  
    this.disc()
  },
  // 自己的三级联动
  selectCity() {
    this.setData({
      condition: true
    })
  },
  slideCity(e) {
    let provincesData = this.data.cityData
    let citysIndex = e.detail.value[0]
    let countysIndex = e.detail.value[1]
    let lastIndex = e.detail.value[2]
    let citys = new Array()
    let countys = new Array()
    provincesData.forEach(i => {
      citys.push(i.list)
    })
    this.setData({
      citys: citys[citysIndex],
      countys: countys[countysIndex]
    })

    this.data.citys.forEach(i => {
      countys.push(i.list)
    })
    this.setData({
      countys: countys[countysIndex]
    })

    if (citys[citysIndex][countysIndex].list.length == 0) {
      this.setData({
        province: provincesData[citysIndex].name,
        provinceid: provincesData[citysIndex].id,
        city: citys[citysIndex][countysIndex].name,
        cityid: citys[citysIndex][countysIndex].id
      })
    } 
    if (citys[citysIndex][countysIndex].list.length > 0) {
      this.setData({
        province: provincesData[citysIndex].name,
        provinceid: provincesData[citysIndex].id,
        city: citys[citysIndex][countysIndex].name,
        cityid: citys[citysIndex][countysIndex].id,
        countys: countys[countysIndex],
        county: countys[countysIndex][lastIndex].name,
        dictionaryid: countys[countysIndex][lastIndex].id
      })
    }
  },
  // 城市数据处理
  disc() {
    let city = new Array()
    let countys = new Array()
    let provincesData = this.data.cityData
    provincesData.forEach(a => {
      city.push(a.list)
    })

    this.setData({
      citys: city[0]
    })
    this.data.citys.forEach(i => {
      countys.push(i.list)
    })
    this.setData({
      countys: countys[0]
    })

    console.log(countys)
  },

  selectCity: function (e) {
    this.setData({
      condition: !this.data.condition
    })
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
    console.log(e.currentTarget.dataset.index)
    let naturework = this.data.workData[e.currentTarget.dataset.index].naturework
    this.setData({
      naturework: naturework,
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
    const record = this.data.educationData[e.currentTarget.dataset.index].record
    this.setData({
      record: record,
      showEducation: false
    })
  },

  // 工作年限
  showYear () {
    this.setData({
      showYear: true
    })
  },

  // 选择工作年限
  selectYear (e) {
    const working = this.data.workingYear[e.currentTarget.dataset.index].working
    this.setData({
      working: working,
      showYear: false
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
    this.setData({
      jobid: options.id
    })
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let openIdKey = this.data.openIdKey
    let sessionKey = this.data.sessionKey
    let token = this.data.token
    let jobid = this.data.jobid
    console.log(jobid)
    // 获取地址
    getAddress({ openIdKey: openIdKey, sessionKey: sessionKey, token: token }).then(res => {
      console.log(res)
      this.setData({
        cityData: res.data.data
      })
    })

    // 获取当前详情数据
    jobDetail({ openIdKey: openIdKey, sessionKey: sessionKey, token: token, jobid: jobid }).then(res => {
      console.log(res.data.data)
      this.setData({
        // jobename: res.data.data.jobename, // 职位名称
        // jobpays: res.data.data.jobpays, // 月薪
        // jobe: res.data.data.jobe, // 职能分类
        // deptname: res.data.data.deptname, // 所属部门
        // naturework: res.data.data.naturework, // 职位名称
        // record: res.data.data.record, // 学历
        // working: res.data.data.working, // 工作年限
        // address: res.data.data.address, // 地址
        // jobDescriptive: res.data.data.jobDescriptive  // 工作描述
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