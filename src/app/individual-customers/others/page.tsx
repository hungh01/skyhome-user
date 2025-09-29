'use client';
import { initParallaxBg } from "@/app/animations/parallax-bg";
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
                <section className="w-full h-screen flex flex-col justify-center items-center text-center">
                    <Image
                        src="/home-page/employee-banner.webp"
                        alt="employee banner"
                        width={2080}
                        height={1040}
                        className="w-[76%] h-auto "
                    />
                </section>
                <WorkFlow title="Các dịch vụ khác của SkyHome" items={workFlow} />
            </div>
        </>
    );
}
