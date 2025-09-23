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
                    <source src="/about/banner-home.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>)
            }

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 pt-6 lg:py-0">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left mb-4 lg:mb-0 order-1 pt-14 lg:order-1">
                        <h1 className={`text-2xl ${width < 1058 && width > 810 ? 'text-5xl' : ''} ${width < 850 ? 'text-3xl' : ''} ${width > 1058 ? 'text-6xl' : ''} font-bold text-sky-900 leading-tight mb-6`}>
                            Ứng dụng
                            <br />
                            Tiện ích
                            <br />
                            <span>Cho người Việt</span>
                        </h1>
                        <p className="text-xs sm:text-lg text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            Luôn lắng nghe phản hồi, giải quyết vấn đề nhanh chóng <br /> và chuyên nghiệp để đảm bảo sự hài lòng tối đa
                        </p>

                        <NavigationButton text="Liên hệ với chúng tôi" href="/support" />
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className=" h-screen flex-1 flex justify-center items-center lg:justify-center order-2 lg:order-2 mb-0 lg:mb-0 lg:pt-0">
                        <div className="relative self-end">
                            {isMobile &&
                                <Image
                                    src="/about/hand-mobile.png"
                                    alt="Phone Mockup"
                                    width={200}
                                    height={200}
                                    className="w-full h-auto"
                                />}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}