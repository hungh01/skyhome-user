"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useViewportContext } from "@/providers/viewport-provider";

const feedbacks = [
    { id: 1, name: "Xuân Hương", img: "/about/review/customer3.png", text: "Dịch vụ vệ sinh của SkyHome rất chuyên nghiệp. Nhân viên tận tâm, sạch sẽ, gọn gàng.", star: 5 },
    { id: 2, name: "Phúc Tín", img: "/about/review/customer1.png", text: "Công ty tôi đã dùng dịch vụ vệ sinh văn phòng định kỳ. Nhân viên thân thiện, sạch sẽ từng chi tiết.", star: 5 },
    { id: 3, name: "Quỳnh Trang", img: "/about/review/customer2.png", text: "Tôi chọn gói tổng vệ sinh toàn diện. Ngôi nhà sáng sủa, không khí trong lành hơn hẳn.", star: 5 },
    { id: 4, name: "Hải Nam", img: "/about/review/customer4.png", text: "SkyHome làm việc cực kỳ chuyên nghiệp, nhân viên thân thiện và nhiệt tình.", star: 5 },
    { id: 5, name: "Ngọc Lan", img: "/about/review/customer5.jpg", text: "Dịch vụ nhanh chóng, hiệu quả, nhà tôi sạch bong sáng bóng sau vài giờ.Dịch vụ nhanh chóng, hiệu quả, nhà tôi sạch bong sáng bóng sau vài giờ.Dịch vụ nhanh chóng, hiệu quả, nhà tôi sạch bong sáng bóng sau vài giờ.", star: 5 },
    { id: 6, name: "Ngọc Linh", img: "/about/review/customer6.jpg", text: "Dịch vụ nhanh chóng, hiệu quả, nhà tôi sạch bong sáng bóng sau vài giờ.", star: 5 },

];

export default function CustomersFeedback() {
    const { isMobile } = useViewportContext();
    const [index, setIndex] = useState(0);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        cardRefs.current.forEach((card, i) => {
            if (!card) return;

            const offset = (i - index + feedbacks.length) % feedbacks.length;

            let x = 0, scale = 0.8, opacity = 0, zIndex = 0;

            if (offset === 0) {
                // card center
                x = 0;
                scale = 1.1;
                opacity = 1;
                zIndex = 10;
            } else if (offset === 1) {
                // right
                x = 350;
                scale = 0.9;
                opacity = 0.8;
                zIndex = 5;
            } else if (offset === feedbacks.length - 1) {
                // left
                x = -350;
                scale = 0.9;
                opacity = 0.8;
                zIndex = 5;
            } else {
                // các card còn lại ẩn đi
                x = 0;
                scale = 0.7;
                opacity = 0;
                zIndex = 0;
            }

            gsap.to(card, {
                x, scale, opacity, zIndex,
                duration: 0.8,
                ease: "power4.inOut"
            });
        });
    }, [index]);

    const prev = () => setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
    const next = () => setIndex((prev) => (prev + 1) % feedbacks.length);

    return (
        <section className="w-[72%] h-screen py-16 mx-auto ">
            <div className="h-1/3 bg-white rounded-3xl max-w-3xl mx-auto">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-sky-900">
                    Đánh giá của khách hàng
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed opacity-90">
                    “Mỗi ý kiến, mỗi chia sẻ từ khách hàng đều là nguồn động lực lớn giúp Skyhome không ngừng hoàn thiện và phát triển.
                    Chúng tôi tin rằng, sự hài lòng và trải nghiệm thực tế của khách hàng chính là thước đo rõ ràng nhất cho chất lượng dịch vụ và sản phẩm.
                    Skyhome luôn trân trọng lắng nghe từng phản hồi để mang đến không gian sống tiện nghi, ấm áp và phù hợp nhất.
                    Cảm ơn khách hàng đã đồng hành và chia sẻ chân thành để Skyhome ngày càng tốt hơn.”
                </p>
            </div>

            <div className="relative h-2/3 flex items-center justify-center pt-20">
                {/* Nút trái */}
                {isMobile && (
                    <button
                        onClick={prev}
                        className="absolute -left-5 top-1/2 -translate-y-1/2 bg-sky-200 text-black px-4 py-2 rounded-full shadow-md z-20"
                    >
                        ◀
                    </button>
                )}

                <div className="relative w-full h-[50vh] flex justify-center items-center overflow-hidden">
                    {feedbacks.map((fb, i) => (
                        <div
                            key={fb.id}
                            ref={(el) => {
                                if (el) cardRefs.current[i] = el;
                            }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-t-3xl rounded-bl-2xl shadow-[6px_6px_10px_10px_rgba(0,0,0,0.1)] p-6 w-60 sm:w-80 h-auto min-h-72 flex flex-col justify-between"
                            onClick={() => {
                                // Tính offset của card này so với index trung tâm
                                const offset = (i - index + feedbacks.length) % feedbacks.length;
                                if (offset === feedbacks.length - 1) prev();
                                if (offset === 1) next();
                            }}
                        >
                            <div className="flex items-center mb-2">
                                <svg className="w-8 h-8 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <text x="2" y="20" fontSize="20" fontWeight="bold">“</text>
                                </svg>
                                <div className="flex">
                                    {[...Array(fb.star)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-base text-gray-700 mb-4">&quot;{fb.text}&quot;</p>
                            <div className="flex items-center mt-2">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-2 relative overflow-hidden">
                                    <Image src={fb.img} alt={fb.name} fill style={{ objectFit: "cover" }} />
                                </div>
                                <span className="font-bold">{fb.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Nút phải */}
                {isMobile && (
                    <button
                        onClick={next}
                        className="absolute -right-5 top-1/2 -translate-y-1/2 bg-sky-200 text-black px-4 py-2 rounded-full shadow-md z-20"
                    >
                        ▶
                    </button>
                )}
            </div>
        </section>
    );
}
