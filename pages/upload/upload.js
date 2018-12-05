import { request } from '../../utils/util.js';
console.log(request);
Page({
  data: {
    status: '未下载',
    tempFilePaths:[],
    ossKey:null,
  },
  onLoad:()=>{
    console.log(1234);
    request({
      method:'GET',
      url:'/getOssKey',
      success:(res)=>{
        console.log(res);
      },
      fail:()=>{
        wx.showToast({
          title: '获取阿里云上传签名失败',
        })
      }
    });
  },
  chooseImgs: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:(res)=> {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        let formData = new formData();
        wx.uploadFile({
          url: 'https://wuyanghou.oss-cn-shanghai.aliyuncs.com',
          filePath: tempFilePaths[0],
          name: 'test',
          formData,
        })
        this.setData({ tempFilePaths });
      }
    })
  }
})