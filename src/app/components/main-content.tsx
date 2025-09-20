
import { useViewportContext } from "@/providers/viewport-provider";
import Image from "next/image";

export default function MainContent() {
    const { isMobile, width } = useViewportContext();


    return (
        <section id="section1" className={`w-full ${isMobile ? 'h-auto' : 'h-screen'} relative overflow-hidden pt-3`}>
            {/* Content */}
            <div className="w-full h-screen flex flex-col items-center justify-center ">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full px-4 pt-6 lg:py-0">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left mb-4 lg:mb-0 order-1 pt-14 lg:order-1">
                        <h1 className={`text-2xl ${width < 1058 && width > 810 ? 'text-5xl' : ''} ${width < 850 ? 'text-3xl' : ''} ${width > 1058 ? 'text-6xl' : ''} font-bold text-sky-900 leading-tight mb-6`}>
                            SkyHome nay là
                            <br />
                            Tiện ích cho
                            <br />
                            Tiêu chuẩn sống mới
                        </h1>
                        {/* <p className="text-xs sm:text-lg text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            Luôn lắng nghe phản hồi, giải quyết vấn đề nhanh chóng <br /> và chuyên nghiệp để đảm bảo sự hài lòng tối đa
                        </p> */}

                        {/* <NavigationButton text="Liên hệ với chúng tôi" href="/contact" /> */}
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className=" h-screen flex-1 flex justify-center items-center lg:justify-end order-2 lg:order-2 mb-0 lg:mb-0 lg:pt-0">
                        <div className="relative">
                            <Image
                                id="myImage"
                                src={"/home-page/phone.webp"}
                                alt="Phone Mockup"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}