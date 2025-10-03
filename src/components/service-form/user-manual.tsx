'use client';

import { useViewportContext } from "@/providers/viewport-provider";
import Image from "next/image";
import { useState } from "react";

interface step {
    title: string;
    description: string;
    imageSrc: string;
}

interface UserManualProps {
    serviceName: string
    steps: step[];
}

export default function UserManual({ serviceName, steps }: UserManualProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const { isMobile } = useViewportContext();
    return (
        <section className={`${isMobile ? 'w-full' : 'w-[74%]'} min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 mx-auto py-8`}>
            {/* Right: mockup điện thoại */}
            <div className="flex w-full lg:w-2/5 justify-center lg:justify-start items-end mb-8 lg:mb-0">
                <div className="w-[260px] sm:w-[340px] h-[480px] sm:h-full rounded-3xl flex items-center justify-center ">
                    <Image
                        src={steps[currentStep].imageSrc}
                        alt={`Step ${currentStep + 1}`}
                        width={2060}
                        height={1180}
                        className="rounded-3xl object-cover"
                    // style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>
            {/* Left: hướng dẫn các bước */}
            <div className="w-full lg:w-3/5 flex flex-col justify-center items-start">
                <h2 className="text-2xl lg:text-5xl font-bold mb-6 text-sky-900 text-center lg:text-left">
                    Hướng dẫn sử dụng dịch vụ
                    <br />

                    <p className="pt-2 text-4xl lg:text-[58px]">{serviceName}</p>
                </h2>
                <ol className="space-y-4 w-full">
                    {steps.map((step, index) => (
                        <li
                            key={index}
                            className={`rounded-lg px-4 py-2 cursor-pointer transition-colors duration-200 ${currentStep === index ? 'bg-gradient-to-r from-sky-700 to-transparent text-white' : 'bg-gradient-to-r from-yellow-200 to-transparent text-sky-900'}`}
                            onClick={() => setCurrentStep(index)}
                        >
                            <span className="font-bold text-2xl">{index + 1}. {step.title}</span>
                            <p className={`text-xl ${currentStep === index ? 'text-gray-200' : 'text-gray-800'}`}>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}