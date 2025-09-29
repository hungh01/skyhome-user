'use client';
import MainSection from "@/components/service-form/main-section";
import ImpressiveService from "./components/impessive-service";
import { useEffect } from "react";
import { initParallaxBg } from "../animations/parallax-bg";
import Image from "next/image";


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
                <MainSection
                    title1="Dịch vụ"
                    title2="Tiện ích"
                    description="Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn."
                    buttonText="Giá trị mang lại"
                    buttonLink="/individual-customers/hourly-cleaning/service-form"
                    imageSrc="/footer/employee.webp"
                />
                <ImpressiveService />
            </div>
        </>
    )
}