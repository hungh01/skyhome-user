import Image from "next/image";
import { Fragment } from "react";


interface WhyChooseProps {
    items: Array<{ title: string; description: string; image: string }>;
}

export default function WorkFlow({
    items,
}: WhyChooseProps) {
    return (
        <section className="w-full py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-900">
                Quy trình dịch vụ SkyHome
            </h2>
            <div className="grid grid-cols-2 gap-8 w-[72%] mx-auto">
                {items.map((item, idx) =>
                    idx % 2 === 0 ? (
                        <Fragment key={idx}>
                            <div className="bg-yellow-300 rounded-2xl flex flex-col justify-center items-center h-48 p-8">
                                <Image src={item.image} width={128} height={192} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
                            </div>
                            <div className="flex flex-col justify-center items-start h-48 p-8">
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment key={idx}>
                            <div className="flex flex-col justify-center items-start h-48 p-8">
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                            <div className="bg-yellow-300 rounded-2xl flex flex-col justify-center items-center h-48 p-8">
                                <Image src={item.image} width={128} height={192} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
                            </div>
                        </Fragment>
                    )
                )}
            </div>
        </section>
    );
}