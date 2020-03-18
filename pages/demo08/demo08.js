// pages/demo08/demo08.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"要闻",
        isActive:true
      },
      {
        id:1,
        name:"推荐",
        isActive:false
      },
      {
        id:2,
        name:"原创",
        isActive:false
      }
    ]

  },
  handleItemChange(e){
    const {index}=e.detail
    let {tabs}=this.data
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    this.setData({tabs})
  }
})