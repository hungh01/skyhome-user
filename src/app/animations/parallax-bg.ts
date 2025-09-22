import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initParallaxBg = (target: string, trigger: string) => {
  return gsap.to(target, {
    yPercent: -50, // move lên 50%
    ease: "none",
    scrollTrigger: {
      trigger: trigger, // element chứa nội dung
      start: "top top",
      end: "bottom bottom",
      scrub: true, // sync theo scroll
    },
  });
};
