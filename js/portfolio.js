// webフォントチラつき対策
setTimeout(function () {
  document.getElementsByTagName("html")[0].classList.add("loading-delay");
}, 1);

// ハンバーガーメニュー
$('.btn_trigger').on('click',function(){
  $('.btn_trigger').toggleClass('close');
  $('.nav_wrap').fadeToggle(300);
  $('body').toggleClass('noscroll');
});
if( $(window).width()<= 959 ){
  $('.nav_item>a').on('click',function(){
  $('.nav').fadeOut(300);
  $('.btn_trigger').removeClass('close');
  $('body').removeClass('noscroll');
  });
}

// マウスストーカー
let hovFlag = false;

conststalker = document.getElementById('stalker');
document.addEventListener('mousemove', function (e) {
  if (!hovFlag) {
  stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  }
});

const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {

  linkElem[i].addEventListener('mouseover', function (e) {
    hovFlag = true;

    stalker.classList.add('hov_');

    let rect = e.target.getBoundingClientRect();
    let posX = rect.left + (rect.width / 2);
    let posY = rect.top + (rect.height / 2);

    stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
  });

  linkElem[i].addEventListener('mouseout', function (e) {
    hovFlag = false;
    stalker.classList.remove('hov_');
  });
}
// カーソル
let cursorR = 4;
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function (e) {
  cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// const linkElem = document.querySelectorAll('a');
// for (let i = 0; i < linkElem.length; i++) {
//     linkElem[i].addEventListener('mouseover', function (e) {
//         cursor.classList.add('hov_');
//     });
//     linkElem[i].addEventListener('mouseout', function (e) {
//         cursor.classList.remove('hov_');      
//     });
// }

// スクロール フェードイン
$(function(){
  $(window).scroll(function (){
      $('.effect-fade').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('effect-scroll');
          }
      });
    });
  });

  $(function(){
    $(window).scroll(function (){
        $('.effect-fade-after').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll-after');
            }
        });
      });
    });

$('.key_visual_title').hide().fadeIn(5000);
$('.key_visual_subtitle').hide().fadeIn(6000);