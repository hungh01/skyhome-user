'use client';

import { SkyHomeFont1 } from "@/config/font/fonts";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useViewportContext } from "@/providers/viewport-provider";

export function BriefAbout() {
    const { isMobile } = useViewportContext();
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!trackRef.current) return;

        const track = trackRef.current;

        // Lặp vô hạn với GSAP timeline
        gsap.to(track, {
            xPercent: -50,   // kéo hết 1 nửa (vì ta nhân đôi ảnh)
            duration: 20,    // tốc độ cuộn
            repeat: -1,      // lặp vô hạn
            ease: "linear",  // tốc độ đều
        });
    }, []);

    return (
        <section id="section3" className={` flex flex-col w-full ${isMobile ? 'h-auto' : 'h-screen'} `}>
            {/* Nửa trên: Nội dung */}
            <div className="h-1/2 flex flex-col justify-center items-center text-center px-4 mt-20">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-sky-900 pb-2">
                    SkyHome <span className={`${SkyHomeFont1.className} lg:text-[55px] text-4xl`}>Nghệ thuật</span>
                    <br />
                    của sự sạch sẽ và an tâm
                </h2>
                <p className="text-lg lg:text-xl text-sky-900 max-w-4xl">
                    Vệ sinh không chỉ là dịch vụ, mà là nghệ thuật mang lại sự an tâm tuyệt đối cho khách hàng.
                </p>
                <p className="text-lg lg:text-xl text-sky-900 max-w-5xl">
                    Chúng tôi chuyên nghiệp hóa mọi quy trình, bảo đảm sự chỉn chu từ những chi tiết nhỏ nhất đến tổng thể.
                </p>
                <p className="text-lg lg:text-xl text-sky-900 max-w-3xl">
                    Không chỉ tối ưu hóa toàn diện mà còn kiến tạo không gian sống và làm việc sạch sẽ, trong lành và an toàn, mang đến sự an tâm và thoải mái trọn vẹn.
                </p>
            </div>

            {/* Nửa dưới: ảnh chạy ngang */}
            <div className="h-1/2 w-screen overflow-hidden relative algin-center items-center">
                <div ref={trackRef} className="flex w-[200%] absolute left-0 bottom-0 ">
                    {/* Nhân đôi ảnh để tạo vòng lặp */}
                    <Image src="/home-page/scroll-employee.webp" alt="slide1" width={2920} height={600} />
                    <Image src="/home-page/scroll-employee.webp" alt="slide2" width={2920} height={600} />
                </div>
            </div>
        </section>
    );
}
