// pages/article_detail/article_detail.js
Page({
  data: {
    type: ''
  },
  onLoad: function (options) {
    this.setData({
      type: options.type
    })
    console.log('111111111111111======',options)
  }
})
