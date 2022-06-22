$(function () {
  
 
  $('.option>ul>li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $('.option>ul>li').index(this);
    $('.option>.tab').eq(index).addClass('display').siblings().removeClass('display');
  });
  
});