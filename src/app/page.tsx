'use client';

import Image from "next/image";
import MainContent from "./components/main-content";
import { useEffect } from "react";

import ValuesProvided from "./components/values-provided";
import { initSectionObserver } from "./animations/observer-scroll";

import { moveImageOnScroll } from "./animations/flip-image";
import { BriefAbout } from "./components/brief-about";
import BriefEmployee from "./components/brief-employee";

import { initParallaxBg } from "./animations/parallax-bg";
import { Footer } from "@/components/layout/footer";


export default function Home() {

  useEffect(() => {
    const cleanup = initSectionObserver(".section");
    return () => cleanup();
  }, []);

  useEffect(() => {
    moveImageOnScroll("#myImage", "#imageWrapper", "#imageTarget", "#section2");
  }, []);

  useEffect(() => {
    const anim = initParallaxBg("#bgImage", ".content");
    return () => {
      anim.kill(); // cleanup khi unmount
    };
  }, []);

  return (
    <section className=" flex flex-col items-center justify-center bg-white">

      {/* Background cố định */}
      <div className="fixed inset-0 z-0">
        <Image
          id="bgImage"
          src="/home-page/sky.webp"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Nội dung cuộn */}
      <div className="content z-10">
        <div className="section min-h-screen flex items-center justify-center">
          <MainContent />
        </div>
        <div className="section min-h-screen flex items-center justify-center">
          <ValuesProvided />
        </div>
        <div className="section min-h-screen flex ">
          <BriefAbout />
        </div>
        <div className="section min-h-screen flex  items-center justify-center">
          <BriefEmployee />
        </div>
        <div className="section min-h-screen flex  items-center justify-center">
          <Footer />
        </div>
      </div>
    </section>
  );
}
