function ajax(options) {
  if (options.load == 1) {
    wx.showLoading({
      mask: true,
      title: '加载中'
    })
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data,
      header: {
        "content-type": "application/json"
      },
      method: options.method,
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  });
}

export default ajax
