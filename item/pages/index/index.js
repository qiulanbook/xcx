// pages/index/index.js
const app = getApp()

Page({
  data: {
    articleList:[
      {},{},{},{}
    ],
    
    // userInfo: wx.getStorage('userInfo')
  },
  onLoad: function () {
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        console.log('个人信息============', res)
      },
      fail: function(err){
        console.log('错误信息=========',err)
        wx.navigateTo({
          url: '/pages/indexs/index',
        })
      }
    })


  },

  // 首页资讯跳转
  onLink: function () {
    wx.navigateTo({
      url: '/pages/article_detail/article_detail?type=indexDetail',
    })
  },

  // 跳转页面
  go: function () {
    wx.switchTab({
      url: "/pages/exam_list/exam_list",
      complete: res => {
        console.log(res)
      }
    })
  },


  /**
   * 生命周期组件
   */
  methods:{
   
  }
})
