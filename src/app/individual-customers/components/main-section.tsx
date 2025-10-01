

import NavigationButton from "@/components/button/navigation-button";
import RightImage from "@/components/split-2-side/right-image";
import Image from "next/image";

export default function MainSection() {

    return (
        <>
            <RightImage
                content={
                    <>
                        <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold text-sky-900 leading-tight mb-6">
                            Khách hàng
                            <br />
                            Cá nhân
                        </h1>
                        <p className="text-base sm:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            Giải pháp vệ sinh cho nhà ở, căn hộ, giúp không gian luôn sạch sẽ và thoải mái.
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
