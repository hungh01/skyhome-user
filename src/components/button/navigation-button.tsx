"use client";

import Image from "next/image";

interface NavigationButtonProps {
    text: string | React.ReactNode;
    href?: string;
    textsize?: string;
}

export default function NavigationButton({ text, href = "#", textsize = "text-sm" }: NavigationButtonProps) {
    return (
        <a
            className="group relative inline-flex items-center overflow-hidden rounded-3xl border border-current px-8 py-3 bg-gradient-to-r from-sky-800 to-sky-500 text-white focus:ring-3 focus:outline-hidden"
            href={href}
        >
            <span className="bg-transparent absolute -end-full transition-all group-hover:end-4">
                <Image
                    src="/icons/others/arrow-right.svg"
                    alt="Right arrow"
                    width={20}
                    height={20}
                    className="filter brightness-0 invert "
                />
            </span>

            <span className={`${textsize} font-medium transition-all group-hover:me-4`}>
                {text}
            </span>
        </a>
    );
}
