'use client';

import NavigationButton from "@/components/button/navigation-button";
import Image from "next/image";
import RightImage from "../split-2-side/right-image";

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
        <>
            <RightImage
                content={
                    <>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-sky-900 leading-tight mb-6">
                            {title1}
                            <br />
                            <p className="text-2xl sm:text-4xl lg:text-5xl">
                                {title2}
                            </p>
                        </h1>
                        <p className="text-base sm:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
                            {description}
                        </p>
                        <NavigationButton text={buttonText} href={buttonLink} textsize="text-xl" />
                    </>
                }
                image={
                    <Image
                        src={imageSrc}
                        alt="Culture Personality Image"
                        width={384}
                        height={384}
                        className="w-full h-full object-contain z-30"
                    />
                }
            />
        </>

    );
}
