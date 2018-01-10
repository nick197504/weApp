var postData = require("../../../data/posts-data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    var currentPostData = postData.postList[postId];
    //console.log(currentPostData);
    this.setData({
      postData: currentPostData,
      currentPostId:postId
    });

    var postsCollected = wx.getStorageSync("collected-key");
    console.log("postsCollected"+postsCollected);
    if(postsCollected){
      var postCollected = postsCollected[postId];
      console.log("postCollected"+postCollected);
      this.setData({
        collected:postCollected
      });
    }else{
      postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync("collected-key", postsCollected);
    }
    
  },

  onShowTap:function(event){
    var that = this;
    //this.wx.getStorageSync("collected_key");
    var postsCollected = wx.getStorageSync("collected-key");
    console.log(postsCollected);
    var postCollected = postsCollected[that.data.currentPostId];
    postCollected = !postCollected
    //console.log(postCollected);
    postsCollected[that.data.currentPostId] = postCollected;
    //console.log(postsCollected);
    wx.setStorageSync("collected-key", postsCollected);
    this.setData({
      collected: postCollected
    });
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