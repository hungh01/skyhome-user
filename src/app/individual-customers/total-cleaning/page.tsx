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
        title: "Chọn dịch vụ",
        description: "Nhấn vào biểu tượng Vệ sinh theo giờ.",
        imageSrc: "/individual-service/steps/tongvs/1.webp"
    },
    {
        title: "Tùy chọn dịch vụ",
        description: "Chọn gói dịch vụ, mục cần làm và dụng cụ sử dụng.",
        imageSrc: "/individual-service/steps/tongvs/2.webp"
    },
    {
        title: "Chọn thời gian",
        description: "Chọn ngày, giờ và ghi chú cho dịch vụ.",
        imageSrc: "/individual-service/steps/tongvs/3.webp"
    },
    {
        title: "Xác nhận thông tin",
        description: "Kiểm tra địa chỉ, thời gian và công việc.",
        imageSrc: "/individual-service/steps/tongvs/4.webp"
    },
    {
        title: "Chọn voucher",
        description: " Áp dụng ưu đãi phù hợp.",
        imageSrc: "/individual-service/steps/tongvs/5.webp"
    },
    {
        title: "Thanh toán & đặt dịch vụ",
        description: "Xác nhận chi phí, chọn phương thức thanh toán và hoàn tất đặt dịch vụ.",
        imageSrc: "/individual-service/steps/tongvs/6.webp"
    }
];



const features: CustomerCareService[] = [
    {
        title: "An toàn",
        description: "SkyHome đặt an toàn làm tiêu chí hàng đầu trong dịch vụ vệ sinh theo giờ. Nhân viên và đối tác được tuyển chọn kỹ lưỡng, đào tạo bài bản, giúp khách hàng yên tâm khi vệ sinh nhà ở hay không gian cá nhân.",
        icon: "/icons/why-choose-icons/antoan.webp"
    },
    {
        title: "Minh bạch",
        description: "Dịch vụ vệ sinh theo giờ tại SkyHome luôn đi kèm bảng giá công khai và rõ ràng. Khách hàng có thể dễ dàng biết trước chi phí, lựa chọn gói dịch vụ phù hợp với nhu cầu thực tế và ngân sách gia đình.",
        icon: "/icons/why-choose-icons/chatluong.webp"
    },
    {
        title: "Chất lượng",
        description: "SkyHome sở hữu đội ngũ nhân viên và đối tác có chuyên môn cùng thiết bị vệ sinh hiện đại. Mọi quy trình vệ sinh theo giờ được thực hiện theo chuẩn, đảm bảo không gian sạch sẽ, gọn gàng và an toàn cho sức khỏe.",
        icon: "/icons/why-choose-icons/minhbach.webp"
    },

    {
        title: "Tiện lợi",
        description: " Khách hàng đặt dịch vụ vệ sinh theo giờ chỉ với vài thao tác đơn giản. Thời gian linh hoạt giúp bạn chủ động sắp xếp lịch trình, thuận tiện cho cả công việc gia đình lẫn nhu cầu phát sinh đột xuất.",
        icon: "/icons/why-choose-icons/tienloi.webp"
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
                    title1="An tâm"
                    title="với dịch vụ"
                    description="Tại SkyHome, chúng tôi luôn đặt sự an tâm và hài lòng của khách hàng lên hàng đầu. Mỗi dịch vụ vệ sinh không chỉ dừng lại ở việc làm sạch, mà còn là cam kết về chất lượng, uy tín và sự chuyên nghiệp. Chúng tôi hiểu rằng mỗi gia đình, mỗi doanh nghiệp đều có nhu cầu và tiêu chuẩn riêng, vì thế SkyHome luôn lắng nghe và đưa ra giải pháp phù hợp, từ vệ sinh nhà ở, văn phòng, cho đến dịch vụ định kỳ và tổng vệ sinh toàn diện. 
                Với đội ngũ nhân viên được đào tạo bài bản, tác phong chuyên nghiệp, SkyHome cam kết mang đến sự chỉn chu trong từng chi tiết, từ những góc nhỏ khó thấy đến toàn bộ không gian. Tất cả đều hướng đến mục tiêu tạo ra một môi trường sạch sẽ, gọn gàng, an toàn và trong lành, giúp khách hàng tận hưởng sự thoải mái tuyệt đối.
                Lựa chọn SkyHome, bạn không chỉ nhận được một dịch vụ vệ sinh đơn thuần, mà còn là sự đồng hành đáng tin cậy trong việc kiến tạo và gìn giữ không gian sống, không gian làm việc chuẩn mực. SkyHome – sạch sẽ để bạn luôn an tâm." />
                {/* Ensure these components do not cause state updates during render */}
                <UserManual serviceName={'Tổng vệ sinh'} steps={steps} />
                <WhyChoose items={features} />
                <WorkFlow items={workFlow} />
            </div>
        </>
    );
}