// pages/demo07/demo07.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:"",
    list:[
      {
        id:0,
        key:"Java",
        value:"Java大师"
      },
      {
        id:1,
        key:"Kotlin",
        value:"Kotlin大师"
      },
      {
        id:2,
        key:"JavaScript",
        value:"JavaScript大师"
      }
    ],
    checkedList:[]
  },
  handleSelect(e){
    let gender=e.detail.value
    this.setData({
      gender:gender
    })
  },
  handleBox(e){
    let l=e.detail.value
    this.setData({checkedList:l})
  }

})