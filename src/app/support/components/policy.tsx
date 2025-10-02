'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Policy() {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!trackRef.current) return;

        const track = trackRef.current;

        // Lặp vô hạn với GSAP timeline
        gsap.to(track, {
            xPercent: -50,   // kéo hết 1 nửa (vì ta nhân đôi ảnh)
            duration: 20,    // tốc độ cuộn
            repeat: -1,      // lặp vô hạn
            ease: "linear",  // tốc độ đều
        });
    }, []);
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center mx-auto py-8 px-4">
            <div className="h-1/2 md:w-[70%] md:pt-20 flex flex-col justify-center items-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 text-sky-900">
                    Điều khoản và chính sách bảo mật của khách hàng
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-800 text-center leading-relaxed">
                    Khi sử dụng dịch vụ vệ sinh nhà cửa của Skyhome, khách hàng đồng ý với các điều khoản sau: Skyhome cam kết cung cấp dịch vụ đúng chất lượng, đúng thời gian đã thỏa thuận. Khách hàng có trách nhiệm cung cấp thông tin chính xác về địa chỉ, thời gian và yêu cầu công việc. Mọi thay đổi hoặc hủy dịch vụ cần thông báo trước ít nhất 24 giờ.

                </p>
                <Link className="block mt-4" href="/privacy-policy">
                    <p className="text-sky-600 hover:underline">Xem đầy đủ chính sách bảo mật tại đây &gt;&gt;&gt;&gt; </p>
                </Link>
            </div>

            {/* Nửa dưới: ảnh chạy ngang */}
            <div className="h-1/2 w-screen overflow-hidden relative align-center items-center">
                <div ref={trackRef} className="flex w-[200%] absolute left-0 bottom-0 ">
                    {/* Nhân đôi ảnh để tạo vòng lặp */}
                    <Image src="/home-page/scroll-employee.webp" alt="slide1" width={2920} height={600} />
                    <Image src="/home-page/scroll-employee.webp" alt="slide2" width={2920} height={600} />
                </div>
            </div>
        </section>
    );
}