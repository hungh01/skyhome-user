import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

export const moveImageOnScroll = (
    imageSelector: string,
    fromSelector: string,
    toSelector: string,
    triggerSelector: string
) => {
    const image = document.querySelector(imageSelector) as HTMLElement;
    const from = document.querySelector(fromSelector) as HTMLElement;
    const to = document.querySelector(toSelector) as HTMLElement;
    if (!image || !from || !to) return;

    ScrollTrigger.create({
        trigger: triggerSelector,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            const state = Flip.getState(image);
            to.appendChild(image);
            Flip.from(state, {
                duration: 1.5,
                ease: "power2.inOut",
                absolute: true,
                scale: true,
            });
        },
        onLeaveBack: () => {
            const state = Flip.getState(image);
            from.appendChild(image);
            Flip.from(state, {
                duration: 1.5,
                ease: "power2.inOut",
                absolute: true,
                scale: true,
            });
        },
    });
};
