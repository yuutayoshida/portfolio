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
  $(function() {
    var h = $(window).height();
    $('#top-body').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');
  });
    
  $(window).on('load',function () { //全ての読み込みが完了したら実行
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loading').delay(900).fadeOut(300);
    $('#top-body').css('display','block');
  });
    
  //10秒たったら強制的にロード画面を非表示
  $(function(){
    setTimeout('stopload()',10000);
  });
    
  function stopload(){
    $('#top-body').css('display','block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loading').delay(900).fadeOut(300);
  }
});