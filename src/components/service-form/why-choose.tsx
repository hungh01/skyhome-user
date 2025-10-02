import Image from "next/image";


interface Feature {
    title: string;
    description: string;
    icon: string; // URL or path to the icon image
}

interface WhyChooseProps {
    items: Feature[];
}

export default function WhyChoose({ items }: WhyChooseProps) {
    return (
        <section className="w-full py-16 ">
            <h2 className="text-2xl md:text-6xl font-bold text-center mb-10 text-sky-900">Tại sao nên sử dụng SkyHome</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-[72%] mx-auto">
                {items.map((item, i) => (
                    <div key={i} className="relative h-full">
                        <div className="absolute inset-0 bg-[#aad6f2] rounded-xl opacity-20 pointer-events-none" />
                        <div className="flex items-start gap-4 rounded-xl shadow md:p-6 p-2 relative h-full">
                            <div className="bg-gradient-to-br from-yellow-300 to-yellow-200 rounded-lg w-7 h-7 md:w-14 md:h-14 flex items-center justify-center shrink-0">
                                <div className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] relative">
                                    <Image src={item.icon} alt={item.title} fill style={{ objectFit: "contain" }} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-base md:text-3xl mb-2 text-sky-900">{item.title}</h3>
                                <p className="text-sm md:text-xl text-gray-700">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
