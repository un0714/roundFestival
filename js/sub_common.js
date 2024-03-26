const tabWrapBtn = document.querySelectorAll('#tabWrap .button');
const tabWrapBtnArr = Array.prototype.slice.call(tabWrapBtn);

const numArr = [];
const numEl = Array.prototype.slice.call(
  document.querySelectorAll('#tabWrap .button .num')
);

const BruneiArr = Array.prototype.slice.call(
  document.querySelectorAll('.Brunei')
).length;
const CambodiaArr = Array.prototype.slice.call(
  document.querySelectorAll('.Cambodia')
).length;
const IndonesiaArr = Array.prototype.slice.call(
  document.querySelectorAll('.Indonesia')
).length;
const LaoPDRArr = Array.prototype.slice.call(
  document.querySelectorAll('.LaoPDR')
).length;
const MalaysiaArr = Array.prototype.slice.call(
  document.querySelectorAll('.Malaysia')
).length;
const PhilippinesArr = Array.prototype.slice.call(
  document.querySelectorAll('.Philippines')
).length;
const SingaporeArr = Array.prototype.slice.call(
  document.querySelectorAll('.Singapore')
).length;
const ThailandArr = Array.prototype.slice.call(
  document.querySelectorAll('.Thailand')
).length;
const VietnamArr = Array.prototype.slice.call(
  document.querySelectorAll('.Vietnam')
).length;
const KoreaArr = Array.prototype.slice.call(
  document.querySelectorAll('.Korea')
).length;

//subPage content Top
$(document).ready(function () {
  $('.bgImgBox').slideDown(800, 'easeInOutCirc', function () {});
});

//backBtn - 뒤로가기
$('#cancel').click(function () {
  history.go(-1)();
});

// isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    gutter: 24,
  },
});

$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({
    filter: filterValue,
  });
  // onArrange($grid.isotope()[0].children, filterValue);
});

// function onArrange(el, filterValue) {
//   const filterArr = Array.prototype.slice.call(el);
//   const filterVal = filterValue.substr(1);

//   if (filterVal) {
//     const filterOnArr = filterArr.filter(f => f.classList.contains(filterVal));
//     let cBox = [];
//     cBox.splice(
//       0,
//       999,
//       filterOnArr.map(g => g.childNodes[1].childNodes[3].childNodes[1])
//     );
//     colorboxFnc(cBox[0]);
//   }
// }

function colorboxFnc(Arr) {
  $(Arr).colorbox({
    rel: 'slideshow',
    width: '100%',
    height: '100%',
    scrolling: false,
    slideshow: true,
    slideshowAuto: false,
    transition: 'fade',
    onOpen: function () {
      $('body').css('overflow', 'hidden');
    },
    onClosed: function () {
      $('body').css('overflow', 'visible');
    },
  });
}

$(document).ready(function () {
  colorboxFnc('.cBox');
  //num
  numArr.push(
    BruneiArr +
      CambodiaArr +
      IndonesiaArr +
      LaoPDRArr +
      MalaysiaArr +
      PhilippinesArr +
      SingaporeArr +
      ThailandArr +
      VietnamArr +
      KoreaArr,
    BruneiArr,
    CambodiaArr,
    IndonesiaArr,
    LaoPDRArr,
    MalaysiaArr,
    PhilippinesArr,
    SingaporeArr,
    ThailandArr,
    VietnamArr,
    KoreaArr
  );
  numEl.map((el, index) => (el.innerText = numArr[index]));
});

//activeBtn
$('.button').click(function () {
  if ($(this).hasClass('active')) {
    $('.button').removeClass('active');
  } else {
    $('.button').removeClass('active');

    $(this).addClass('active');
  }
});
