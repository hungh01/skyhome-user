'use client';

import NavigationButton from "@/components/button/navigation-button";
import Image from "next/image";

interface MainSectionProps {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
}

export default function MainSection({ title1, title2, description, buttonText, buttonLink, imageSrc }: MainSectionProps) {


    return (
        <section className="w-full min-h-screen relative overflow-hidden pt-3 bg-white align-center flex items-center">
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 pt-6 lg:py-0">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left mb-8 lg:mb-0 pt-14">
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-sky-900 leading-tight mb-6">
                            {title1}
                            <br />
                            {title2}
                        </h1>
                        <p className="text-base sm:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            {description}
                        </p>
                        <NavigationButton text={buttonText} href={buttonLink} textsize="text-xl" />
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="flex-1 flex justify-center items-center mb-0 lg:mb-0">
                        <div className="w-64 h-64 sm:w-96 sm:h-96 flex items-center justify-center">
                            <Image
                                src={imageSrc}
                                alt="Culture Personality Image"
                                width={384}
                                height={384}
                                className="w-full h-full object-contain z-30"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
