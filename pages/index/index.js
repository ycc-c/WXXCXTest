//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getImage: function() {
    console.log(1)
    wx.downloadFile({
      url: 'https://imbank.wrcbtest.com:5443/agreement/daecundan.pdf', 
      success: function (res) {
        console.log(res)
        var filePath = res.tempFilePath
        var filename =  'https://imbank.wrcbtest.com:5443/agreement/daecundan.pdf';
        var index1 = filename.lastIndexOf(".");
        var index2 = filename.length;
        var postf = filename.substring(index1, index2);//后缀名
        var postf1 = postf.replace(/\./g, '')
        console.log(postf1)
        if (filePath != null) {
          wx.openDocument({
            filePath: filePath,
            fileType: postf1,
            success: function (res) {
              console.log(res)
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }
        // wx.openDocument({
        //   filePath: filePath,  
        //   success: function (res) { 
        //     console.log('打开文档成功')  
        //   }  
        // })
      }
    // wx.login({
    //   success (res) {
    //     if (res.code) {
    //       console.log(1)
    //      console.log(res);
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    })
  },
  fail: function (res) {
    console.log(res)
  }
})
