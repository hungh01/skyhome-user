'use client';

import NavigationButton from "@/components/button/navigation-button";
import { useViewportContext } from "@/providers/viewport-provider";
import Image from "next/image";

export default function CultureSection() {
    const { isMobile, width } = useViewportContext();

    // Responsive heading size
    let headingSize = "text-2xl";
    if (width > 1058) headingSize = "text-8xl";
    else if (width < 1058 && width > 810) headingSize = "text-5xl";
    else if (width <= 810 && width > 600) headingSize = "text-4xl";
    else if (width <= 600) headingSize = "text-3xl";

    return (
        <section className={`w-full ${isMobile ? 'h-auto' : 'h-screen'} relative overflow-hidden pt-3`}>
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full px-2 sm:px-4 pt-6 lg:py-0">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left mb-6 lg:mb-0 order-2 lg:order-1 pt-10 sm:pt-14">
                        <h1 className={`${headingSize} font-bold text-sky-900 leading-tight mb-6`}>
                            Văn hoá &<br />Con người
                        </h1>
                        <p className="text-base sm:text-base md:text-lg lg:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            Tại SkyHome, con người luôn là trung tâm.<br />
                            Chúng tôi không chỉ cung cấp dịch vụ,<br />
                            mà cùng nhau tạo ra giá trị sống.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <NavigationButton text="Giá trị mang lại" href="/about/value" textsize="text-base md:text-lg lg:text-xl" />
                        </div>
                    </div>
                    {/* Right Content - Phone Mockup */}
                    <div className="flex-1 flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0 w-full lg:w-auto">
                        <div className="w-80 h-80 sm:w-90 sm:h-90 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] relative">
                            <Image
                                src="/about/culture-personality.webp"
                                alt="Culture Personality Image"
                                fill
                                className="object-contain z-30"
                                sizes="(max-width: 1024px) 100vw, 600px"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}