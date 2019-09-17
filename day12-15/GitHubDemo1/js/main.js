// 设置 chats-list 高度
var windowsHeight = window.innerHeight,
    headerHeight = $('header').outerHeight(),
    searchHeight = $('.search').outerHeight(),
    chatsHeight = windowsHeight - headerHeight - searchHeight;
$('.chats-list').css('height', chatsHeight);
$('.chat-content').css('height', chatsHeight);

// 用户
var action = true;
$('.drop-down').on('click', function () {
    if (action === true) {
        $('.down-list').addClass('active');
        action = false;
    } else {
        $('.down-list').removeClass('active');
        action = true;
    }
})

// 激活
function active(elem) {
    var a = $(elem);
    $(a).on('click', function () {
        $(a).removeClass('active');
        $(this).addClass('active');
    })
}

var b = $('.items li'),
    c = $('.part li'),
    d = $('.chats-list li');
active(b);
active(c);
active(d);
