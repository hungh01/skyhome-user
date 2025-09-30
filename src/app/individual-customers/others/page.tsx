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
        description: "Dịch vụ làm sạch sofa chuyên nghiệp giúp loại bỏ bụi bẩn, vết ố, lông thú cưng và mùi hôi tích tụ lâu ngày. Quy trình sử dụng máy móc chuyên dụng và dung dịch an toàn, giữ cho bề mặt sofa mềm mại, bền màu, mang lại cảm giác êm ái và thoải mái như mới.",
        image: "/individual-service/icon-services/sofa.webp"
    },
    {
        title: "Vệ sinh nón bảo hiểm",
        description: " Nón bảo hiểm thường xuyên tiếp xúc với tóc và da đầu, dễ bám mồ hôi, vi khuẩn và mùi khó chịu. Dịch vụ vệ sinh nón bảo hiểm của SkyHome giúp làm sạch sâu bên trong lớp lót, khử khuẩn, khử mùi hiệu quả, giữ cho nón luôn sạch sẽ, thoáng mát và an toàn khi sử dụng.",
        image: "/individual-service/icon-services/nonbaohiem.webp"
    },
    {
        title: "Vệ sinh máy năng lượng mặt trời",
        description: " Bụi bẩn và rêu mốc bám trên bề mặt tấm pin có thể làm giảm hiệu suất hấp thụ ánh sáng đến 20–30%. Dịch vụ vệ sinh máy năng lượng mặt trời định kỳ giúp loại bỏ lớp bụi, duy trì hiệu suất tối ưu, kéo dài tuổi thọ thiết bị và đảm bảo nguồn năng lượng sạch luôn hoạt động ổn định.",
        image: "/individual-service/icon-services/vsmaynangluong.webp"
    },
    {
        title: "Giặt ủi quần áo",
        description: " Dịch vụ giặt ủi trọn gói mang lại sự tiện lợi cho gia đình bận rộn. Quần áo được giặt bằng máy chuyên dụng, sử dụng hóa chất an toàn, sau đó được sấy khô, ủi phẳng và gấp gọn gàng. Khách hàng nhận lại những bộ trang phục thơm tho, ngăn nắp, tiết kiệm tối đa thời gian chăm sóc nhà cửa.",
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
                    imageSrc="/individual-service/icon-services/dichvukhac.webp"
                />
                <WorkFlow items={workFlow} title="" />
            </div>
        </>
    );
}
