
import { ReactNode } from "react";

interface LeftImageProps {
    image: ReactNode,
    content: ReactNode,
    title?: string
}


export default function LeftImage({ image, content, title }: LeftImageProps) {

    return (
        <section className="w-full h-screen relative overflow-hidden  align-center flex items-center">
            <div className="relative z-20 md:w-[76%] mx-auto px-4 sm:px-6 lg:px-8 h-full md:pt-20">
                {title && (
                    <h2 className="text-3xl md:text-6xl font-bold text-center mb-8 md:mb-0 text-sky-900">
                        {title}
                    </h2>
                )}
                <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 pt-6 lg:py-0">

                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center mb-0 lg:mb-0">
                        <div className="w-64 h-80 sm:w-full sm:h-auto flex items-center justify-center">
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