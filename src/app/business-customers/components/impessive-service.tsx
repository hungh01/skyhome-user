"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const items = [
    {
        id: 1,
        title: "Hệ thống quản lý tích hợp",
        content:
            "SkyHome sử dụng hệ thống quản lý tích hợp giúp đồng bộ hóa mọi quy trình vận hành, từ tiếp nhận yêu cầu khách hàng, phân công công việc cho nhân viên đến kiểm soát chất lượng dịch vụ. Nhờ đó, mọi thông tin đều được cập nhật theo thời gian thực, giảm thiểu sai sót và nâng cao hiệu quả quản lý. ",
        image: "/business-service/icons/quanly.webp",
    },
    {
        id: 2,
        title: "Chất lượng đào tạo",
        content:
            "Đội ngũ nhân viên SkyHome được đào tạo bài bản, thường xuyên cập nhật kiến thức và kỹ năng mới nhất trong lĩnh vực vệ sinh công nghiệp. Chúng tôi xây dựng chương trình đào tạo chuyên sâu, kết hợp giữa lý thuyết và thực hành, giúp nhân viên xử lý linh hoạt mọi tình huống thực tế.",
        image: "/business-service/icons/daotao.webp",
    },
    {
        id: 3,
        title: "Công nghệ hiện đại",
        content:
            "SkyHome ứng dụng các công nghệ tiên tiến trong quản lý và vận hành dịch vụ, như phần mềm quản lý thông minh, hệ thống báo cáo tự động và các thiết bị hỗ trợ làm sạch hiện đại. ",
        image: "/business-service/icons/congnghe.webp",
    },
    {
        id: 4,
        title: "Hóa chất tiêu chuẩn",
        content:
            "Chúng tôi sử dụng hóa chất đạt chuẩn an toàn, thân thiện với môi trường và được kiểm định bởi các cơ quan chức năng. SkyHome cam kết không sử dụng các loại hóa chất độc hại, gây ảnh hưởng đến sức khỏe người dùng và môi trường xung quanh.",
        image: "/business-service/icons/hoachat.webp",
    },
    {
        id: 5,
        title: "Thiết bị hiện đại",
        content:
            "SkyHome đầu tư vào các thiết bị làm sạch hiện đại, giúp nâng cao hiệu quả làm việc và tiết kiệm thời gian cho khách hàng. Các thiết bị như máy hút bụi công nghiệp, máy chà sàn, máy phun rửa áp lực cao... đều được nhập khẩu từ các thương hiệu uy tín, đảm bảo độ bền và hiệu suất vượt trội.",
        image: "/business-service/icons/thietbi.webp",
    },
];
export default function ImpressiveService() {
    const [active, setActive] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);

    const cardRefs = useRef<HTMLDivElement[]>([]);
    const imageRefs = useRef<HTMLDivElement[]>([]);
    const textRefs = useRef<HTMLParagraphElement[]>([]);
    const timelines = useRef<gsap.core.Timeline[]>([]);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // < lg breakpoint
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // GSAP animation only if not mobile
    useEffect(() => {
        if (isMobile) return; // bỏ animation trên mobile

        cardRefs.current.forEach((card, i) => {
            if (!card) return;

            if (typeof timelines.current[i] !== "undefined") {
                timelines.current[i]?.kill();
            }

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            timelines.current[i] = tl;

            if (active === i) {
                tl.to(card, { flex: 3, duration: 0.8, ease: "power4.inOut" }, 0)
                    .set([imageRefs.current[i], textRefs.current[i]], {
                        pointerEvents: "auto",
                    })
                    .fromTo(
                        imageRefs.current[i],
                        { opacity: 0, x: -20 },
                        { opacity: 1, x: 0, duration: 0.5 },
                        "-=0.3"
                    )
                    .fromTo(
                        textRefs.current[i],
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5 },
                        "-=0.2"
                    );
            } else {
                tl.to(card, { flex: 1, duration: 0.8, ease: "power4.inOut" }, 0)
                    .to(
                        imageRefs.current[i],
                        { opacity: 0, x: -20, duration: 0.3, pointerEvents: "none" },
                        0
                    )
                    .to(
                        textRefs.current[i],
                        { opacity: 0, y: 20, duration: 0.3, pointerEvents: "none" },
                        0
                    );
            }
        });
    }, [active, isMobile]);

    return (
        <section className="w-[90%] lg:w-[76%] min-h-screen mx-auto pt-16 flex flex-col items-center">
            {/* Heading */}
            <div className="h-auto lg:h-1/3 mx-auto flex items-center justify-center z-10 mb-6">
                <h1 className="text-3xl md:text-5xl font-bold text-center text-sky-900">
                    Ưu điểm dịch vụ SkyHome
                </h1>
            </div>

            {/* Cards */}
            {isMobile ? (
                // 👉 Mobile: show all cards expanded
                <div className="flex flex-col gap-4 w-full">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#FDDB00] rounded-lg p-4 flex flex-col"
                        >
                            <h3 className="font-bold text-2xl text-sky-900 mb-2">
                                {item.title}
                            </h3>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={200}
                                className="rounded-lg mb-2 w-2/3 mx-auto object-contain"
                            />
                            <p className="text-lg text-gray-800">{item.content}</p>
                        </div>
                    ))}
                </div>
            ) : (
                // 👉 Desktop: animated cards
                <div className="flex w-full mx-auto h-[600px] gap-2">
                    {items.map((item, i) => (
                        <div
                            key={item.id}
                            ref={(el) => {
                                if (el) cardRefs.current[i] = el;
                            }}
                            onClick={() => setActive(i)}
                            className={`relative flex flex-col bg-[#FDDB00] rounded-lg p-4 cursor-pointer h-full
                ${active === i ? "items-start text-left" : "justify-center items-center"}
              `}
                            style={{ flex: i === 0 ? 3 : 1 }}
                        >
                            <h3 className="font-bold text-3xl text-sky-900 z-10">
                                {item.title}
                            </h3>

                            <div className="absolute inset-0 top-20 left-0 right-0 px-4 overflow-visible">
                                <div
                                    ref={(el) => {
                                        if (el) imageRefs.current[i] = el;
                                    }}
                                    className="opacity-0 pointer-events-none"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={200}
                                        className="rounded-lg mb-2 w-1/2 mx-auto object-cover"
                                    />
                                </div>

                                <p
                                    ref={(el) => {
                                        if (el) textRefs.current[i] = el;
                                    }}
                                    className="text-xl text-gray-800 opacity-0 pointer-events-none"
                                >
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
