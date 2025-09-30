'use client';
import ImpressiveService from "./components/impessive-service";
import { useEffect } from "react";
import { initParallaxBg } from "../animations/parallax-bg";
import Image from "next/image";
import RightImage from "@/components/split-2-side/right-image";
import NavigationButton from "@/components/button/navigation-button";
import ContactForm from "./components/contact";


export default function BusinessCustomers() {

    useEffect(() => {
        const anim = initParallaxBg("#bgImage", ".content");
        return () => {
            anim.kill(); // cleanup khi unmount
        };
    }, []);
    return (
        <>
            <div className="fixed inset-0 -z-10">
                <Image
                    id="bgImage"
                    src="/home-page/sky.webp"
                    alt="Background"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <div className="content min-h-screen z-10">
                <RightImage
                    content={
                        <>
                            <h1 className="text-3xl sm:text-5xl lg:text-9xl font-bold text-sky-900 leading-tight mb-6">
                                {"Dịch vụ"}
                                <br />
                                <p className="text-2xl sm:text-4xl  lg:text-9xl">
                                    {"Tiện ích"}
                                </p>
                            </h1>
                            <p className="text-base sm:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                                {"Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn."}
                            </p>
                            <NavigationButton text={"Giá trị mang lại"} href={"/individual-customers/hourly-cleaning/service-form"} textsize="text-xl" />
                        </>
                    }
                    image={
                        <div className="w-full h-full flex justify-center items-center">
                            <Image
                                src={"/business-service/2employee.webp"}
                                alt="Culture Personality Image"
                                width={2080}
                                height={1560}
                                className="w-full h-full object-contain z-30"
                            />
                        </div>
                    }
                />
                <ImpressiveService />
                <ContactForm />
            </div>
        </>
    )
}




