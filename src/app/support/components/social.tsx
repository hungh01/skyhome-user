import Image from "next/image";
import Link from "next/link";

export default function ContactChannels() {
    const channels = [
        {
            id: 1,
            icon: <Image src="/icons/social-media/without-bg/phone.png" alt="YouTube" width={100} height={100} className="w-6 h-6 text-sky-900" />,
            title: "Hotline",
            value: "096 292 7273",
            link: "tel:0962927273"
        },
        {
            id: 2,
            icon: <Image src="/icons/social-media/without-bg/email.png" alt="E-mail" width={100} height={100} className="w-6 h-6 text-sky-900" />,
            title: "E-mail",
            value: "skyhomesocial@gmail.com",
            link: "mailto:cskh@skyhomevietnam.com.vn"
        },
        {
            id: 3,
            icon: <Image src="/icons/social-media/without-bg/facebook.svg" alt="Facebook" width={100} height={100} className="w-6 h-6 text-sky-900" />,
            title: "Facebook",
            value: "SkyHome",
            link: "https://www.facebook.com/skyhomevietnam"
        },
        {
            id: 4,
            icon: <Image src="/icons/social-media/without-bg/tiktok.png" alt="TikTok" width={100} height={100} className="w-6 h-6 text-sky-900" />,
            title: "TikTok",
            value: "SkyHome Service",
            link: "https://www.tiktok.com/@skyhomevietnam"
        },
        {
            id: 5,
            icon: <Image src="/icons/social-media/without-bg/youtube.png" alt="YouTube" width={100} height={100} className="w-6 h-6 text-sky-900" />,
            title: "YouTube",
            value: "SkyHome",
            link: "https://www.youtube.com/@skyhomevietnam"
        },
    ];

    return (
        <section className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6 text-center">
            {/* Heading */}
            <h2 className="text-lg sm:text-xl md:text-4xl font-semibold text-sky-900 mb-8 sm:mb-10">
                Kênh truyền thông và Hotline chăm sóc khách hàng
            </h2>

            {/* Channels */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
                {channels.map((ch) => (
                    <Link key={ch.id} className="flex flex-col items-center text-center" href={ch.link}>
                        {/* Icon circle */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FBBD00] flex items-center justify-center mb-3">
                            {ch.icon}
                        </div>
                        <p className="font-bold text-sky-900 text-base sm:text-lg">{ch.title}</p>
                        <p className="text-sm sm:text-base text-gray-700 break-words">{ch.value}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
