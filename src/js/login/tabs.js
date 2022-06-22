$(function () {
  
  $('.div-div>ul>.qr').on('click', function () {
    $(this).addClass('visibility').siblings().removeClass('visibility');
    let index = $('.div-div>ul>.qr').index(this);
    $('.div-div>.box').eq(index).addClass('display').siblings().removeClass('display');
  });
  $('.box>.menu>li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $('.box>.menu>li').index(this);
    $('.box>.tab').eq(index).addClass('display').siblings().removeClass('display');
  });
  console.log($('.div-div>ul>li'));
  console.log( $('.div-div>.box'))
});

// 登录选项卡有个失败  li消失  导致无法hover