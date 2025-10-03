
'use client';
import Image from "next/image";
import ContactChannels from "./components/social";
import SafetyPolicyCommunications from "./components/safety-policy-communications";
import Policy from "./components/policy";
import { useEffect } from "react";
import { initParallaxBg } from "../animations/parallax-bg";
import CustomerCare from "./components/customer-care";
import WhyChooseOnSupport from "./components/why-choose";


export default function BusinessCustomers() {
    useEffect(() => {
        const anim = initParallaxBg("#bgImage", ".content");
        return () => {
            anim.kill(); // cleanup khi unmount
        };
    }, []);

    return (
        <div className="w-full h-min-screen">
            {/* Background cố định */}
            <div className="fixed inset-0 -z-10">
                <Image
                    id="bgImage"
                    src="/home-page/sky.webp"
                    alt="Background"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <div className="content z-10 md:pt-0 pt-20">
                <Policy />
                <WhyChooseOnSupport />
                {/* <CustomerCare /> */}
                <ContactChannels />
                <SafetyPolicyCommunications />
            </div>
        </div>
    )
}