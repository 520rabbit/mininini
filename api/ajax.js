import ajax from './index.js'
const baseUrl = 'http://192.168.0.95:8002/api'

// 1、登录
export function login(parmas) { 
  return ajax({
    url: baseUrl + '/user/login',
    method: 'post',
    data: parmas 
  })
}

// 2、验证码
export function getCode(parmas) {
  return ajax({
    url: baseUrl + '/user/check',
    method: 'post',
    data: parmas 
  })
}

// 3、微信二次验证登录
export function wxLogin(parmas) {
  return ajax({
    url: baseUrl + '/cas/GetWXLogin',
    method: 'post',
    data: parmas
  })
}

// 4、获取用户信息
export function getUserInfo(parmas) {
  return ajax({
    url: baseUrl + '/user/UserData',
    method: 'post',
    data: parmas
  })
}

// 5、上传图片 logo
export function uploadLogo(data) {
  return ajax({
    url: baseUrl + '/user/PostUploadLogo',
    method: 'post',
    data
  })
}

// 6、上传图片 营业执照
export function uploadCompany(data) {
  return ajax({
    url: baseUrl + '/user/CompanyCert',
    method: 'post',
    data
  })
}

// 7、编辑个人信息
export function editorUserInfo(data) {
  return ajax({
    url: baseUrl + '/user/UpdateUserInfo',
    method: 'post',
    data
  })
}

// 8、职位列表
export function jobList(data) {
  return ajax({
    url: baseUrl + '/job/joblist',
    method: 'post',
    data
  })
}

// 9、使用记录
export function useRecord(data) {
  return ajax({
    url: baseUrl + '/user/CardRecord',
    method: 'post',
    data
  })
}

// 10、购买记录
export function buyRecord(data) {
  return ajax({
    url: baseUrl + '/user/PurchaseRecord',
    method: 'post',
    data
  })
}

// 11、个人信息详情
export function userInfoDetails(data) {
  return ajax({
    url: baseUrl + '/user/GetuserInfo',
    method: 'post',
    data
  })
}

// 11、上传微信图片 
export function userCode(data) {
  return ajax({
    url: baseUrl + '/user/PostUploadpersonalcode',
    method: 'post',
    data
  })
}

// 12、读取职能
export function getFun(data) {
  return ajax({
    url: baseUrl + '/user/GetJobe',
    method: 'post',
    data
  })
}

// 13、读取行业
export function getProfe(data) {
  return ajax({
    url: baseUrl + '/user/GetHy',
    method: 'post',
    data
  })
}

// 14、读取地址
export function getAddress(data) {
  return ajax({
    url: baseUrl + '/user/GetProvinces',
    method: 'post',
    data
  })
}

// 15、职位详情
export function jobDetail(data) {
  return ajax({
    url: baseUrl + '/job/JobSelect',
    method: 'post',
    data
  })
}

// 16、企业风采
export function companyInfo(data) {
  return ajax({
    url: baseUrl + '/user/GetCompanyInfo',
    method: 'post',
    data
  })
}

// 17、首页数据
export function homeList(data) {
  return ajax({
    url: baseUrl + '/interview/joblist',
    method: 'post',
    data
  })
}

// 18、发布快招
export function issueJob(data) {
  return ajax({
    url: baseUrl + '/interview/JobAdd',
    method: 'post',
    data
  })
}

// 19、交付成果
export function getResult(data) {
  return ajax({
    url: baseUrl + '/interview/Deliverable',
    method: 'post',
    data
  })
}

// 20、生成职位海报
export function creatJobImg(data) {
  return ajax({
    url: baseUrl + '/deliveryposters/getPosters',
    method: 'GET',
    data
  })
}

// 21、发布邀约
export function issueInvite(data) {
  return ajax({
    url: baseUrl + '/make/MakeAdd',
    method: 'post',
    data
  })
}

// 22、发布邀约
export function inviteJob(data) {
  return ajax({
    url: baseUrl + 'make/joblist',
    method: 'post',
    data
  })
}

// 23、邀约列表
export function inviteList(data) {
  return ajax({
    url: baseUrl + '/make/MakeList',
    method: 'post',
    data
  })
}

// 24、邀约职位详情
export function inviteDetail(data) {
  return ajax({
    url: baseUrl + '/make/JobModelSelect',
    method: 'post',
    data
  })
}



// 14、保存职位
export function saveJob(data) {
  return ajax({
    url: baseUrl + '/job/JobeSave',
    method: 'post',
    data
  })
}








