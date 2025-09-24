import Image from "next/image";
import { Fragment } from "react";

interface WhyChooseProps {
    items: Array<{ title: string; description: string; image: string }>;
}

export default function WorkFlow({ items }: WhyChooseProps) {
    return (
        <section className="w-full py-10 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-sky-900">
                Quy trình dịch vụ SkyHome
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full md:w-[72%] mx-auto">
                {items.map((item, idx) =>
                    idx % 2 === 0 ? (
                        <Fragment key={idx}>
                            <div className="bg-yellow-300 rounded-2xl flex flex-col justify-center items-center h-40 md:h-48 p-6 md:p-8">
                                <Image
                                    src={item.image}
                                    width={128}
                                    height={192}
                                    alt={item.title}
                                    className="w-24 h-36 md:w-full md:h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start h-40 md:h-48 p-6 md:p-8">
                                <h3 className="font-bold text-base md:text-lg mb-2">{item.title}</h3>
                                <p className="text-xs md:text-sm text-gray-700">{item.description}</p>
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment key={idx}>
                            <div className="flex flex-col justify-center items-start h-40 md:h-48 p-6 md:p-8">
                                <h3 className="font-bold text-base md:text-lg mb-2">{item.title}</h3>
                                <p className="text-xs md:text-sm text-gray-700">{item.description}</p>
                            </div>
                            <div className="bg-yellow-300 rounded-2xl flex flex-col justify-center items-center h-40 md:h-48 p-6 md:p-8">
                                <Image
                                    src={item.image}
                                    width={128}
                                    height={192}
                                    alt={item.title}
                                    className="w-24 h-36 md:w-full md:h-full object-cover rounded-2xl"
                                />
                            </div>
                        </Fragment>
                    )
                )}
            </div>
        </section>
    );
}