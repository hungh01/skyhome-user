// animations/scrollAnimations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeInSection = (target: HTMLElement) => {
    gsap.fromTo(
        target,
        { opacity: 0, y: 80 },
        {
            opacity: 1,
            y: 0,
            duration: 5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: target,
                start: "top 80%", // khi section vào 80% viewport
                toggleActions: "play none none reverse",
            },
        }
    );
};
