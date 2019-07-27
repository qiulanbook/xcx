// pages/library/library.js
Page({
  data: {
    list: [
      {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
    ],
    show: false,
    height: wx.getSystemInfoSync().windowHeight
  },
  onLoad: function () {

  },

  // 点击下载按钮弹窗事件
  down: function () {
    this.setData({
      show: true
    })
  },

  // 点击取消按钮
  cancel: function () {
    this.setData({
      show: false
    })
  },

  /**
   * 生命周期组件
   */
  methods:{
    
  }
})
