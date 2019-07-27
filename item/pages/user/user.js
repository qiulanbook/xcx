// pages/user/user.js
Page({
  data: {

  },

  // 跳转错题记录
  go: function(){
    wx.navigateTo({
      url: '/pages/error_list/error_list',
    })
  },
  onLoad: function () {

  }
})