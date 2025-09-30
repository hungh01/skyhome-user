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
        title: "Chuẩn bị và sắp xếp dụng cụ",
        description: "Khách hàng có thể chọn dùng dụng cụ có sẵn tại nhà hoặc để đối tác SkyHome mang theo. Việc chuẩn bị đầy đủ chổi, khăn lau, cây lau nhà, nước lau sàn… giúp quá trình vệ sinh diễn ra nhanh gọn.",
        image: "/images/workflow1.jpg"
    },
    {
        title: "Thực hiện vệ sinh theo khu vực",
        description: "Đối tác bắt đầu dọn dẹp từ những khu vực ưu tiên như phòng khách, bếp, phòng ngủ, sau đó đến các góc nhỏ và nhà vệ sinh. Mọi đồ đạc được lau chùi, sắp xếp gọn gàng, giữ nguyên sự riêng tư của gia đình.",
        image: "/images/workflow2.jpg"
    },
    {
        title: "Kiểm tra và hoàn thiện công việc",
        description: "Sau khi làm sạch, đối tác rà soát lại từng khu vực, đảm bảo không bỏ sót chi tiết nào. Các vật dụng được đặt đúng vị trí, không gian trở nên sạch sẽ, thoáng mát và ngăn nắp.",
        image: "/images/workflow3.jpg"
    },
    {
        title: "Bàn giao và ghi nhận ý kiến khách hàng",
        description: "Kết thúc dịch vụ, khách hàng kiểm tra kết quả và phản hồi trực tiếp. Mọi góp ý sẽ được SkyHome tiếp nhận để cải thiện, mang lại trải nghiệm vệ sinh theo giờ ngày càng tốt hơn.",
        image: "/images/workflow4.jpg"
    }
];
export default function HourlyCleaning() {

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
                    title2="Vệ sinh theo giờ"
                    description="Giải pháp linh hoạt, dọn dẹp nhà cửa theo nhu cầu và thời gian bạn chọn."
                    buttonText="Đặt dịch vụ ngay"
                    buttonLink="/individual-customers/hourly-cleaning/service-form"
                    imageSrc="/individual-service/icon-services/vstheogio.webp"
                />
                <ServiceProtected
                    title="An tâm với dịch vụ"
                    description=" An tâm khi lựa chọn dịch vụ vệ sinh theo giờ SkyHome, bạn luôn có không gian sạch sẽ, gọn gàng mà không lo ảnh hưởng đến sinh hoạt thường ngày. Các đối tác của SkyHome đều được chọn lọc kỹ càng, trải qua đào tạo bài bản và làm việc đúng giờ, chuyên nghiệp. Trong suốt quá trình vệ sinh, sự riêng tư của gia đình luôn được tôn trọng, mọi đồ đạc được giữ gìn cẩn thận. Sau khi kết thúc dịch vụ, ngôi nhà trở nên sáng sủa, ngăn nắp, mang lại cảm giác thoải mái và tinh thần dễ chịu cho cả gia đình. Đây là giải pháp linh hoạt và tiết kiệm cho những ai muốn duy trì không gian sống sạch đẹp mỗi ngày." />
                {/* Ensure these components do not cause state updates during render */}
                <UserManual serviceName={'Vệ sinh theo giờ'} steps={steps} />
                <WhyChoose items={features} />
                <WorkFlow items={workFlow} />
            </div>
        </>

    );
}