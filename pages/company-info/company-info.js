// pages/company-info/company-info.js
var tcity = require("../../utils/citys.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    provinces: [],
    province: "",// 省
    citys: [],
    city: "", // 市
    countys: [],
    county: '', // 区
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    // 上面部分是所在地区
    nature: '',
    showNature: false,
    natureList: [
      { name: '国企',  openType: 'getUserInfo' },
      { name: '外企', openType: 'getUserInfo' },
      { name: '私企', openType: 'getUserInfo' },
      { name: '民企', openType: 'getUserInfo' }
    ],
    // 企业性质
  },

  beforeRead(event) {
    const { file, callback } = event.detail;
    callback(file.type === 'image');
  },

  // 选择企业性质
  selectNature(e) {
    const nature = this.data.natureList[e.currentTarget.dataset.index].name
    this.setData({
      nature: nature,
      showNature: false
    })
  },

  natureChange (e) {
    console.log(e)
    this.setData({
      showNature: true
    })
  },
  cancleShow () {
    this.setData({
      showNature:false
    })
  },


  //  所在地区
  slideCity (e) {
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;
    if (val[0] != t[0]) {
      // 省份
      const citys = [];
      const countys = [];
      for (let i = 0; i < cityData[val[0]].sub1.length; i++) {
        citys.push(cityData[val[0]].sub1[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub1[0].sub2.length; i++) {
        countys.push(cityData[val[0]].sub1[0].sub2[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub1[0].name,
        citys: citys,
        county: cityData[val[0]].sub1[0].sub2[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })
      return;
    }
    if (val[1] != t[1]) {
      // 城市
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub1[val[1]].sub2.length; i++) {
        countys.push(cityData[val[0]].sub1[val[1]].sub2[i].name)
      }

      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub1[val[1]].sub2[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      // 区域
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }
  },
  selectCity: function (e) {
    console.log(e)
    this.setData({
      condition: !this.data.condition
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 省份完成
    var that = this
    tcity.init(that)
    var cityData = that.data.cityData
    const provinces = []
    const citys = []
    const countys = []
    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name)
    }
    
     // city完成
    for (let i = 0; i < cityData[0].sub1.length; i++) {
      citys.push(cityData[0].sub1[i].name)
    }
     // 区域完成
    for (let i = 0; i < cityData[0].sub1[0].sub2.length; i++) {
      countys.push(cityData[0].sub1[0].sub2[i].name)
    }

    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      'province': cityData[0].name,
      'city': cityData[0].sub1[0].name,
      'county': cityData[0].sub1[0].sub2[0].name
    })
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