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
                        <h1 className="text-3xl sm:text-6xl lg:text-8xl font-bold text-sky-900 leading-tight mb-6">
                            {title1}
                            <br />
                            <p className="text-2xl sm:text-8xl lg:text-8xl">
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
                    <div className="w-[60vh] h-[60vh] flex justify-center items-center rounded-full">
                        <div className="absolute w-[60vh] h-[60vh] flex justify-center items-center bg-[url('/individual-service/icon-services/ellipse.webp')]  bg-cover bg-center rounded-full opacity-50"
                        />
                        <Image
                            src={imageSrc}
                            alt="Culture Personality Image"
                            width={484}
                            height={484}
                            className="w-[80%] h-[100%] object-contain z-30"
                        />
                    </div>
                }
            />
        </>

    );
}
