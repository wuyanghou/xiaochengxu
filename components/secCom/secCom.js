// components/secCom/secCom.js
import behaviors from '../../behaviors/index.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  behaviors: [behaviors],

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes:{
    created(){},
    attached(){
      // 在组件实例进入页面节点树时执行,可以访问 data，调用方法
      this.print();
    },
    detached(){
       // 在组件实例移出页面节点树时执行
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    triggerClick(){
      this.triggerEvent('SubEvent',{name:'xxxx'})
    }
  }
})
