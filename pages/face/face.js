// pages/face/face.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },
  getInfo(){
    console.log(1)
    wx.request({
      url: 'https://zncymobile.wrcb.com.cn/judge/JudgeTellerLogin.do',
      data:{
        tellerId:'18012451634',
        password:'888888'
      },
      success:(res)=>{
        console.log(res)
        this.setData({
          userInfo:res.data
        })
        console.log(this.data.userInfo)
      }
    })
  }
})