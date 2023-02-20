// pages/qianbao1/qianbao1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ishide:0,
        money:0
    },
    set:function(){
        if(this.data.ishide==1)
        {
            this.setData({
                ishide:0
            })
        }
        if(this.data.ishide==0)
        {
            this.setData({
                ishide:1
            })
            this.onLoad()
        }

    },
    bindKeyInput: function (e) {
        this.setData({
          money: e.detail.value
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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