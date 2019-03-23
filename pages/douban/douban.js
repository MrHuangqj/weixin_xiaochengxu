// pages/douban/douban.js
var WxParse = require('../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: options.data,
      success: (res) => {
        /**
         * 处理返回来的包含HTML,css,js的数据,提取只有包含html的部分
         * 去掉文章中字符
         */
        // console.log(res.data);
        let star = res.data.indexOf(`豆瓣每日内容精选`);
        let end = res.data.indexOf(`</body>`);
        let article = res.data.substr(star, end);
        let str = article.split("更多评论及精选内容");
        article = str[0];
        // str = str[0].split("查看原文");
        // article = str[0];
        // str = str.pop()
        // str = str.split("后写下你的评论");
        // article = `${article}<p>文章评论:</p>${str[1]}`;
        // article = article.replace(`豆瓣每日内容精选`, "");
        // article = article.replace(`&#124`, "");
        // article = article.replace(`&copy;`, "");

        // console.log(str);
        // console.log(star);
        // console.log(end);
        WxParse.wxParse('article', 'html', article, this, 5);
      }
    })

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})