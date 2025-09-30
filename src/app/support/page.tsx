import ServiceProtected from "@/components/service-form/service-protected";
import LeftImage from "@/components/split-2-side/left-image";
import Image from "next/image";
import ContactChannels from "./components/social";
import SafetyPolicy from "./components/safety-policy";


export default function BusinessCustomers() {
    return (
        <div className="w-full h-min-screen">
            <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4 py-8">
                <Image src="/home-page/sky.webp" alt="SkyHome" layout="fill" objectFit="cover" />
            </section>

            <ServiceProtected
                title="Điều khoản và chính sách bảo mật của khách hàng"
                description="SkyHome cung cấp các dịch vụ vệ sinh chuyên nghiệp dành cho các doanh nghiệp, giúp duy trì môi trường làm việc sạch sẽ và an toàn."
            />

            <LeftImage
                title="Lý do an tâm sử dụng dịch vụ của SkyHome"
                content={
                    <>
                        <p className="text-base sm:text-xl text-gray-700 mb-8 leading-relaxed mx-auto lg:mx-0 opacity-90">
                            {"Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn. Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn."}
                        </p>

                    </>
                }
                image={
                    <div className="w-full h-full flex justify-start items-start">
                        <Image
                            src={"/individual-service/dichvukhac.png"}
                            alt="Culture Personality Image"
                            width={2080}
                            height={1560}
                            className="w-1/2 h-full object-contain z-30"
                        />
                    </div>
                }
            />

            <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4 py-8">
                <h1 className="text-4xl font-bold text-sky-900 mb-4">Nguyên tắc chăm sóc khách hàng</h1>
                <Image
                    src="/home-page/sky.webp"
                    alt="SkyHome"
                    width={1920}
                    height={1080}
                />
            </section>
            <ContactChannels />
            <SafetyPolicy />
        </div>
    )
}