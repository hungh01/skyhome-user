'use client';

import NavigationButton from "@/components/button/navigation-button";
import { useViewportContext } from "@/providers/viewport-provider";
import Image from "next/image";

export default function CultureSection() {

    const { isMobile, width } = useViewportContext();

    return (
        <section className={`w-full ${isMobile ? 'h-auto' : 'h-screen'} relative overflow-hidden pt-3`}>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 pt-6 lg:py-0">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left mb-4 lg:mb-0 order-1 pt-14 lg:order-1">
                        <h1 className={`text-2xl ${width < 1058 && width > 810 ? 'text-5xl' : ''} ${width < 850 ? 'text-3xl' : ''} ${width > 1058 ? 'text-8xl' : ''} font-bold text-sky-900 leading-tight mb-6`}>
                            Văn hoá &
                            <br />
                            Con người
                        </h1>
                        <p className="text-xs sm:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            Tại SkyHome, con người luôn là trung tâm.<br />Chúng tôi không chỉ cung cấp dịch vụ,<br />mà cùng nhau tạo ra giá trị sống.
                        </p>
                        <NavigationButton text={`Giá trị mang lại`} href="/about/value" textsize="text-xl" />
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className=" h-screen flex-1 flex justify-center items-center lg:justify-center order-2 lg:order-2 mb-0 lg:mb-0 lg:pt-0">
                        <div className="">
                            <Image
                                src="/about/culture-personality.png"
                                alt="Culture Personality Image"
                                width={600}
                                height={600}
                                className="w-full h-full z-30"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}