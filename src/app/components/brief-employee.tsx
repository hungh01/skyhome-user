import { SkyHomeFont1 } from "@/config/font/fonts";
import Image from "next/image";

export default function BriefEmployee() {
    return (
        <section
            id="section4"
            className="w-full h-auto flex items-center justify-center pt-10 lg:pt-20"
        >
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-8">
                {/* Left content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center mb-8 lg:mb-0 lg:pt-0 pt-12">
                    <div className="w-full lg:w-[80%]">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-sky-900 ">
                            <span>
                                SkyHome<span className={`${SkyHomeFont1.className} lg:text-[55px] text-4xl`}>
                                    {" "} Hệ sinh thái
                                </span>
                                <br />
                            </span>
                            <span className="text-[28px] lg:text-[38px] font-bold text-sky-900 ">
                                Sạch sẽ, an toàn và bền vững
                            </span>
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl text-sky-900 mb-6 max-w-xl mx-auto">
                            &quot;SkyHome hiểu rằng mỗi khách hàng đều có những nhu cầu riêng về vệ sinh. Vì thế, chúng tôi mang đến dịch vụ vệ sinh đa dạng
                            – từ dịch vụ vệ sinh nhà ở, vệ sinh văn phòng,
                            đến vệ sinh định kỳ hay tổng vệ sinh toàn diện. Dù là không gian sống hay nơi làm việc,
                            SkyHome luôn hướng đến sự sạch sẽ, gọn gàng và trong lành, để bạn thoải mái tận hưởng môi trường an toàn mỗi ngày.&quot;
                        </p>
                    </div>
                </div>
                {/* Right image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image
                        width={600}
                        height={600}
                        src="/home-page/employee.webp"
                        alt="SkyHome Employee"
                        className="w-full max-w-xs md:max-w-md lg:max-w-xl object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}
