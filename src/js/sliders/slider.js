import Swiper, { Pagination } from 'swiper';
const slider = (stagesBlock, contactBlock) => {
  let stagesSliderStatus = null;
  let contactSliderStatus = null;


  function initSliders() {
    if (window.innerWidth < 767) {
      if (!stagesSliderStatus) {
        stagesSliderStatus = new Swiper(stagesBlock, {
          modules: [Pagination],
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          // autoHeight: true,
        });
      }
      if (!contactSliderStatus) {
        contactSliderStatus = new Swiper(contactBlock, {
          modules: [Pagination],
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoHeight: true,
        });
      }

    } else {
      if (stagesSliderStatus) {
        stagesSliderStatus.destroy();
        stagesSliderStatus = null;
      }
      if (contactSliderStatus) {
        contactSliderStatus.destroy();
        contactSliderStatus = null;
      }
    }
  }

  window.addEventListener('load', initSliders);

  window.addEventListener('resize', initSliders);
}
export default slider;