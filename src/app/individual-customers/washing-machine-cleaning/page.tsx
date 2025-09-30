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
        description: "Nhấn vào biểu tượng Vệ sinh máy giặt.",
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
        title: "Chuẩn bị đầy đủ dụng cụ",
        description: "Chuẩn bị giấm trắng, baking soda hoặc dung dịch vệ sinh chuyên dụng, thêm khăn mềm, bàn chải nhỏ và bình xịt. Đây là những vật dụng cần thiết để làm sạch từ lồng giặt, khay bột giặt cho đến các chi tiết nhỏ.",
        image: "/images/workflow1.jpg"
    },
    {
        title: "Vệ sinh lồng giặt",
        description: "Sử dụng chế độ Tự vệ sinh (nếu máy có sẵn) hoặc cho giấm trắng vào chạy chu trình nước nóng để diệt khuẩn, sau đó dùng baking soda khử mùi và loại bỏ cặn bẩn. Cách này giúp lồng giặt sạch sâu, quần áo thơm tho hơn sau mỗi lần giặt.",
        image: "/images/workflow2.jpg"
    },
    {
        title: "Làm sạch các chi tiết máy",
        description: "Tháo khay bột giặt, ngâm và chà sạch cặn bám; vệ sinh ron cao su (máy cửa ngang) để loại bỏ nấm mốc; tháo rửa màng lọc, kiểm tra ống xả để tránh tắc nghẽn. Đây là những vị trí dễ bẩn nhưng hay bị bỏ quên.",
        image: "/images/workflow3.jpg"
    },
    {
        title: "Hoàn tất và bảo quản",
        description: "Lau sạch vỏ ngoài máy bằng khăn mềm, xịt rửa các khe nhỏ. Sau khi vệ sinh, nên mở cửa máy và khay bột giặt để hong khô, giữ máy luôn thông thoáng, hạn chế ẩm mốc và kéo dài tuổi thọ.",
        image: "/images/workflow4.jpg"
    }
];



export default function WashingMachineCleaningPage() {
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
                    title2="Vệ sinh máy giặt"
                    description="Loại bỏ cặn bẩn, nấm mốc trong lồng giặt, giúp quần áo luôn thơm sạch."
                    buttonText="Đặt dịch vụ ngay"
                    buttonLink="/individual-customers/washing-machine-cleaning/service-form"
                    imageSrc="/individual-service/icon-services/vsmaygiat.webp"
                />
                <ServiceProtected
                    title="An tâm với dịch vụ"
                    description="An tâm khi thiết bị giặt giũ được chăm sóc đúng cách nhờ dịch vụ vệ sinh máy giặt SkyHome. Các đối tác sử dụng dụng cụ chuyên dụng và dung dịch an toàn để làm sạch toàn bộ lồng giặt, loại bỏ cặn bẩn, vi khuẩn và nấm mốc tích tụ lâu ngày. Sau khi vệ sinh, máy giặt hoạt động ổn định hơn, giúp quần áo luôn sạch sẽ, thơm mát và an toàn cho làn da. Dịch vụ này không chỉ bảo vệ sức khỏe gia đình mà còn duy trì độ bền, hạn chế hư hỏng, tiết kiệm chi phí sửa chữa. Vệ sinh máy giặt định kỳ chính là cách thông minh để tối ưu hiệu quả và kéo dài tuổi thọ thiết bị." />
                {/* Ensure these components do not cause state updates during render */}
                <UserManual serviceName={'Vệ sinh máy lạnh'} steps={steps} />
                <WhyChoose items={features} />
                <WorkFlow items={workFlow} />
            </div>
        </>
    );
}