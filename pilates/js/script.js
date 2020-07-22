const priceSlider = document.querySelector('.swiper-container');
const comentSlider = document.querySelector('.slider');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const header = document.querySelector('.header');


/* window.onscroll = function showHeader() {
  if(window.pageYOffset > 200){
      header.classList.add('header_fixed');
  } else{
      header.classList.remove('header_fixed');
  }
}; */



headerBurger.addEventListener('click',e => {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock')

});


let mySlider = new Swiper(priceSlider, {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // when window width is >= 480px
    550: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    // when window width is >= 640px
    850: {
      slidesPerView: 3,
      spaceBetween: 30,

    }
  }
});

let Slider = new Swiper(comentSlider, {
  wrapperClass: 'slider-wrap',
  slideClass:'slider-slide',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new fullpage('#fullpage', {
	//options here
  navigation:true,
  scrollOverflow: true,
  css3: true
});




// $('mobile-menu').on('click', function (e) {
// e.prevenrDefault()
// });


//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

// function testWebP(callback) {

//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//     callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//     }

//     testWebP(function (support) {

//     if (support == true) {
//     document.querySelector('body').classList.add('webp');
//     }else{
//     document.querySelector('body').classList.add('no-webp');
//     }
//     });