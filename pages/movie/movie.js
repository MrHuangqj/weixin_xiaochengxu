// pages/movie/movie.js

var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'PHYBZ-QW4K4-QU2U4-XC6F4-7ORX5-4ABSN'
});
Page({
  /**
   * 获取当前位置所在经纬度
   */
  getLocation: function() {
    wx.getLocation({
      type: 'wgs84', //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 
      altitude: true,
      success: (res) => {
        console.log(res.longitude, res.latitude)
        this.loadCity(res.longitude, res.latitude)
      }
    })
  },


  /**
   * 获取当前经纬度的城市
   */
  loadCity: function(longitude, latitude) {
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: (res) => {
        let city = res.result.address_component.city.replace("市", "")
        console.log(city)
        this.getMovie(city)
        this.setData({
          city: city
        })
      },
      complete: () => {
        // console.log("成了")
      },
      fail: () => {
        console.log("失败")
      }
    })

  },

  /**
   * 获取当前城市上映电影信息
   */
  getMovie: function (city = this.data.city, start=0, count=10) {
    wx.request({
      header: {
        "Content-Type": "application/text"
      },
      url: `https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=${city}&start=${start}&count=${count}&client=&udid=`,
      success: (res) => {
        console.log(res.data);
        this.setData({
          movie: res.data,
          count: res.data.count,
          total: res.data.total
        })
      },
      fail: function(res) {
        console.log(res);
      }
    })

  },
  /**
   * 页面的初始数据
   */
  data: {
    city: '',
    movie: [],
    count: '',
    total: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      this.getLocation();   
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
    if (this.data.count < this.data.total)
      this.getMovie(this.data.city, 0, this.data.count + 10)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})