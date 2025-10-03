import { WorkingStep } from "@/interfaces/services/working-step.interface";
import Image from "next/image";


interface services extends WorkingStep {
    thumbNail: string;
}

const items: services[] = [
    {
        title: "Vệ sinh Sofa",
        description: "Dịch vụ làm sạch sofa chuyên nghiệp giúp loại bỏ bụi bẩn, vết ố, lông thú cưng và mùi hôi tích tụ lâu ngày. Quy trình sử dụng máy móc chuyên dụng và dung dịch an toàn, giữ cho bề mặt sofa mềm mại, bền màu, mang lại cảm giác êm ái và thoải mái như mới.",
        thumbNail: "/individual-service/icon-services/sofa.webp",
        image: "/individual-service/steps/others/sofa.webp"
    },
    {
        title: "Vệ sinh nón bảo hiểm",
        description: " Nón bảo hiểm thường xuyên tiếp xúc với tóc và da đầu, dễ bám mồ hôi, vi khuẩn và mùi khó chịu. Dịch vụ vệ sinh nón bảo hiểm của SkyHome giúp làm sạch sâu bên trong lớp lót, khử khuẩn, khử mùi hiệu quả, giữ cho nón luôn sạch sẽ, thoáng mát và an toàn khi sử dụng.",
        thumbNail: "/individual-service/icon-services/nonbaohiem.webp",
        image: "/individual-service/steps/others/nonbaohiem.webp"
    },
    {
        title: "Vệ sinh máy năng lượng mặt trời",
        description: " Bụi bẩn và rêu mốc bám trên bề mặt tấm pin có thể làm giảm hiệu suất hấp thụ ánh sáng đến 20–30%. Dịch vụ vệ sinh máy năng lượng mặt trời định kỳ giúp loại bỏ lớp bụi, duy trì hiệu suất tối ưu, kéo dài tuổi thọ thiết bị và đảm bảo nguồn năng lượng sạch luôn hoạt động ổn định.",
        thumbNail: "/individual-service/icon-services/vsmaynangluong.webp",
        image: "/individual-service/steps/others/nangluongmattroi.webp"
    },
    {
        title: "Giặt ủi quần áo",
        description: " Dịch vụ giặt ủi trọn gói mang lại sự tiện lợi cho gia đình bận rộn. Quần áo được giặt bằng máy chuyên dụng, sử dụng hóa chất an toàn, sau đó được sấy khô, ủi phẳng và gấp gọn gàng. Khách hàng nhận lại những bộ trang phục thơm tho, ngăn nắp, tiết kiệm tối đa thời gian chăm sóc nhà cửa.",
        thumbNail: "/individual-service/icon-services/giatui.webp",
        image: "/individual-service/steps/others/giatui.webp"
    },
]



export default function OtherServices() {
    return (
        <section className="w-full py-10">

            <div className="flex flex-col gap-8 w-full md:w-[72%] mx-auto">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`relative flex flex-col md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }  rounded-2xl shadow-sm overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-[#aad6f2] rounded-2xl opacity-10 pointer-events-none" />
                        <div className="flex-shrink-0 flex justify-center items-center p-2 md:p-4 w-full md:w-1/2">
                            <Image
                                src={item.image}
                                width={2028}
                                height={1920}
                                alt={item.title}
                                className=" h-auto w-48 md:w-9/10 object-cover rounded-xl "
                            />
                        </div>
                        <div className="flex flex-col justify-center p-4 md:p-8 w-full md:w-1/2">
                            <div className="flex items-center mb-2">
                                <div className="rounded-lg  w-7 h-7 md:w-20 md:h-10 flex items-center justify-center shrink-0">
                                    <div className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] relative">
                                        <Image src={item.thumbNail} alt={item.title} fill style={{ objectFit: "contain" }} />
                                    </div>
                                </div>
                                <h3 className="font-bold text-2xl md:text-4xl text-sky-900">
                                    {item.title}
                                </h3>
                            </div>
                            <p className={`text-base md:text-xl text-gray-700`}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
