import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ValuesProvided() {
    const boxRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    useEffect(() => {
        const boxes = boxRefs.map(ref => ref.current);
        const endStates = [
            { left: "-25%", top: "5%", transform: "none" },
            { left: "-35%", top: "55%", transform: "none" },
            { left: "135%", top: "45%", transform: "translate(-100%, -50%)" },
            { left: "120%", top: "95%", transform: "translate(-100%, -50%)" },
        ];

        // Animate tất cả cùng lúc, tốc độ chậm lại
        const animateAll = () => {
            boxes.forEach((box, i) => {
                gsap.fromTo(
                    box,
                    {
                        opacity: 0,
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: -10,
                    },
                    {
                        opacity: 1,
                        ...endStates[i],
                        duration: 2, // tăng duration để chậm lại
                        ease: "power3.out",
                    }
                );
            });
        };

        // Reverse tất cả cùng lúc
        const reverseAll = () => {
            boxes.forEach((box) => {
                gsap.to(box, {
                    opacity: 0,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    duration: 1,
                    ease: "power3.in",
                });
            });
        };

        // Đợi image vào vị trí rồi mới animate box
        const observer = new MutationObserver(() => {
            const img = document.querySelector("#imageTarget #myImage");
            if (img) {
                setTimeout(animateAll, 1200); // đợi 1.2s cho Flip xong rồi mới chạy box
            } else {
                reverseAll();
            }
        });
        const imageTarget = document.getElementById("imageTarget");
        if (imageTarget) {
            observer.observe(imageTarget, { childList: true });
        }

        return () => observer.disconnect();
    }, [boxRefs]);

    return (
        <section id="section2" className="w-full h-screen flex flex-col items-center justify-center relative">
            <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center content">
                <div id="imageTarget" className="relative w-[550px] h-[550px] flex items-center justify-center z-50">
                    {/* Các box text */}
                    <div
                        ref={boxRefs[0]}
                        className="absolute bg-white rounded-xl shadow-lg px-4 py-2 text-sky-900 font-bold border border-yellow-300 whitespace-nowrap text-2xl"
                        style={{
                            filter: "drop-shadow(0 0 8px #ffe066)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: 0,
                        }}
                    >
                        Thao tác nhanh chóng
                    </div>
                    <div
                        ref={boxRefs[1]}
                        className="absolute bg-white rounded-xl shadow-lg px-4 py-2 text-sky-900 font-bold border border-yellow-300 whitespace-nowrap text-2xl"
                        style={{
                            filter: "drop-shadow(0 0 8px #ffe066)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: 0,
                        }}
                    >
                        Chi phí minh bạch
                    </div>
                    <div
                        ref={boxRefs[2]}
                        className="absolute bg-white rounded-xl shadow-lg px-4 py-2 text-sky-900 font-bold border border-yellow-300 whitespace-nowrap text-2xl"
                        style={{
                            filter: "drop-shadow(0 0 8px #ffe066)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: 0,
                        }}
                    >
                        Đúng và đủ nhu cầu
                    </div>
                    <div
                        ref={boxRefs[3]}
                        className="absolute bg-white rounded-xl shadow-lg px-4 py-2 text-sky-900 font-bold border border-yellow-300 whitespace-nowrap text-2xl"
                        style={{
                            filter: "drop-shadow(0 0 8px #ffe066)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: 0,
                        }}
                    >
                        Dành cho mọi người
                    </div>
                </div>
            </div>
        </section>
    );
}