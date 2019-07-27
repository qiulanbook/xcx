// pages/article/article.js
Page({
  data: {

  },
  onLoad: function () {

  },

  // 更多跳转
  moreGo: function(){
    wx.navigateTo({
      url: '/pages/article_list/article_list',
    })
  },

  // 跳转
  go: function () {
    wx.navigateTo({
      url: '/pages/article_detail/article_detail?type=articleDetail',
    })
  },

  /**
   * 生命周期
   */
  methods:{
    
  }
})
