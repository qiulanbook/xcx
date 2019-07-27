// component/nav/nav.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    type: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    show: false
  },

  ready: function () {
    console.log('this============', this.properties.type)
    if(this.properties.type == 'articleDetail' || this.properties.type == 'indexDetail' || this.properties.type == 'articleList' || this.properties.type == 'listDetail' || this.properties.type == 'errorList'){
      this.setData({
        show: true
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 返回上一页
    go: function(){
      
      if(this.properties.type == 'articleDetail' || this.properties.type == 'articleList'){
        wx.switchTab({
          url: '/pages/article/article',
        })
      }

      if(this.properties.type == 'indexDetail'){
        wx.switchTab({
          url: '/pages/index/index',
        })
      }

      if (this.properties.type == 'listDetail'){
        wx.navigateBack({
          delta: 1
        })
      }

      if (this.properties.type == 'errorList') {
        wx.switchTab({
          url: '/pages/user/user',
        })
      }

      
    }
  }
})
