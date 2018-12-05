import { download } from '../../utils/util.js';

Page({
  data: {
    status: '未下载',
    src:''
  },
  downloadFile: function () {
    download({
      url: 'https://wuyanghou.oss-cn-shanghai.aliyuncs.com/1541575905595',
      success: (res) => {
        console.log(res)
        this.setData({ status: '下载成功' });
      }
    });
  }
})