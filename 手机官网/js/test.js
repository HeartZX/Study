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

function setScreenAnimate(screenCls) {
    var screen = document.querySelector(screenCls); //获取当前屏的元素
    var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素

    var isSetAnmateClass = false; //是否有初始化子元素的样式
    var isAnimateDone = false; //当前屏幕下所有子元素的状态是done?
    console.log(screen);
    screen.onclick = function () {

        //初始化样式  增加init
        if (isSetAnmateClass == false) {
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
            }
            isSetAnmateClass = true;
            return;
        }

        //切换所有 animateElements 的  init->done   A A_done
        if (isAnimateDone == false) {
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
            }
            isAnimateDone = true;
            return;
        }


        //切换所有 animateElements 的  done->init  A A_init
        if (isAnimateDone == true) {
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_done', '_animate_init'));
            }
            isAnimateDone = false;
            return;

        }

    }

}

for (k in screenAnimateElements) {
    console.log(k);
    setScreenAnimate(k);
}