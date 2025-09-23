import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToTop = () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0 },
        ease: "power2.inOut",
    });
};