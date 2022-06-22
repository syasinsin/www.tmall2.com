$.fn.extend({
  tabs(options){
    const defaults = {
      ev:'click', // 默认事件
      active:'active', // 默认选项(className)
      display:'display', // 默认显示(className)
      visibility:'visibility'
    }

    $.extend(defaults,options); // 合并对象 合并参数

    // 选择元素
    // 选择元素的方式 通过当前函数执行的对象进行
    // console.log(this);

    let btns = this.children('ul').children('li');
    let contents = this.children($('.tab123'));

   btns.on(defaults.ev,function(){
    let index = btns.index(this);
    $(this).addClass(defaults.active).siblings().removeClass(defaults.active);
    contents.eq(index).addClass(defaults.display).siblings().removeClass(defaults.display);
   });

  }
});