'use client';
import MainSection from "./components/main-section";
import ServiceSection from "./components/ServiceSection";



export default function BusinessCustomers() {

    return (
        <div className="w-full h-auto text-sky-900 bg-cover bg-center">

            <div className="content">
                <MainSection />
                <ServiceSection />
            </div>
        </div>
    )
}