
import Image from "next/image";

export default function WhyChooseOnSupport() {
    return (
        <section className="w-full min-h-screen relative overflow-hidden  align-center flex items-center">
            <div className="relative z-20 md:w-[76%] mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 pt-6 lg:py-0">

                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center mb-0 lg:mb-0">
                        <div className="w-64 h-80 sm:w-full sm:h-auto flex items-center justify-center">
                            <div className="w-full h-full flex justify-center lg:justify-start items-center">
                                <Image
                                    src={"/support/lydoantam.webp"}
                                    alt="Culture Personality Image"
                                    width={2080}
                                    height={1560}
                                    className="w-3/4 h-full object-contain z-30"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 h-full max-w-2xl text-center lg:text-left md:text-xl text-lg text-gray-700 leading-relaxed mx-auto lg:mx-0 opacity-90">
                        <h2 className="text-3xl md:text-6xl font-bold text-center mb-8 md:mb-20 text-sky-900">
                            Lý do an tâm sử dụng dịch vụ của SkyHome
                        </h2>
                        {"Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn. Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn."}
                    </div>

                </div>
            </div>
        </section>
    )
};