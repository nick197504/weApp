var postData = require("../../../data/posts-data.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic:false
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
    //console.log(app.globalData);
    if(app.globalData.g_isPlayMusic && app.globalData.g_currentPostId == postId){
      this.setData({
        isPlayingMusic: true
      })
    }
    this.playMusicMonitor();
    
  },

  playMusicMonitor:function(){
    var that = this;
    wx.onBackgroundAudioPlay(function(){
      //console.log(event);
      //console.log(getCurrentPages())
      //getCurrentPages()是到当前页面栈的方法
      var postsData = getCurrentPages();
      var currentPost = psotsData[postsData.length-1];
      var currentPostId = currentPost.data.currentPostId; 
      //判断从页面栈中取出当前页面是否与实际的昂起按页面相符
      if(currentPostId == that.data.currentPostId && app.globalData.g_currentPostId == that.data.currentPostId){
        that.setData({
          isPlayingMusic: true
        });
        app.globalData.g_isPlayMusic = true;
        app.globalData.g_currentPostId = that.data.currentPostId;
      }
        
    });
    wx.onBackgroundAudioPause(function(){
      console.log(getCurrentPages());
      var postsData = getCurrentPages();
      var currentPost = psotsData[postsData.length - 1];
      var currentPostId = currentPost.data.currentPostId; 
      if (currentPostId == that.data.currentPostId && app.globalData.g_currentPostId == that.data.currentPostId){
        that.setData({
          isPlayingMusic: false
        });
        app.globalData.g_isPlayMusic = false;
        app.globalData.g_currentPostId = null;
      }
     
    })
  },

  onShowTap:function(event){
   //this.getPostCollectSync();
   this.getPostCollectAsy();
    //测试提示框
   //this.showModal(postsCollected,postCollected);
  },
  
  getPostCollectSync:function(){
    //同步获取数据   
    var postsCollected = wx.getStorageSync("collected-key");
    var postCollected = postsCollected[this.data.currentPostId];
    postCollected = !postCollected
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postsCollected, postCollected);
  },

  getPostCollectAsy:function(){
  //异步获取数据
  var that = this;
  wx.getStorage({
    key: 'collected-key',
    success: function(res) {
      console.log(res);
      var postsCollected = res.data;
      var postCollected = postsCollected[that.data.currentPostId];
      //收藏变为不收藏
      postCollected = !postCollected;
      postsCollected[that.data.currentPostId] = postCollected;
      that.showToast(postsCollected,postCollected);
    },
  })
  },
  //显示收藏提示的方法
  showToast: function (postsCollected, postCollected){
    wx.setStorageSync("collected-key", postsCollected);
    this.setData({
      collected: postCollected
    });
    wx.showToast({
      title: postCollected ? '收藏成功' : "取消收藏",
    })
  },
  showModal: function (postsCollected, postCollected){
    var that = this;
    wx.showModal({
      title: '收藏提示',
      content: postCollected?'确认收藏？':"确认取消？",
      showCancel: true,
      cancelText: '取消',
      cancelColor: '405f80',
      confirmText: '确认',
      confirmColor: '405f80',
      success: function (res) {
        if(res.confirm){
          wx.setStorageSync("collected-key", postsCollected);
          that.setData({
            collected: postCollected
          });
        }
       }      
    })
  },
  onShareTap:function(){
    var itemList = [
      "分享到朋友圈",
      "分享给朋友",
      "分享到QQ",
      "分享到微博"
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor:"405f80",
      success:function(res){
       // console.log(res.tapIndex);
        console.log(res);
      }
    });
  },

  onMusicTap:function(event){
    var currentPostData = postData.postList[this.data.currentPostId];
    var currentPostId = this.data.currentPostId;
    var isPlayingMusic = this.data.isPlayingMusic;
    if(isPlayingMusic){
      wx.pauseBackgroundAudio();      
      this.setData({
        isPlayingMusic:false
      });
      app.globalData.g_isPlayMusic = false;
    }else{
      wx.playBackgroundAudio({
        dataUrl: currentPostData.music.url,
        title: currentPostData.music.title,
        coverImgUrl: currentPostData.music.coverImg
      });      
      this.setData({
        isPlayingMusic:true
      });
      app.globalData.g_isPlayMusic = true;
      app.globalData.g_currentPostId = currentPostId;
    }

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
    //this.onShareTap();
    console.log("onShareMessage");
  }
})