var postListData = require("../../data/posts-data")

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
    /*
    var local_content = [{
        title: "比利·林恩的中场故事",
        content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
        imgSrc: "/images/post/bl.png",
        reading: 62,
        detail: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性”李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。预告片首次曝光后，被视作是明年奥斯卡种子选手。该片根据同名畅销书改编。原著小说荣获美国国家图书奖。也被BBC评为21世纪最伟大的12本英文小说之一。影片讲述一位19岁德州男孩的比利·林恩入伍参加伊战，在一次交火中他大难不死，意外与战友成为大众的关注焦点，并被塑造成英雄。之后他们返回国内，在橄榄球赛中场休息时授勋。这名战争英雄却面临前所未有的心灵煎熬……李安为什么选中这部电影来拍？因为李安想要挑战前所未有的技术难题：以120帧每秒的速度、4K、3D技术全面结合，来掀起一场电影视觉革命。什么意思？所谓“电影是24格每秒的谎言”，其中的24格，就是帧数。",
        collection: 92,
        dateTime: "24小时前",
        headImgSrc: "/images/post/bl.png",
        author: "迷的城",
        date: "Nov 20 2016",
        avatar: "/images/avatar/1.png",
        postId: 1,
        music: {
          url: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
          title: "鬼迷心窍-李宗盛",
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000"
        }
      },
      {
        title: "当我们在谈论经济学时，我们在谈论什么?",
        content: "引言在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：...",
        detail: "1 引言\n\n在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：有些人套用“经济理论“的知识去解释现实中发生的经济事件，结果发现很多事情讲不通，或者发现”理论告诉我们的“与现实发生的是相反的。也有学生经常跟我说：经济学有什么用？为了说明这个，我经常从两个方面来进行解释，尝试用我个人所擅长的解决问题的视角和他们能够听懂的方法来说明经济学是什么，它的作用边界在哪里：\r\n\n2 ”简笔素描“与”油画肖像“我们给人画肖像画，可以用简笔素描，也可以用油画肖像。油画肖像可以在最大程度上保存了人物的各方面的细节和特点，而简笔素描则忽略了很多细节。尽管简笔素描忽略了人物的许多细节，但我们仍旧能够很容易的认出画中的人物是谁。为什么？因为这种方法保留了人物最显著的特征，以至于我们可以忽略其次要特征而对人物做出判定。\n\n2.1 ”简笔素描“对于绝大多数的非经济学专业大众而言（经济学相关专业硕士学历以上），人们所接触到的经济学都是初级微观经济学。所谓的初级微观经济学，对于经济问题的”画法“就是一种”简笔素描“。比如初级微观经济学教材中广为使用的这种一元一次需求函数：y=bx+a，需求量的唯一变量是产品价格。但仅凭直觉我们就可以断言，现实中影响需求量的因素绝不止价格这一种，因此我们可以认为这个模型对经济问题的描述是失真的。然而但这种失真却是必要的和有意义的，其意义在与它利于揭示价格对于需求的影响，而不在于否定影响需求的其他因素——",
        imgSrc: "/images/post/sls.jpg",
        headImgSrc: "/images/post/sls.jpg",
        reading: 62,
        collection: 92,
        author: "知乎",
        date: "Nov 12 2016",
        dateTime: "三天前",
        avatar: "/images/avatar/3.png",
        postId: 2,
        music: {
          url: "http://ws.stream.qqmusic.qq.com/C100004HLusI2lLjZy.m4a?fromtag=38",
          title: "女儿情-万晓利",
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"
        }
      }
    ]
  */
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