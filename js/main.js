$(function(){
  var $images = $('.grid a');
  $images.on('mouseover', function(){
    $(this).find('span').css('display','block');
  });
  $images.on('mouseout', function(){
    $(this).find('span').css('display','none');
  });
  $('.header-cont ul li p,.scroll-button-icon').click(function(){
    var id = $(this).attr('href');
    var positon = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': positon
    },'slow');
  });
  $(window).scroll(function(){
    var positon = $('#works').offset().top;
    if($(this).scrollTop() > positon){
      $('.scroll-button').css('display','block');
    }
    else{$('.scroll-button').css('display','none');}
  });
});
