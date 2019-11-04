// 获取元素
var getElem = function( selector ){
    return document.querySelector(selector);
  }
  var getAllElem = function( selector ){
    return document.querySelectorAll(selector);
  }
//获取元素样式
var getCls=function(element){
    return element.getAttribute('class');
}
//设置元素样式
var setCls=function(element,cls){
    return element.setAttribute('class',cls);
}
//为元素添加样式
var addCls=function(element,cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(cls)===-1){
        setCls(element,baseCls+' '+cls);
    }
}
//为元素删除样式  outline AAA
var delCls=function(element,cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(cls)!=-1){
        setCls( element,baseCls.split(cls).join(' ').replace(/\s+/g,' ') );
    }
}

//第一步：初始化样式 init
var screenAnimateElements = {

    '.screen_one': [
        '.screen_one_heading',
        '.screen_one_phone',
        '.screen_one_shadow',
    ],
    '.screen_two': [
        '.screen_two_heading',
        '.screen_two_subheading',
        '.screen_two_phone',
        '.screen_two_point1',
        '.screen_two_point2',
        '.screen_two_point3'
    ],
    '.screen_three': [
        '.screen_three_heading',
        '.screen_three_subheading',
        '.screen_three_phone',
        '.screen_three_features'
    ],
    '.screen_four': [
        '.screen_four_heading',
        '.screen_four_subheading',
        '.screen_four_typeItem1',
        '.screen_four_typeItem2',
        '.screen_four_typeItem3',
        '.screen_four_typeItem4',
        '.screen_four_typeContent1',
        '.screen_four_typeContent2',
        '.screen_four_typeContent3',
        '.screen_four_typeContent4'
    ],
    '.screen_five': [
        '.screen_five_heading',
        '.screen_five_subheading',
        '.screen_five_bg'
    ]
}
//设置屏内元素为初始状态
var setScreenAnimateInit=function(screenCls){
    var screen = document.querySelector(screenCls); //获取当前屏的元素
    var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素
    for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
    }
}
//设置播放屏内的元素动画
var playScreenAnimateDone=function(screenCls){
    var screen = document.querySelector(screenCls); //获取当前屏的元素
    console.log(screen);
    var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素
    for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
    }
}

window.onload=function(){
    for (k in screenAnimateElements) {
        console.log('onload');
      setScreenAnimateInit(k);
    }
}

//第二步：滚动的到哪里，就播放到哪里

window.onscroll=function(){
    var top=document.body.scrollTop || document.documentElement.scrollTop;//浏览器兼容的写法
      if(top>80){
            addCls(getElem('.header'),'header_status_black');
      }else{
            delCls(getElem('.header'),'header_status_black');
            switchNavItemsActive(0); // 后面添加的，不需要
      }


    if(top>0){
     
        playScreenAnimateDone('.screen_one');
    }
    if(top>700){
       
        playScreenAnimateDone('.screen_two');
    }
    if(top>1400){
     
        playScreenAnimateDone('.screen_three');
    }
    if(top>2100){
      
        playScreenAnimateDone('.screen_four');
    }
    if(top>2800){
     
        playScreenAnimateDone('.screen_five');
    }
}