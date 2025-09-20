import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger snap to full page sections
export const enableFullpageSnap = () => {
    ScrollTrigger.create({
        snap: 1 / (document.querySelectorAll("section").length - 1),
    });
};
