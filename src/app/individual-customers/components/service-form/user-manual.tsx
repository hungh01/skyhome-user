'use client';

import Image from "next/image";
import { useState } from "react";

interface step {
    title: string;
    description: string;
    imageSrc: string;
}

interface UserManualProps {
    steps: step[];
}

export default function UserManual({ steps }: UserManualProps) {

    const [currentStep, setCurrentStep] = useState(0);
    return (
        <section className="w-[76%] h-screen flex flex-col lg:flex-row items-center justify-center px-4 mx-auto my-auto">
            {/* Left: hướng dẫn các bước */}
            <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-sky-900">Hướng dẫn sử dụng dịch vụ vệ sinh theo giờ</h2>
                <ol className="space-y-4 w-full">
                    {steps.map((step, index) => (
                        <li
                            key={index}
                            className={` rounded-lg px-4 py-2 cursor-pointer ${currentStep === index ? 'bg-gradient-to-r from-sky-700 to-transparent text-white' : 'bg-gradient-to-r from-yellow-200 to-transparent text-sky-900'}`}
                            onClick={() => setCurrentStep(index)}
                        >
                            <span className="font-bold text-lg ">{index + 1}. {step.title}</span>
                            <p className={`text-base ${currentStep === index ? 'text-gray-200' : 'text-gray-800'}`}>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
            {/* Right: mockup điện thoại */}
            <div className="flex-1 flex justify-end items-center">
                <div className="w-[320px] h-[600px]  rounded-3xl flex items-center justify-center bg-[url('/individual-service/phone-background.webp')]  bg-cover bg-center text-center ">
                    <Image src={steps[currentStep].imageSrc} alt={`Step ${currentStep + 1}`} width={320} height={600} className="rounded-3xl" />
                </div>
            </div>
        </section>
    );
}