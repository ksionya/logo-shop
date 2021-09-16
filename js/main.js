//Карусель
$('.brands-carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.main-carousel_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.main-carousel_nav'
});
$('.main-carousel_nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.main-carousel_for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '210px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: "100px"
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: "50px"
      }
    }
  ]
});

$('.carousel-popular').slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.prev').on('click', function() {
  $('.carousel-popular').slick('slickPrev')
})
$('.next').on('click', function() {
  $('.carousel-popular').slick('slickNext')
})

$('.product-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-nav'
});
$('.product-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true
});



// Меню бургер
$('.menu-top .burger').on('click', function () {
      $('.menu-top .burger, .menu-list').toggleClass('active')
    });

if ($(window).width() < 768) {
  $('.menu-top .burger, .menu-list').removeClass('active');
  $('.menu-top .burger').on('click', function() {
    $('.menu-top .burger, .menu-list').toggleClass('open');
  })
}

$('.header .burger').on('click', function () {
$('.header .burger, .header-nav_mobile ul').toggleClass('active');
})


//Сабменю
$('.have-submenu > a').on('click', function () {
 $(this).siblings('.submenu').toggle().parent().toggleClass('open').parent().siblings().removeClass('open')
  return false
  if ($(window).width() < 768) {
    $(this).siblings('.submenu').slideToggle().parent().toggleClass('open').parent().siblings().removeClass('open')
    return false
  }
})

// Табы
  $('.tab-menu li').on('click', function () {
    if ($(this).closest('.slick-slider').length) {
      $(this).addClass('active').closest('.slick-slide').siblings().find('li').removeClass('active');
      $(this).closest('.tab').children('.tab-content').children('.tab-item').hide().removeClass('open').eq($(this).closest('.slick-slide').data('slick-index')).show().addClass('open')
    }
        else {
      $(this).addClass('active').siblings().removeClass('active');
      $(this).closest('.tab').children('.tab-content').children('.tab-item').hide().removeClass('open').eq($(this).index()).show().addClass('open')
    }

  })

//Селекты
$(document).ready(function() {
  $('.select').select2();
  $('.pagination-left select').select2();
  $('.sorting-block_left select').select2();

});

//Вывод
$('.btn-list').on('click', function () {
$(this).toggleClass('active').siblings().removeClass('active');
  $('.in-catalog').toggleClass('catalog-list');
return false
});

$('.btn-tile').on('click', function () {
$(this).toggleClass('active').siblings().removeClass('active');
  $('.in-catalog').removeClass('catalog-list');
  return false
})


//Аккордион
$('.product-filter_title').on('click', function () {
  $(this).toggleClass('active');
  $(this).parent().toggleClass('open')
  //$('.product-filter_content').toggleClass('open');
})

function mobileCarousel () {

  if ($(window).width() < 768) {
    $('.product-card .tab-menu ul').not('.slick-slider').slick({
      arrows: false,
      focusOnSelect: true,
      variableWidth: false,
      centerMode: true,
      infinite: false,
      slidesToShow: 1,
      centerPadding: '60px'
    })
  }

  if ($(window).width() >= 768) {
    $('.product-card .tab-menu .slick-slider').slick('unslick');
  }
}

$(document).ready(function () {
  mobileCarousel();
})

//Фильтр товаров
$('.product-filter_top').on('click', function () {
    $(this).toggleClass('active');
    $('.mobile-hidden').slideToggle().toggleClass('open');
})

//Ползунок
$('.range-line').each(function () {
let slider = $(this)[0],
  sliderFrom = $(this)
    .parent()
    .find('.range-from')[0],
  sliderTo = $(this)
    .parent()
    .find('.range-to')[0],
  inputs = [sliderFrom, sliderTo],
  type = $(this).data('price');

  noUiSlider.create(slider, {
    start: [0, 5000],
    connect: true,
    step: 10,
    range: {
      'min': 0,
      'max': 5000
    },
  });
  slider.noUiSlider.on('update', function (values, handle) {
    $('#range-from').val(values[0]);
    $('#range-to').val(values[1]);
  });
})



//Маска
$(function(){
  $('#phone').mask('+38(099) 999-99-99');
  $('.phone').mask('+38(099) 999-99-99');
});

