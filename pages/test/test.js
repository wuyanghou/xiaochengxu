Page({
  data: {
    name:''
  },
  onLoad: function () {
    this.setData({name:'luoming'});
  },
  changeName(){
    console.log('changeName');
    this.setData({name:'xiaochang'});
  }
})