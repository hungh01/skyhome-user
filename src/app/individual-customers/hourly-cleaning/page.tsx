import MainSection from "../components/service-form/main-section";
import ServiceProtected from "../components/service-form/service-protected";
import UserManual from "../components/service-form/user-manual";
import WhyChoose from "../components/service-form/why-choose";
import WorkFlow from "../components/service-form/work-flow";

interface step {
    title: string;
    description: string;
    imageSrc: string;
}

interface Feature {
    title: string;
    description: string;
    icon: string; // URL or path to the icon image
}

export default function HourlyCleaning() {

    const steps: step[] = [
        {
            title: "Bước 1",
            description: "Mô tả bước 1",
            imageSrc: "/images/step1.jpg"
        },
        {
            title: "Bước 2",
            description: "Mô tả bước 2",
            imageSrc: "/images/step2.jpg"
        },
        {
            title: "Bước 3",
            description: "Mô tả bước 3",
            imageSrc: "/images/step3.jpg"
        }
    ];

    const features: Feature[] = [
        {
            title: "Đội ngũ chuyên nghiệp",
            description: "Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. Nhân viên được đào tạo bài bản, tận tâm với công việc. ",
            icon: "https://img.icons8.com/sf-black/64/group-foreground-selected.png"
        },
        {
            title: "Dịch vụ linh hoạt",
            description: "Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.Lựa chọn thời gian và gói dịch vụ phù hợp với nhu cầu của bạn.",
            icon: "https://img.icons8.com/material-outlined/24/online-support.png"
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

    const workFlow: Array<{ title: string; description: string; image: string }> = [
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

    return (
        <div className="min-h-screen">
            <MainSection
                title1="Dịch vụ"
                title2="Dọn dẹp theo giờ"
                description="Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn."
                buttonText="Đặt dịch vụ ngay"
                buttonLink="/individual-customers/hourly-cleaning/service-form"
                imageSrc="/individual-customers/hourly-cleaning/hero-image.jpg"
            />
            <ServiceProtected title="An tâm với dịch vụ" description="Chúng tôi cam kết bảo vệ quyền lợi của khách hàng với dịch vụ chất lượng cao và đội ngũ nhân viên chuyên nghiệp." />
            {/* Ensure these components do not cause state updates during render */}
            <UserManual steps={steps} />
            <WhyChoose items={features} />
            <WorkFlow items={workFlow} />
        </div>
    );
}