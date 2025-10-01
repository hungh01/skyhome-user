import Image from "next/image";

export default function CustomerCare() {
    return (
        <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4 py-8">
            <h1 className="text-4xl font-bold text-sky-900 mb-8">Nguyên tắc chăm sóc khách hàng</h1>
            <div className="md:w-[76%]">
                <Image
                    src="/about/individual-customer.webp"
                    alt="SkyHome"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover rounded-2xl"
                />
            </div>
        </section>
    )
};