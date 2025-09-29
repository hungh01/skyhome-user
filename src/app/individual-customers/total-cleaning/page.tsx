'use client';
import { initParallaxBg } from "@/app/animations/parallax-bg";
import MainSection from "@/components/service-form/main-section";
import ServiceProtected from "@/components/service-form/service-protected";
import UserManual from "@/components/service-form/user-manual";
import WhyChoose from "@/components/service-form/why-choose";
import WorkFlow from "@/components/service-form/work-flow";
import { BookingStep } from "@/interfaces/services/booking-step.interface";
import { CustomerCareService } from "@/interfaces/services/customer-care.interface";
import { WorkingStep } from "@/interfaces/services/working-step.interface";
import Image from "next/image";
import { useEffect } from "react";



const steps: BookingStep[] = [
    {
        title: "Bước 1",
        description: "Mô tả bước 1 Mô tả bước 1 Mô tả bước 1 Mô tả bước 1 Mô tả bước 1 Mô tả bước 1 Mô tả bước 1",
        imageSrc: "/about/review/customer5.jpg"
    },
    {
        title: "Bước 2",
        description: "Mô tả bước 2 Mô tả bước 2 Mô tả bước 2 Mô tả bước 2 Mô tả bước 2 Mô tả bước 2 Mô tả bước 2",
        imageSrc: "/about/review/customer1.png"
    },
    {
        title: "Bước 3",
        description: "Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3",
        imageSrc: "/about/review/customer5.jpg"
    },
    {
        title: "Bước 4",
        description: "Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3",
        imageSrc: "/about/review/customer6.jpg"
    },
    {
        title: "Bước 5",
        description: "Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3 Mô tả bước 3",
        imageSrc: "/about/review/customer5.jpg"
    }
];

const features: CustomerCareService[] = [
    {
        title: "Đội ngũ chuyên nghiệp",
        description: "Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. ",
        icon: "https://img.icons8.com/sf-black/64/group-foreground-selected.png"
    },
    {
        title: "Dịch vụ linh hoạt",
        description: "Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.",
        icon: "https://img.icons8.com/ios-filled/50/online-support.png"
    },
    {
        title: "Bảo đảm an toàn",
        description: "Cam kết bảo vệ tài sản và quyền riêng tư của khách hàng.",
        icon: "https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-protected-user-interface-smashingstocks-glyph-smashing-stocks.png"
    },

    {
        title: "Giá cả cạnh tranh",
        description: "Dịch vụ chất lượng với mức giá hợp lý.",
        icon: "https://img.icons8.com/ios/50/price-tag-usd--v1.png"
    }
];

const workFlow: WorkingStep[] = [
    {
        title: "Đặt dịch vụ",
        description: "Chọn gói dịch vụ và thời gian phù hợp với bạn.",
        image: "/images/workflow1.jpg"
    },
    {
        title: "Xác nhận",
        description: "Nhân viên của chúng tôi sẽ liên hệ để xác nhận chi tiết.",
        image: "/images/workflow2.jpg"
    },
    {
        title: "Thực hiện dịch vụ",
        description: "Đội ngũ chuyên nghiệp sẽ đến và hoàn thành công việc.",
        image: "/images/workflow3.jpg"
    },
    {
        title: "Hoàn tất và đánh giá",
        description: "Kiểm tra kết quả và chia sẻ phản hồi của bạn.",
        image: "/images/workflow4.jpg"
    }
];


export default function TotalMachineCleaning() {
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
            <div className="min-h-screen">
                <MainSection
                    title1="Dịch vụ"
                    title2="Tổng vệ sinh"
                    description="Dịch vụ tổng vệ sinh của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn."
                    buttonText="Đặt dịch vụ ngay"
                    buttonLink="/individual-customers/air-conditioning-cleaning/service-form"
                    imageSrc="/individual-service/icon-services/tongvs.webp"
                />
                <ServiceProtected
                    title="An tâm với dịch vụ"
                    description="Tại SkyHome, chúng tôi luôn đặt sự an tâm và hài lòng của khách hàng lên hàng đầu. Mỗi dịch vụ vệ sinh không chỉ dừng lại ở việc làm sạch, mà còn là cam kết về chất lượng, uy tín và sự chuyên nghiệp. Chúng tôi hiểu rằng mỗi gia đình, mỗi doanh nghiệp đều có nhu cầu và tiêu chuẩn riêng, vì thế SkyHome luôn lắng nghe và đưa ra giải pháp phù hợp, từ vệ sinh nhà ở, văn phòng, cho đến dịch vụ định kỳ và tổng vệ sinh toàn diện. 
                Với đội ngũ nhân viên được đào tạo bài bản, tác phong chuyên nghiệp, SkyHome cam kết mang đến sự chỉn chu trong từng chi tiết, từ những góc nhỏ khó thấy đến toàn bộ không gian. Tất cả đều hướng đến mục tiêu tạo ra một môi trường sạch sẽ, gọn gàng, an toàn và trong lành, giúp khách hàng tận hưởng sự thoải mái tuyệt đối.
                Lựa chọn SkyHome, bạn không chỉ nhận được một dịch vụ vệ sinh đơn thuần, mà còn là sự đồng hành đáng tin cậy trong việc kiến tạo và gìn giữ không gian sống, không gian làm việc chuẩn mực. SkyHome – sạch sẽ để bạn luôn an tâm." />
                {/* Ensure these components do not cause state updates during render */}
                <UserManual serviceName={'Vệ sinh máy lạnh'} steps={steps} />
                <WhyChoose items={features} />
                <WorkFlow items={workFlow} />
            </div>
        </>
    );
}