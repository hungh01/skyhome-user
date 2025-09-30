"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SkyHomeFont1 } from "@/config/font/fonts";

const images = [
    "/about/stories/story1.webp",
    "/about/stories/story2.webp",
];

export default function StorySkyhome() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCurrent((prev) => (prev + 1) % images.length),
            3000
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="section2"
            className="w-full min-h-screen flex flex-col items-center justify-center text-center px-2 sm:px-4 py-8"
        >
            <div className="container max-w-7xl w-full mx-auto flex flex-col items-center justify-center pt-8">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 flex flex-col px-0 sm:px-4 mb-8 lg:mb-0">
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none mx-auto flex justify-center items-start overflow-hidden relative aspect-[3/4]">
                            <div
                                className="flex transition-transform duration-700 ease-in-out h-full"
                                style={{ transform: `translateX(-${current * 100}%)` }}
                            >
                                {images.map((src, idx) => (
                                    <div key={idx} className="w-full flex-shrink-0 relative h-full">
                                        <Image
                                            src={src}
                                            alt={`Slide ${idx + 1}`}
                                            width={600}
                                            height={1020}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-10">
                                {images.map((_, dotIdx) => (
                                    <button
                                        key={dotIdx}
                                        className={`w-3 h-3 rounded-full transition-colors duration-200 border border-sky-900 ${dotIdx === current ? "bg-sky-900" : "bg-gray-200"
                                            }`}
                                        onClick={() => setCurrent(dotIdx)}
                                        aria-label={`Go to slide ${dotIdx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 flex justify-start items-center px-0 sm:px-4">
                        <div className="w-full max-w-lg text-left">
                            <h2 className={`text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-sky-900 ${SkyHomeFont1.className}`}>
                                Câu chuyện
                                <br />
                            </h2>
                            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-sky-900">
                                Skyhome
                                <br />
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-sky-900">
                                &quot;SkyHome ra đời từ mong muốn đồng hành cùng mỗi gia đình và doanh nghiệp trong việc chăm sóc không gian sống và không gian làm việc.
                                Chúng tôi tin rằng sự sạch sẽ không chỉ là vẻ bề ngoài, mà còn là nền tảng quan trọng cho sức khỏe, tinh thần và hiệu quả công việc. Một ngôi nhà sạch sẽ, gọn gàng hay văn phòng trong lành sẽ mang lại cảm giác thoải mái, tạo nguồn năng lượng tích cực và giúp nâng cao chất lượng cuộc sống.
                                Xuất phát từ niềm tin đó, SkyHome không ngừng nỗ lực phát triển dịch vụ vệ sinh đa dạng, bao gồm vệ sinh theo giờ, tổng vệ sinh toàn diện, vệ sinh máy lạnh, vệ sinh máy giặt và vệ sinh máy nước nóng lạnh. Mỗi dịch vụ đều được thực hiện theo quy trình chuyên nghiệp, chú trọng đến sự an toàn và trải nghiệm của khách hàng.
                                SkyHome hướng đến việc mang lại giá trị thiết thực: giúp bạn tiết kiệm thời gian, tận hưởng môi trường sống sạch sẽ, an toàn và trong lành, để mỗi ngày đều nhẹ nhàng và trọn vẹn hơn.
                                &quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}