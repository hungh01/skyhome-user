"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/about/collaborators/CT1.webp",
    "/home-page/employee.webp",
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
            className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-8"
        >
            <div className="container w-full max-w-6xl mx-auto flex flex-col items-center justify-center pt-8">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-0 sm:px-4 mb-8 lg:mb-0">
                        <div className="w-full max-w-md mx-auto overflow-hidden rounded-xl relative aspect-[5/6]">
                            <div
                                className="flex transition-transform duration-700 ease-in-out h-full"
                                style={{ transform: `translateX(-${current * 100}%)` }}
                            >
                                {images.map((src, idx) => (
                                    <div key={idx} className="w-full flex-shrink-0 relative h-full">
                                        <Image
                                            src={src}
                                            alt={`Slide ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 500px"
                                            priority={idx === 0}
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
                    <div className="w-full lg:w-1/2 flex justify-center items-center px-0 sm:px-4">
                        <div className="max-w-lg text-left lg:text-left">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-sky-900">
                                Câu chuyện SkyHome
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-sky-900">
                                &quot;SkyHome ra đời từ mong muốn đồng hành cùng mỗi gia đình và doanh nghiệp trong hành trình chăm sóc không gian sống và làm việc.
                                Chúng tôi tin rằng sự sạch sẽ không chỉ là bề ngoài mà còn là nền tảng cho sức khỏe, tinh thần và hiệu quả.
                                Chính vì vậy, SkyHome không ngừng nỗ lực để mang đến dịch vụ vệ sinh đa dạng, chuyên nghiệp và thân thiện –
                                để mỗi ngày của bạn trở nên nhẹ nhàng, trọn vẹn hơn.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}