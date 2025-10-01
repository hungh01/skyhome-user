import LeftImage from "@/components/split-2-side/left-image";
import Image from "next/image";

export default function WhyChooseOnSupport() {
    return (
        <LeftImage
            title="Lý do an tâm sử dụng dịch vụ của SkyHome"
            content={
                <>
                    <p className="text-base sm:text-xl text-gray-700 mb-14 leading-relaxed mx-auto lg:mx-0 opacity-90">
                        {"Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn. Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn."}
                    </p>
                </>
            }
            image={
                <div className="w-full h-full flex justify-center lg:justify-start items-center">
                    <Image
                        src={"/about/culture-personality.webp"}
                        alt="Culture Personality Image"
                        width={2080}
                        height={1560}
                        className="w-3/4 h-full object-contain z-30"
                    />
                </div>
            }
        />
    )
};