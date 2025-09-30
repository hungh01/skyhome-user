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
        description: "Nhấn vào biểu tượng vệ sinh máy lạnh",
        imageSrc: "/individual-service/steps/maylanh/1.webp"
    },
    {
        title: "Tùy chọn dịch vụ",
        description: "Chọn gói dịch vụ, mục cần làm và dụng cụ sử dụng.",
        imageSrc: "/individual-service/steps/maylanh/2.webp"
    },
    {
        title: "Chọn thời gian",
        description: "Chọn ngày, giờ và ghi chú cho dịch vụ.",
        imageSrc: "/individual-service/steps/maylanh/3.webp"
    },
    {
        title: "Xác nhận thông tin",
        description: "Kiểm tra địa chỉ, thời gian và công việc.",
        imageSrc: "/individual-service/steps/maylanh/4.webp"
    },
    {
        title: "Chọn voucher",
        description: " Áp dụng ưu đãi phù hợp.",
        imageSrc: "/individual-service/steps/maylanh/5.webp"
    },
    {
        title: "Thanh toán & đặt dịch vụ",
        description: "Xác nhận chi phí, chọn phương thức thanh toán và hoàn tất đặt dịch vụ.",
        imageSrc: "/individual-service/steps/maylanh/6.webp"
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
        title: "Chuẩn bị dụng cụ và dung dịch",
        description: "Chuẩn bị máy hút bụi mini, chổi cọ mềm, khăn khô, dung dịch vệ sinh dàn lạnh/dàn nóng và túi hứng nước vệ sinh chuyên dụng. Đây là các vật dụng cần thiết để làm sạch máy lạnh an toàn và hiệu quả.",
        image: "/individual-service/steps/theogio/B1.webp"
    },
    {
        title: "Vệ sinh dàn lạnh trong nhà",
        description: "Tắt nguồn điện, tháo mặt nạ và lưới lọc bụi. Dùng máy hút bụi hoặc chổi mềm để loại bỏ bụi bẩn, sau đó rửa sạch lưới lọc bằng nước. Xịt dung dịch vệ sinh vào dàn lạnh, để vài phút rồi rửa trôi bụi bẩn bằng túi hứng nước.",
        image: "/individual-service/steps/maylanh/B2.webp"
    },
    {
        title: "Làm sạch dàn nóng ngoài trời",
        description: "Dùng chổi mềm hoặc máy hút bụi để làm sạch bụi bám bên ngoài dàn nóng. Nếu có thể, dùng vòi xịt nước áp lực vừa phải để rửa sạch cánh tản nhiệt, giúp máy tản nhiệt nhanh hơn và hoạt động ổn định.",
        image: "/individual-service/steps/theogio/B3.webp"
    },
    {
        title: "Hoàn tất và bảo dưỡng định kỳ",
        description: "Lau khô, lắp lại các bộ phận và bật máy thử để kiểm tra hoạt động. Nên vệ sinh máy lạnh định kỳ 3–6 tháng/lần để không khí trong lành hơn, máy vận hành êm ái, tiết kiệm điện và tăng tuổi thọ.",
        image: "/individual-service/steps/theogio/B1.webp"
    }
];

export default function AirConditioningCleaningPage() {
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
            <div className="contentmin-h-screen">
                <MainSection
                    title1="Dịch vụ"
                    title2="Vệ sinh máy lạnh"
                    description="Làm sạch dàn lạnh và dàn nóng, tăng hiệu suất làm mát và giữ không khí trong lành."
                    buttonText="Đặt dịch vụ ngay"
                    buttonLink="/individual-customers/air-conditioning-cleaning/service-form"
                    imageSrc="/individual-service/icon-services/vsmaylanh.webp"
                />
                <ServiceProtected
                    title="An tâm với dịch vụ"
                    description="An tâm khi tận hưởng không khí trong lành với dịch vụ vệ sinh máy lạnh SkyHome. Đối tác tiến hành làm sạch dàn lạnh, bộ lọc và các bộ phận quan trọng khác, loại bỏ hoàn toàn bụi bẩn, nấm mốc và mùi khó chịu. Nhờ vậy, máy lạnh hoạt động ổn định, tiết kiệm điện năng và kéo dài tuổi thọ. Sau khi vệ sinh, khách hàng có thể cảm nhận ngay luồng gió mát mẻ, trong lành và an toàn cho sức khỏe. Đây là dịch vụ cần thiết để bảo vệ gia đình, đặc biệt trong những ngày nắng nóng và môi trường đô thị ô nhiễm.
Vệ sinh máy nước nóng lạnh" />
                {/* Ensure these components do not cause state updates during render */}
                <UserManual serviceName={'Vệ sinh máy lạnh'} steps={steps} />
                <WhyChoose items={features} />
                <WorkFlow items={workFlow} />
            </div>
        </>

    );
}