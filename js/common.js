//scroll 막기
$('.main').on('scroll touchmove mousewheel', e => {
  $('.main').scrollTop(0);
});

//page전환
$(document).ready(function () {
  $('body').css('display', 'none');
  $('body').fadeIn(2000);
  $('a.transition').click(function (e) {
    e.preventDefault();
    linkLocation = this.href;
    $('body').fadeOut(1000, redirectPage);
  });
});

//backBtn - 뒤로가기
$('#cancel').click(function () {
  history.go(-1)();
});

//순서대로 나타나기
$(document).ready(function () {
  var jbTime = 400;
  $('.textWrap_title').animate(
    {
      opacity: '1',
      top: '0',
    },
    jbTime,
    function () {
      $('.textWrap_text').animate(
        {
          opacity: '1',
          top: '0',
        },
        jbTime,
        function () {
          $('.subMenu').animate(
            {
              opacity: '1',
              top: '0',
            },
            jbTime
          );
        }
      );
    }
  );
});
