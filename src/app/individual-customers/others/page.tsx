'use client';
import { initParallaxBg } from "@/app/animations/parallax-bg";
import MainSection from "@/components/service-form/main-section";

import Image from "next/image";
import { useEffect } from "react";
import OtherServices from "./components/other-services";



export default function Others() {
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
            <div className="content min-h-screen">
                <MainSection
                    title1="Dịch vụ"
                    title2="Khác"
                    description="Dịch vụ tổng vệ sinh của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn."
                    buttonText="Đặt dịch vụ ngay"
                    buttonLink="/individual-customers/booking"
                    imageSrc="/individual-service/icon-services/dichvukhac.webp"
                />
                <OtherServices />
            </div>
        </>
    );
}
