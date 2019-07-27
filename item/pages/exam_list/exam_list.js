// pages/exam_list/exam_list.js

Page({
  data: {
    list:[
      {},{},{},{},{},{},{},{},{}
    ]
  },
  onLoad: function () {

  },

  // 跳转页面
  go: function () {
    wx.navigateTo({
      url: '/pages/exam/exam?type=exam',
    })
  },

  /**
   * 生命周期
   */
  methods:{
    
  }
})
