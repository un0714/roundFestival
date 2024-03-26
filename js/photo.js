//colorbox
$(document).ready(function () {
  $('.cBox').colorbox({
    rel: 'slideshow',
    width: '100%',
    height: '100%',
    scrolling: false, //컬러박스에 생기는 스크롤바 제거
    slideshow: true,
    slideshowAuto: false,
    transition: 'fade',
    onOpen: function () {
      //컬러박스가 열렸을 때
      $('body').css('overflow', 'hidden');
    },
    onClosed: function () {
      //컬러박스가 닫혔을 때
      $('body').css('overflow', 'visible');
    },
  });
});

function autoResize(i) {
  var iframeHeight = i.contentWindow.document.body.scrollHeight;
  i.height = iframeHeight + 20;
}

//backBtn - 뒤로가기
https: $('#cancel').click(function () {
  history.go(-1)();
});
