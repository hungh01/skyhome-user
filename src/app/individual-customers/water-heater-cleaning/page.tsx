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
        description: "Nhấn vào biểu tượng Vệ sinh máy nóng lạnh.",
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


export default function WaterHeaterCleaningPage() {
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
                    title2="Vệ sinh máy nóng lạnh"
                    description="Loại bỏ cặn bám, diệt khuẩn bên trong, giúp máy hoạt động bền bỉ và an toàn hơn."
                    buttonText="Đặt dịch vụ ngay"
                    buttonLink="/individual-customers/water-heater-cleaning/service-form"
                    imageSrc="/individual-service/icon-services/vsmaynonglanh.webp"
                />
                <ServiceProtected
                    title="An tâm với dịch vụ"
                    description="An tâm khi nguồn nước sinh hoạt trong gia đình luôn được đảm bảo nhờ dịch vụ vệ sinh máy nước nóng lạnh SkyHome. Đối tác tiến hành loại bỏ cặn bẩn, rỉ sét và vi khuẩn tích tụ trong bình chứa, giúp máy vận hành ổn định và an toàn hơn. Việc vệ sinh định kỳ giúp nguồn nước sử dụng hàng ngày trong lành, tinh khiết, bảo vệ sức khỏe cho cả gia đình. Đồng thời, thiết bị hoạt động bền bỉ hơn, hạn chế sự cố hỏng hóc và tiết kiệm chi phí sửa chữa. Đây là dịch vụ cần thiết để duy trì chất lượng nguồn nước cũng như tuổi thọ của máy nước nóng lạnh." />
                {/* Ensure these components do not cause state updates during render */}
                <UserManual serviceName={'Vệ sinh máy nóng lạnh'} steps={steps} />
                <WhyChoose items={features} />
                <WorkFlow items={workFlow} />
            </div>
        </>
    );
}