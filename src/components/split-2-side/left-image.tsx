
import { ReactNode } from "react";

interface LeftImageProps {
    image: ReactNode,
    content: ReactNode,
}


export default function LeftImage({ image, content }: LeftImageProps) {

    return (
        <section id="section2" className="w-full h-screen flex flex-col align-center justify-center items-center text-center px-4">
            <div className="container w-[76%] mx-auto h-full flex flex-col items-center justify-center content pt-16">
                <div className="w-full h-screen flex flex-row items-center justify-center">
                    {/* Image */}
                    <div className="flex-1 flex flex-col justify-center items-start px-8">
                        {image}
                    </div>
                    {/* Content */}
                    <div className="flex-1 flex justify-center items-center px-8">
                        {content}
                    </div>
                </div>
            </div>

        </section>
    );
}