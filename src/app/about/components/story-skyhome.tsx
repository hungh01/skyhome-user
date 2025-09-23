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
            3000 // 3s đổi slide
        );
        return () => clearInterval(interval);
    }, []);
    return (
        <section id="section2" className="w-full h-screen flex flex-col align-center justify-center items-center text-center px-4">
            <div className="container w-[76%] mx-auto h-full flex flex-col items-center justify-center content pt-16">
                <div className="w-full h-screen flex flex-row items-center justify-center">
                    {/* Side trái */}
                    <div className="flex-1 flex flex-col justify-center items-start px-8">
                        <div className="w-full mx-auto overflow-hidden rounded-xl relative">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${current * 100}%)` }}
                            >
                                {images.map((src, idx) => (
                                    <div key={idx} className="w-full flex-shrink-0 relative">
                                        <Image
                                            src={src}
                                            alt={`Slide ${idx + 1}`}
                                            width={500}
                                            height={600}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Dots fixed below images */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-10">
                                {images.map((_, dotIdx) => (
                                    <button
                                        key={dotIdx}
                                        className={`w-3 h-3 rounded-full ${dotIdx === current ? "bg-sky-900" : "bg-gray-200"}`}
                                        onClick={() => setCurrent(dotIdx)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Side phải */}
                    <div className="flex-1 flex justify-center items-center px-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-sky-900">
                                Câu chuyện SkyHome
                            </h2>
                            <p className="text-lg lg:text-xl text-sky-900 max-w-3xl">
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