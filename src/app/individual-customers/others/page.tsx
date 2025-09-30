'use client';
import { initParallaxBg } from "@/app/animations/parallax-bg";
import MainSection from "@/components/service-form/main-section";
import WorkFlow from "@/components/service-form/work-flow";
import { WorkingStep } from "@/interfaces/services/working-step.interface";
import Image from "next/image";
import { useEffect } from "react";



const workFlow: WorkingStep[] = [
    {
        title: "Vệ sinh Sofa",
        description: "Chọn gói dịch vụ và thời gian phù hợp với bạn.",
        image: "/individual-service/icon-services/sofa.webp"
    },
    {
        title: "Vệ sinh nón bảo hiểm",
        description: "Nhân viên của chúng tôi sẽ liên hệ để xác nhận chi tiết.",
        image: "/individual-service/icon-services/nonbaohiem.webp"
    },
    {
        title: "Vệ sinh máy nóng lạnh",
        description: "Đội ngũ chuyên nghiệp sẽ đến và hoàn thành công việc.",
        image: "/individual-service/icon-services/vsmaynonglanh.webp"
    },
    {
        title: "Giặt ủi quần áo",
        description: "Kiểm tra kết quả và chia sẻ phản hồi của bạn.",
        image: "/individual-service/icon-services/giatui.webp"
    },
    // {
    //     title: "Chăm sóc người cao tuổi",
    //     description: "Kiểm tra kết quả và chia sẻ phản hồi của bạn.",
    //     image: "/individual-service/icon-services/chamsoc.webp"
    // }
];

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
                    imageSrc="/individual-service/dichvukhac.png"
                />
                <WorkFlow items={workFlow} />
            </div>
        </>
    );
}
