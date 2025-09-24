'use client';
import MainSection from "./components/main-section";
import ServiceSection from "./components/ServiceSection";



export default function BusinessCustomers() {

    return (
        <div className="w-full h-auto text-sky-900 bg-cover bg-center">

            <div className="content z-10 bg-[url('/home-page/sky.webp')] bg-cover bg-center">

                <MainSection />
                <ServiceSection />
            </div>
        </div>
    )
}