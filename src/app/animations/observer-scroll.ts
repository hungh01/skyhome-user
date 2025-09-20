import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(Observer, ScrollToPlugin);

export const initSectionObserver = (sectionsSelector: string) => {
    const sections = gsap.utils.toArray<HTMLElement>(sectionsSelector);
    let index = 0;
    let animating = false;

    const gotoSection = (i: number) => {
        if (animating || i < 0 || i >= sections.length) return;
        animating = true;
        index = i;

        gsap.to(window, {
            scrollTo: { y: sections[index], autoKill: false },
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => { animating = false; },
        });
    };

    Observer.create({
        target: window,
        type: "wheel,touch",
        wheelSpeed: 1, // Adjust scroll sensitivity
        onUp: () => gotoSection(index - 1),
        onDown: () => gotoSection(index + 1),
        tolerance: 10,
        preventDefault: true,
    });

    return () => {
        Observer.getAll().forEach((obs) => obs.kill());
    };
};
