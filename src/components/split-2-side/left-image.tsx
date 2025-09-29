
import { ReactNode } from "react";

interface LeftImageProps {
    image: ReactNode,
    content: ReactNode,
}


export default function LeftImage({ image, content }: LeftImageProps) {

    return (
        <section className="w-full min-h-screen relative overflow-hidden pt-3 bg-white align-center flex items-center">
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 pt-6 lg:py-0">
                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center mb-0 lg:mb-0">
                        <div className="w-64 h-64 sm:w-96 sm:h-96 flex items-center justify-center">
                            {image}
                        </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left mb-8 lg:mb-0 pt-14">
                        {content}
                    </div>
                </div>
            </div>
        </section>
    );
}