import { WorkingStep } from "@/interfaces/services/working-step.interface";
import Image from "next/image";

interface WhyChooseProps {
    items: WorkingStep[];
    title?: string;
}

export default function WorkFlow({ items, title }: WhyChooseProps) {
    return (
        <section className="w-full py-10">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-10 text-sky-900">
                {title || "Các bước thực hiện dịch vụ"}
            </h2>
            <div className="flex flex-col gap-8 w-full md:w-[72%] mx-auto">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`relative flex flex-col md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }  rounded-2xl shadow-sm overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-[#aad6f2] rounded-2xl opacity-10 pointer-events-none" />
                        <div className="flex-shrink-0 flex justify-center items-center p-2 md:p-4 w-full md:w-1/2">
                            <Image
                                src={item.image}
                                width={2028}
                                height={1920}
                                alt={item.title}
                                className=" h-auto w-48 md:w-9/10 object-cover rounded-xl "
                            />
                        </div>
                        <div className="flex flex-col justify-center p-4 md:p-8 w-full md:w-1/2">
                            <h3 className="font-bold text-2xl md:text-4xl mb-2">{item.title}</h3>
                            <p className={`text-base md:text-xl text-gray-700`}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
