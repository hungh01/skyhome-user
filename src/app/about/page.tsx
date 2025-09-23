import Image from "next/image";
import CultureSection from "./components/culture";
import CustomersFeedback from "./components/feedback";
import MainSection from "./components/main-section";
import SkyhomeCustomers from "./components/skyhome-customers";
import StorySkyhome from "./components/story-skyhome";

export default function AboutPage() {
    return (
        <>
            <MainSection />
            <StorySkyhome />
            <SkyhomeCustomers />
            <div className="relative">
                <div className="absolute inset-0 -z-10 opacity-20">
                    <Image
                        id="bgImage"
                        src="/about/trongdongcomap.png"
                        alt="Background"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
                <CultureSection />
                <CustomersFeedback />
            </div>
        </>
    )
}