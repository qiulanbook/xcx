//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 屏幕高度
    height: wx.getSystemInfoSync().windowHeight,
    // 屏幕宽度
    width: wx.getSystemInfoSync().windowWidth,
    //  获取手机顶部尺寸
    statusBarHeight: app.globalData.statusBarHeight
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    console.log('canIUse=============', this.data.canIUse)


    if (app.globalData.userInfo) {
      console.log('梁倩=================')
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      console.log('梁倩1=================')
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
        fail: err => {
          console.log('拒绝拒绝拒绝拒绝拒绝拒绝拒绝')
        }
      })
    }

    console.log('hasUserInfo=========', this.data.hasUserInfo)


  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    if(e.detail.userInfo){
      console.log('斤斤斤斤急急急急急')
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      wx.setStorage({
        key: 'userInfo',
        data: e.detail.userInfo,
      })
      // 跳转首页
      wx.switchTab({
        url: '/pages/index/index',
      })

    }
    
  }
})
