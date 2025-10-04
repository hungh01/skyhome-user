import Image from "next/image";
import Link from "next/link";

export default function Promotion() {
    return (
        <section className="w-full h-auto flex flex-col items-center justify-center py-2 md:py-12">
            <h2 className="text-3xl md:text-6xl font-bold text-center mb-10 text-sky-900">
                Ưu đãi hấp dẫn
            </h2>
            <div className="w-[80%] mx-auto">
                {/* Box vàng lớn */}
                <div className=" h-auto bg-yellow-300 rounded-2xl flex items-center justify-center mb-8">
                    {/* Icon hoặc hình ảnh ưu đãi */}
                    <Image
                        src="/news/promotion.webp"
                        alt="Ưu đãi"
                        width={2080}
                        height={1120}
                        className="w-auto h-auto  rounded-2xl"
                    />
                </div>
                {/* Nội dung dưới box */}
                <div className="flex flex-col md:flex-row items-end justify-between mt-2">
                    <div>
                        <h3 className="text-2xl font-bold text-sky-900 mb-1">Ưu đãi đặc biệt</h3>
                        <p className="text-base text-gray-800">
                            Giảm ngay 10% cho lần đặt dịch vụ đầu tiên của bạn với mã
                            &quot;WELCOME10&quot;. Nhanh tay lên, ưu đãi có hạn!
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="mt-6 md:mt-0 inline-flex items-center bg-yellow-300 hover:bg-yellow-400 text-sky-900 font-semibold px-6 py-3 rounded-full shadow transition-all text-lg"
                    >
                        Xem thêm
                        <span className="ml-2 text-xl">&#8594;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}