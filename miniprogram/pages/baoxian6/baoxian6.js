// pages/baoxian6/baoxian6.js
Page({

    /**
     * 页面的初始数据
     */
    data:{
        navList: ['了解需求', '主要权益', '如何申请', '尊享礼遇'],
        currTab: 0, //导航栏当前项
      },
    
      //导航点击
      tabSelect: function (e) {
        console.log(e)
        let index = e.currentTarget.dataset.current
        if (this.data.currTab == index) {
          return false
        } else {
          this.setData({
            currTab: index
          })
        }
      },
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            choice:options.choice
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log(this.data.choice)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})