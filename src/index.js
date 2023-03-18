import './sass/main.scss';
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector(".header");
const overley = document.querySelector(".overley");
menuBtn.addEventListener("click", function () {
    header.classList.toggle("menu-opened")
    overley.classList.toggle("active");
})

overley.addEventListener("click", function () {
    header.classList.remove("menu-opened");
    this.classList.remove("active");
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent) || window.innerWidth < 1201) {

    const slidersConfig = {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 10,
    }

    new Swiper('.swiper-contacts', {
        ...slidersConfig,
        navigation: {
            nextEl: '.swiper-contacts .swiper-button-next',
            prevEl: '.swiper-contacts .swiper-button-prev',
        }
    });
    new Swiper('.swiper-build', {
        ...slidersConfig,
        navigation: {
            nextEl: '.build-slider .swiper-button-next',
            prevEl: '.build-slider .swiper-button-prev',
        }
    });
    new Swiper('.swiper-technologies', {
        ...slidersConfig,
        navigation: {
            nextEl: '.technologies-slider .swiper-button-next',
            prevEl: '.technologies-slider .swiper-button-prev',
        }
    });
    new Swiper('.swiper-steps', {
        ...slidersConfig,
        navigation: {
            nextEl: '.swiper-steps .swiper-button-next',
            prevEl: '.swiper-steps .swiper-button-prev',
        }
    });
}