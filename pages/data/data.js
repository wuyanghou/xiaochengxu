import {request} from '../../utils/util.js';

Page({
  data: {
    domain:'www.luomings.com',
    status:'未登录'
  },
  onLoad: function () {
    request({
      method:'POST',
      url:'/login',
      data: {
        email: "18317943550",
        password: "12345678"
      },
      success:(res)=>{
        this.setData({ status: '登录成功' });
      }
    });
  }
})