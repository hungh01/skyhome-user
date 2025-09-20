'use client';

import Image from "next/image";
import MainContent from "./components/main-content";
import { useEffect } from "react";

import ValuesProvided from "./components/values-provided";
import { initSectionObserver } from "./animations/observer-scroll";

import { useViewportContext } from "@/providers/viewport-provider";
import { moveImageOnScroll } from "./animations/flip-image";


export default function Home() {
  const { isMobile, width } = useViewportContext();

  useEffect(() => {
    const cleanup = initSectionObserver(".section");
    return () => cleanup();
  }, []);

  useEffect(() => {
    moveImageOnScroll("#myImage", "#imageWrapper", "#imageTarget", "#section2");
  }, []);

  return (
    <section className=" flex flex-col items-center justify-center bg-white">
      {/* Background cố định */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/home-page/sky.webp"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Nội dung cuộn */}
      <div className="content z-10 w-[76%]">
        <div className="section min-h-screen flex items-center justify-center">
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
        </div>
        <div className="section min-h-screen flex items-center justify-center">
          <section id="section2" className="w-full h-screen flex flex-col items-center justify-center relative">
            <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center content">
              {/* target để Flip.fit */}
              <div id="imageTarget" className="relative w-[550px] h-[550px] flex items-center justify-center z-50"></div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
