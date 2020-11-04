// 按钮的显示和消失
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $('.fa-hand-o-up').css('visibility', 'visible')
    $('.fa-hand-o-up').fadeIn(300);
  } else {
    $('.fa-hand-o-up').fadeOut(200);
  }
})

// 返回顶部
$(".fa-hand-o-up").click(function () {
  scrollTo(0, 0);
});