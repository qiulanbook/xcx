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
    statusBarHeight: app.globalData.statusBarHeight
  },

  ready: function(){
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    go: function(e){
     
      if(this.properties.type == 'exam'){
        wx.switchTab({
          url: '/pages/exam_list/exam_list',
        })
      }
      
    }
  }
})
