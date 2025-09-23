
import { useViewportContext } from "@/providers/viewport-provider";
import Image from "next/image";

export default function MainContent() {
    const { isMobile } = useViewportContext();


    return (
        <section id="section1" className={`w-[76%] ${isMobile ? 'h-auto' : 'h-screen'} `}>
            {/* Content */}
            <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center content ">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full px-4 pt-6 lg:py-0">
                    <div className={`flex-1 flex flex-col justify-left items-left ${isMobile ? "text-center" : "text-left"}`}>
                        <h1 className="font-bold text-sky-900 leading-snug tracking-wide"
                            style={{ marginBottom: isMobile ? "100px" : "0px" }}>
                            <span
                                className="block text-7xl sm:text-8xl md:text-8xl lg:text-9xl mb-4"
                                style={{ justifyContent: isMobile ? "center" : "flex-start", display: "flex" }}
                            >
                                SkyHome
                            </span>
                            <span
                                className="block text-5xl sm:text-4xl md:text-6xl lg:text-[90px] mb-2"
                                style={{
                                    justifyContent: isMobile ? "center" : "flex-start",
                                    display: "flex",
                                }}
                            >
                                Góc nào cũng
                            </span>
                            <span
                                className="block text-7xl sm:text-5xl md:text-8xl lg:text-[130px]  font-extrabold tracking-widest"
                                style={{ justifyContent: isMobile ? "center" : "flex-start", display: "flex" }}
                            >
                                “SẠCH”
                            </span>
                        </h1>
                    </div>


                    {/* Right Content - Phone Mockup */}
                    <div
                        id="imageWrapper"
                        className={`relative z-50 ${isMobile ? "w-[250px] h-[250px]" : "w-[500px] h-[500px]"}`}
                    >
                        <Image
                            id="myImage"
                            src={"/home-page/phone.webp"}
                            alt="Phone Mockup"
                            width={isMobile ? 300 : 600}
                            height={isMobile ? 300 : 600}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}