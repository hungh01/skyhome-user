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
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-900">Tại sao nên sử dụng SkyHome</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[72%] mx-auto">
                {items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white rounded-xl shadow p-6">
                        <div className="bg-gradient-to-br from-yellow-300 to-yellow-200 rounded-lg w-14 h-14 flex items-center justify-center shrink-0">
                            <div className="w-[50px] h-[50px] relative">
                                <Image src={item.icon} alt={item.title} fill style={{ objectFit: "contain" }} />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-700">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
