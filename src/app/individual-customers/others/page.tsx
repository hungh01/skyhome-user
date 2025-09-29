import WorkFlow from "@/components/service-form/work-flow";
import { WorkingStep } from "@/interfaces/services/working-step.interface";



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

export default function Others() {
    return (
        <div className="min-h-screen pt-16">
            <WorkFlow title="Các dịch vụ khác của SkyHome" items={workFlow} />
        </div>
    );
}
