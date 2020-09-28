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

$(function() {
  $('#loader-bg').removeClass('is-hide');
  $('#loading').removeClass('is-hide');
  $('#top-body').addClass('is-hide');
});
  
$(window).on('load',function () { //全ての読み込みが完了したら実行
  $('#loader-bg').addClass('is-hide');
  $('#loading').addClass('is-hide');
  $('#top-body').removeClass('is-hide');
});

//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});

$(function(){
  function stopload(){
    $('#loader-bg').addClass('is-hide');
    $('#loading').addClass('is-hide');
    $('#top-body').removeClass('is-hide');
  }
});
