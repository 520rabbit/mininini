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













// 6、企业信息详情
export function companyInfo(data) {
  return ajax({
    url: baseUrl + '/user/GetCompanyInfo',
    method: 'post',
    data
  })
}



// 9、读取行业
// export function buyRecord(data) {
//   return ajax({
//     url: baseUrl + '/user/GetHy',
//     method: 'post',
//     data
//   })
// }







// 13、职位详情
export function jobDetail(data) {
  return ajax({
    url: baseUrl + '/job/JobSelect',
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








