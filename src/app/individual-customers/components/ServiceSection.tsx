'use client';

import Image from "next/image";
import FlowerMenu from "./FlowerMenu";

const DichVuKhacIcon = () => (
    <Image src="/individual-service/dichvukhac.png" alt="Dich vu khac" width={500} height={500} />
);
const MayGiatIcon = () => (
    <Image src="/individual-service/vsmaygiat.png" alt="May giat" width={500} height={500} />
);

const MayLanhIcon = () => (
    <Image src="/individual-service/vsmaylanh.png" alt="May lanh" width={500} height={500} />
);
const MayNongLanhIcon = () => (
    <Image src="/individual-service/vsmaynonglanh.png" alt="May nong lanh" width={500} height={500} />
);

const TongVeSinhIcon = () => (
    <Image src="/individual-service/tongvs.png" alt="Tong ve sinh" width={500} height={500} />
);
const VeSinhTheoGioIcon = () => (
    <Image src="/individual-service/vstheogio.png" alt="Ve sinh theo gio" width={500} height={500} />
);

export default function ServiceSection() {
    return (
        <section
            className="mt-5 mb-5 w-full snap-start h-screen flex justify-center items-center"

        >

            <div style={{
                backgroundImage: "url('/individual-service/bg/round.webp')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
            }} className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] opacity-60 -z-10">

            </div>
            <div className="flex justify-center items-center h-full">
                <FlowerMenu
                    animationDuration={2000}
                    backgroundColor="transparent"
                    iconColor=""
                    menuItems={[
                        {
                            href: '/individual-customers/washing-machine-cleaning',
                            icon: MayGiatIcon,
                        },
                        {
                            href: '/individual-customers/others',
                            icon: DichVuKhacIcon,
                        },
                        {
                            href: '/individual-customers/air-conditioning-cleaning',
                            icon: MayLanhIcon,
                        },
                        {
                            href: '/individual-customers/water-heater-cleaning',
                            icon: MayNongLanhIcon,
                        },
                        {
                            href: '/individual-customers/hourly-cleaning',
                            icon: VeSinhTheoGioIcon,
                        },
                        {
                            href: '/individual-customers/total-cleaning',
                            icon: TongVeSinhIcon,
                        },
                    ]}
                    togglerSize={100}
                />
            </div>
        </section>
    );
}