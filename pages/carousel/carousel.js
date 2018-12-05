Page({
  data: {
    indicatorDots: true,
    autoplay:true,
    interval:3000,
    duration:500,
    imgUrls:[
      '../../imgs/timg1.jpg',
      '../../imgs/timg2.jpg',
      '../../imgs/timg3.jpg',
      '../../imgs/timg4.jpg',
    ],
    httpImgUrls:[
      'http://wuyanghou.oss-cn-shanghai.aliyuncs.com/1541577751272',
      'http://wuyanghou.oss-cn-shanghai.aliyuncs.com/1541574795698',
      'http://wuyanghou.oss-cn-shanghai.aliyuncs.com/1541584424362',
      'http://wuyanghou.oss-cn-shanghai.aliyuncs.com/1541583707360'
    ],
  },
  onLoad: function () {
    this.setData({ name: 'luoming' });
  },
  changeIndicatorDots(){
    const { indicatorDots } = this.data;
    this.setData({ indicatorDots: !indicatorDots});
  },
  changeAutoplay(){
    const { autoplay } = this.data;
    this.setData({ autoplay: !autoplay });
  },
  previewImg(e){
    let src = e.target.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接  
      urls: this.data.httpImgUrls // 需要预览的图片http链接列表  
    })
  }
})