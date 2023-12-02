/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers';
// import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import formBlock from './sliders/form';
import heroEffects from './sliders/heroEffects';
import slider from './sliders/slider';
// import Tabs from './modules/Tabs';
// import Accordion from './modules/Accordion';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });
const stagesBlock = document.querySelector('.stages__block');
const contactBlock = document.querySelector('.contact__block');
if (stagesBlock || contactBlock) {
  slider(stagesBlock, contactBlock);
}

formBlock();
const headerLinks = document.querySelectorAll('.header .menu__link, .header__btn');
headerLinks.forEach(item => {
  item.addEventListener('click', () => {
    document.documentElement.classList.remove('menu-open');
    document.documentElement.classList.remove('lock');
  })
})
heroEffects();

// Получаем все элементы с классом contact__form-input
const inputBoxs = document.querySelectorAll('.contact__form-box');

// Добавляем обработчик события для каждого input
inputBoxs.forEach(function (inputBox) {
  const input = inputBox.querySelector('.contact__form-input');
  const label = inputBox.querySelector('.contact__form-label');
  input.addEventListener('input', function () {
    label.style.display = this.value ? 'none' : 'flex';
  });
});


// const anchorLinks = document.querySelectorAll('.footer__navigation-link, .footer__navigation-btn, .menu__link,.header__btn');
// anchorLinks.forEach(anchorLink => {
//   anchorLink.addEventListener('click', (event) => {
//     event.preventDefault();

//     const targetId = anchorLink.getAttribute('href').substring(1);
//     const targetElement = document.getElementById(targetId);

//     if (targetElement) {
//       const offset = -65;

//       const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

//       window.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth'
//       });
//     }
//   })
// })