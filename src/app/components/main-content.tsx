
import { useViewportContext } from "@/providers/viewport-provider";
import Image from "next/image";

export default function MainContent() {
    const { isMobile } = useViewportContext();


    return (
        <section id="section1" className={`w-[76%] ${isMobile ? 'h-auto' : 'h-screen'} `}>
            {/* Content */}
            <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center content ">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full px-4 pt-6 lg:py-0">
                    <div className="flex-1 flex flex-col justify-center items-start text-left">
                        <h1 className="font-bold text-sky-900 leading-snug tracking-wide">
                            <span
                                className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4"
                                style={{ justifyContent: "flex-start", display: "flex" }}
                            >
                                SkyHome
                            </span>
                            <span
                                className="block text-3xl sm:text-4xl md:text-5xl lg:text-[67px] mb-2"
                                style={{ justifyContent: "flex-start", display: "flex" }}
                            >
                                Góc nào cũng
                            </span>
                            <span
                                className="block text-4xl sm:text-5xl md:text-6xl lg:text-[98px]  font-extrabold tracking-widest"
                                style={{ justifyContent: "flex-start", display: "flex" }}
                            >
                                “SẠCH”
                            </span>
                        </h1>
                    </div>


                    {/* Right Content - Phone Mockup */}
                    <div className=" h-screen flex-1 flex justify-center items-center lg:justify-end order-2 lg:order-2 mb-0 lg:mb-0 lg:pt-0">
                        <div id="imageWrapper" className="relative w-[500px] h-[500px] z-50">
                            <Image
                                id="myImage"
                                src={"/home-page/phone.webp"}
                                alt="Phone Mockup"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}