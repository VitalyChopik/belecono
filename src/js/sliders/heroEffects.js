import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
const heroEffects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const icon1 = document.querySelector('.hero__icon-1');
  const icon2 = document.querySelector('.hero__icon-2');
  const icon3 = document.querySelector('.hero__icon-3');

  const createScrollTriggerAnimation = (element, yPercent, xPercent, rotate) => {
    const timeline = gsap.timeline();
    ScrollTrigger.create({
      animation: timeline,
      trigger: '.hero',
      start: "top top",
      end: "bottom top",
      scrub: true,
    });
    timeline.fromTo(element, { yPercent: 0, xPercent: 0, rotate: 0 }, { yPercent, xPercent, rotate });
  };

  createScrollTriggerAnimation(icon1, 500, -200, 145);
  createScrollTriggerAnimation(icon2, -200, 200, 35);
  createScrollTriggerAnimation(icon3, 350, -400, 69);
}
export default heroEffects;