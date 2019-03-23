var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'PHYBZ-QW4K4-QU2U4-XC6F4-7ORX5-4ABSN'
});
Page({
  /**
   * 获取当前位置所在城市
   */
  getLocation: function() {
    wx.getLocation({
      type: 'wgs84', //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 
      altitude:true,
      success: (res) => {
        // success  
        let longitude = res.longitude
        let latitude = res.latitude
        this.setData({
          position: {
            longitude: longitude,
            latitude: latitude
          }
        })
        console.log(this.data.city);
        this.loadCity(longitude, latitude)
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
        console.log(res.result.address_component.city)
        this.cityWeather(res.result.address_component.city)//获取天气
        this.setData({
          city: res.result.address_component.city
        })
      },
      complete: () => {
        console.log("成了")
      },
      fail: () => {
        console.log("失败")
      }
    })
    
  },
    /**
   * 获取当前城市的天气
   */
  cityWeather: function (city){
    wx.request({
      url: `https://www.apiopen.top/weatherApi?city=${city}`,
      success:(res)=>{
        console.log(res.data.data)
        this.setData({
          weather: res.data.data
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    position: {},
    city:'',
    weather:{}
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})