// pages/home/home.js
Page({
  /**
   * 顶部导航栏切换函数,同时获取选择分类的文章
   */
  switchTab: function(e) {
    if (this.data.navItem != e.currentTarget.dataset.index) {
      this.setData({
        navItem: e.currentTarget.dataset.index,
        navItemMessage: []
      })
      this.getCategoryContent();
    }
  }, //

  /**
   * 获取全部分类名字及Id
   */
  getAllCategories() {
    wx.request({
      url: 'https://moment.douban.com/api/columns', // 豆瓣文章全部分类接口
      success: (res) => {
        // console.log(res.data)
        var title = [];
        var categories = [];
        for (var i = 0; i < res.data.columns.length; i++) {
          title.push(res.data.columns[i].name);
          categories.push({
            "title": res.data.columns[i].name,
            "id": res.data.columns[i].id
          });
        }
        // console.log(categories);
        this.setData({
          AllCategories: categories
        })
        this.getCategoryContent();
      }
    })
  },


  /**
   * 获取分类内容
   */
  getCategoryContent(maxID = 400000) {
    // console.log(maxID);
    wx.request({ //获取当前目录的内容
      url: `https://moment.douban.com/api/column/${this.data.AllCategories[this.data.navItem].id}/posts?max_id=${maxID}&count=20`,
      success: (res) => {
        // console.log(res.data);
        let itemMessage = [];
        for (let i = 0; i < res.data.posts.length; i++) {
          itemMessage.push({
            "title": res.data.posts[i].title,
            "description": res.data.posts[i].abstract,
            "url": res.data.posts[i].url,
            "image": res.data.posts[i].thumbs.length == 0 ? "" : res.data.posts[i].thumbs[0].small.url, //有的元素没有res.data.posts[i].thumbs[0].small.url所以要判断
            "id": res.data.posts[i].id
          })
        }
        this.setData({
          navItemMessage: this.data.navItemMessage.concat(itemMessage),
          isHideLoadMore:true
        })
      }
    })
  },


  /**
   * 跳转到豆瓣文章详情页
   */
  gotoDouban(e) {
    wx.navigateTo({
      url: '../douban/douban?data=' + e.currentTarget.dataset.url,
      success() {
        // console.log("成功")
      }
    })
  },


  /**
   * 页面的初始数据
   */
  data: {
    navItem: 0, //分类的item
    AllCategories: [],//全部de分类
    navItemMessage: [], //单个分类的详细信息
    isHideLoadMore: false//是否显示上拉加载
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getAllCategories();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.setData({
      isHideLoadMore:false
    })
    console.log(this.data.isHideLoadMore);
    let maxId = this.data.navItemMessage[this.data.navItemMessage.length - 1].id;
    this.getCategoryContent(maxId);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})