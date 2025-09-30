import NavigationButton from "@/components/button/navigation-button";
import Image from "next/image";

export default function SkyhomeCustomers() {
    return (
        <section className="w-full min-h-screen pt-16 bg-white">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-10 text-sky-900">
                Khách hàng của SkyHome
            </h2>
            <div className="flex flex-col gap-8 w-[94%] md:w-[72%] mx-auto">
                {/* Individual Customer */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="w-full md:w-4/8 h-60 md:h-70 bg-gray-200 flex items-center justify-center rounded-2xl relative">
                        <Image
                            src="/about/individual-customer.webp"
                            alt="Logo Khách hàng 1"
                            fill
                            className="object-cover rounded-2xl"
                            sizes="(max-width: 768px) 100vw, 60vw"
                        />
                    </div>
                    <div className="w-full md:w-4/8 h-auto md:h-70 flex flex-col justify-center items-start mt-4 md:mt-0">
                        <h1 className="text-sky-900 text-2xl md:text-4xl font-bold mb-2">
                            Khách hàng cá nhân
                        </h1>
                        <span className="text-gray-500 text-base md:text-xl block text-left mb-3">
                            👉 Giải pháp vệ sinh cho nhà ở, căn hộ, giúp không gian luôn sạch sẽ và thoải mái.
                        </span>
                        <NavigationButton text="Xem thêm" href="/individual-customers" textsize="text-sm" />
                    </div>
                </div>
                {/* Business Customer */}
                <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8">
                    <div className="w-full md:w-5/8 h-60 md:h-90 bg-gray-200 flex items-center justify-center rounded-2xl relative">
                        <Image
                            src="/about/business-customer.webp"
                            alt="Logo Khách hàng 4"
                            fill
                            className="object-cover rounded-2xl"
                            sizes="(max-width: 768px) 100vw, 60vw"
                        />
                    </div>
                    <div className="w-full md:w-3/8 h-auto md:h-90 flex flex-col justify-center items-end mt-4 md:mt-0">
                        <h1 className="text-sky-900 text-2xl md:text-4xl font-bold mb-2 text-right md:text-right">
                            Khách hàng doanh nghiệp
                        </h1>
                        <span className="text-gray-500 text-base md:text-xl block text-right mb-3">
                            👉 Dịch vụ vệ sinh chuyên nghiệp cho văn phòng, tòa nhà, đảm bảo môi trường làm việc trong lành và gọn gàng.
                        </span>
                        <NavigationButton text="Xem thêm" href="/business-customers" textsize="text-sm" />
                    </div>
                </div>
            </div>
        </section>
    );
}