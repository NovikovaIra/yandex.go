import './node_modules/reset-css/sass/_reset.scss';
import './main.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop:true,
  navigation: {
      nextEl: ".swiper-button-next-cst",
      prevEl: ".swiper-button-prev-cst",
  },
});
