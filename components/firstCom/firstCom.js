Component({
  options:{
    multipleSlots:true,
  },
  properties:{
      selfName:{
        type:String,
        observer(newVal,oldVal,path){
          // 当前方法可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
          console.log(newVal);
          console.log(oldVal);
          // 当前实例对象 可正常调用所有方法
          console.log(this);
          this.setData({isChanged:true});
          this.printLog();
        }
      },
      selfAge:{
        type:Number,
        observer:'_observerAgeChange'
      }
  },
  data:{
    isChanged:false
  },
  methods:{
    printLog(){
      console.log('name changed');
    },
    _observerAgeChange(){
      console.log('age changed');
    }
  }
})