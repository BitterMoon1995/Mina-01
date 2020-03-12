// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  fucker(e){
    this.setData({
      num:e.detail.value
    })
  },
  handleTap(e){
    const x=e.currentTarget.dataset.nigger
    this.setData({
      num:this.data.num+x
    })
  }

})