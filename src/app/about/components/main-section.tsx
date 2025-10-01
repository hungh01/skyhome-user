'use client';

import NavigationButton from "@/components/button/navigation-button";
import { useViewportContext } from "@/providers/viewport-provider";
import Image from "next/image";

export default function MainSection() {
    const { isMobile, width } = useViewportContext();

    return (
        <section className={`w-full ${isMobile ? 'h-auto' : 'h-screen'} relative overflow-hidden pt-3 ${isMobile ? 'bg-[url("/banner-home.png")] bg-cover bg-center' : ''}`}>
            {/* Background */}
            {!isMobile
                && (<video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover z-11"
                >
                    <source src="/about/clip_cty.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>)
            }

            {/* Content */}
            <div className="relative z-20 w-[76%] mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 pt-6 lg:py-0">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left mb-4 lg:mb-0 order-1 pt-14 lg:order-1">
                        <h1 className={`text-2xl ${width < 1058 && width > 810 ? 'text-5xl' : ''} ${width < 850 ? 'text-3xl' : ''} ${width > 1058 ? 'text-8xl' : ''} font-bold text-sky-900 leading-tight mb-6`}>
                            Ứng dụng
                            <br />
                            Tiện ích cho
                            <br />
                            <span>Người Việt</span>
                        </h1>
                        <p className="text-base sm:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            Luôn lắng nghe phản hồi, giải quyết vấn đề nhanh chóng <br /> và chuyên nghiệp để đảm bảo sự hài lòng tối đa
                        </p>

                        <NavigationButton text="Liên hệ với chúng tôi" href="/support" textsize={`${width < 850 ? 'text-sm' : 'text-base'}`} />
                    </div>
                </div>
            </div>
        </section>
    );
}