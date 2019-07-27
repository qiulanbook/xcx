// pages/article_list/article_list.js
Page({
  data: {
    list:[
      {},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ]
  },
  // 跳转到详情
  go: function(){
    wx.navigateTo({
      url: '/pages/article_detail/article_detail?type=listDetail',
    })
  },
  onLoad: function () {
  
  }
})
