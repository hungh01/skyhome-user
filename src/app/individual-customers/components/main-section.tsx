'use client';

import NavigationButton from "@/components/button/navigation-button";
import RightImage from "@/components/split-2-side/right-image";
import { useViewportContext } from "@/providers/viewport-provider";
import Image from "next/image";

export default function MainSection() {
    const { isMobile } = useViewportContext();

    return (
        <>
            <RightImage
                content={
                    <>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-sky-900 leading-tight mb-6">
                            Khách hàng
                            <br />
                            Cá nhân
                        </h1>
                        <p className="text-base sm:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            Tại SkyHome, con người luôn là trung tâm.<br />Chúng tôi không chỉ cung cấp dịch vụ,<br />mà cùng nhau tạo ra giá trị sống.
                        </p>
                        <NavigationButton text="Giá trị mang lại" href="/about/value" textsize="text-xl" />
                    </>
                }
                image={
                    <div className="w-full h-full flex justify-center items-center">
                        <Image
                            src="/individual-service/main-rightside-image.webp"
                            alt="Culture Personality Image"
                            width={2080}
                            height={1560}
                            className="w-full h-full object-contain z-30"
                        />
                    </div>
                }
            />
        </>
    );
}
