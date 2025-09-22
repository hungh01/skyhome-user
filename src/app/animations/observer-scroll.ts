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
            onComplete: () => {
                // Thêm delay nhỏ để block thao tác tiếp theo
                setTimeout(() => {
                    animating = false;
                }, 400); // 400ms sau khi animation xong mới cho phép cuộn tiếp
            },
        });
    };
    Observer.create({
        target: window,
        type: "wheel,touch",
        wheelSpeed: 1,
        onUp: (self) => {
            // Đảo chiều cho touch (mobile)
            const isTouch = self.event && self.event.type && self.event.type.startsWith("touch");
            if (isTouch) {
                gotoSection(index + 1); // Vuốt lên thì xuống section tiếp theo
            } else {
                gotoSection(index - 1); // Wheel bình thường
            }
        },
        onDown: (self) => {
            const isTouch = self.event && self.event.type && self.event.type.startsWith("touch");
            if (isTouch) {
                gotoSection(index - 1); // Vuốt xuống thì lên section trước
            } else {
                gotoSection(index + 1); // Wheel bình thường
            }
        },
        tolerance: 10,
        preventDefault: true,
    });

    return () => {
        Observer.getAll().forEach((obs) => obs.kill());
    };
};
