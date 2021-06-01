$(function(){
  $('.nav-button').on('click',function(){
    $('.navi').toggleClass('active');
  })
})
window.onload = function(){
  scroll_effect();

  $(window).scroll(function(){
    scroll_effect();
  });

  function scroll_effect(){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight + 50){
        $(this).addClass('scrollin');
      }
    })
  }
}

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var bgPostion = scrollTop/3;

  if(bgPostion){
    $('.bio-img').css('background-position','center top -'+ bgPostion +'px');
  }
})