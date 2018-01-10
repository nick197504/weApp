var postListData = require("../../data/posts-data")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap: function(event){
    //event事件中的currentTaget.dataset.postId来取出postid
    var postid = event.currentTarget.dataset.postid;    
    wx.navigateTo({  
      //通过url地址加？的形式传递参数    
      url: 'post-detail/post-detail?id='+postid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({ postList: postListData.postList});
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