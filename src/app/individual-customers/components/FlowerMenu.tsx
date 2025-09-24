import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useViewportContext } from "@/providers/viewport-provider";


type MenuItem = {
    icon: React.ComponentType<{ className?: string; width?: number; height?: number }>
    href: string;

};

type FlowerMenuProps = {
    menuItems: MenuItem[];
    iconColor?: string;
    backgroundColor?: string;
    animationDuration?: number;
    togglerSize?: number;
};

const useResponsiveEllipse = () => {
    const [ellipse, setEllipse] = useState({ a: 500, b: 300, size: 120 });

    useEffect(() => {
        const updateEllipse = () => {
            const w = window.innerWidth;
            if (w < 640) { // phone
                setEllipse({ a: 120, b: 80, size: 48 });
            } else if (w < 1024) { // tablet
                setEllipse({ a: 220, b: 140, size: 64 });
            } else { // desktop
                setEllipse({ a: 500, b: 300, size: 120 });
            }
        };
        updateEllipse();
        window.addEventListener("resize", updateEllipse);
        return () => window.removeEventListener("resize", updateEllipse);
    }, []);
    return ellipse;
};

const MenuToggler = ({
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
    <div
        className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen((prev: boolean) => !prev)}
    >
        <span className="text-xl sm:text-2xl md:text-4xl font-bold cursor-pointer text-sky-900">
            Dịch vụ của
            <br />
            SkyHome
        </span>
    </div>
);

const MenuItem = ({
    item,
    index,
    isOpen,
    iconColor,
    backgroundColor,
    animationDuration,
    itemCount,
    itemSize,
    iconSize,
    a,
    b,
}: {
    item: MenuItem;
    index: number;
    isOpen: boolean;
    iconColor: string;
    backgroundColor: string;
    animationDuration: number;
    itemCount: number;
    itemSize: number;
    iconSize: number;
    a: number;
    b: number;
}) => {
    const Icon = item.icon;
    const angle = (360 / itemCount) * index;
    const rad = (angle * Math.PI) / 180;
    const x = a * Math.cos(rad);
    const y = b * Math.sin(rad);
    return (
        <li
            className={`absolute transition-all ${isOpen ? "opacity-100" : "opacity-0"}`}
            style={{
                width: itemSize,
                height: itemSize,
                left: `calc(50% - ${itemSize / 2}px)`,
                top: `calc(50% - ${itemSize / 2}px)`,
                transform: isOpen
                    ? `translate(${x}px, ${y}px) rotate(${angle}deg)`
                    : "none",
                transitionDuration: `${animationDuration}ms`,
            }}
        >
            <Link
                href={item.href}
                // target="_blank"
                rel="noopener noreferrer"
                className={`flex h-full w-full items-center justify-center rounded-full transition-all duration-100 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
                    } group hover:scale-125 hover:opacity-100`}
                style={{
                    backgroundColor,
                    color: iconColor,
                    transform: `rotate(-${angle}deg)`,
                    transitionDuration: `${500}ms`,
                }}
            >
                <Icon
                    className="transition-transform duration-200 group-hover:scale-125"
                    width={iconSize}
                    height={iconSize}
                />
            </Link>
        </li>
    );
};

export default function FlowerMenu({
    menuItems,
    iconColor = "white",
    backgroundColor = "rgba(255, 255, 255, 0.2)",
    animationDuration = 500,
}: FlowerMenuProps) {
    const { width } = useViewportContext();
    const [isOpen, setIsOpen] = useState(false);
    const itemCount = menuItems.length;
    const { a, b, size } = useResponsiveEllipse();
    const itemSize = size + (width < 640 ? 20 : 50);
    const iconSize = Math.max(24, Math.floor(itemSize * 2));
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ref = menuRef.current;
        if (!ref) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setIsOpen(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, []);


    return (
        <nav
            ref={menuRef}
            className="relative min-h-64"
            style={{
                width: a * 2,
                height: b * 2,
                maxWidth: "100vw",
                maxHeight: "100vw",
            }}
        >
            <MenuToggler isOpen={isOpen} setIsOpen={setIsOpen} />
            <ul className="absolute inset-0 m-0 h-full w-full list-none p-0">
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        index={index}
                        isOpen={isOpen}
                        iconColor={iconColor}
                        backgroundColor={backgroundColor}
                        animationDuration={animationDuration}
                        itemCount={itemCount}
                        itemSize={itemSize}
                        iconSize={iconSize}
                        a={a - (width > 1000 ? 70 : -10)}
                        b={b - (width > 1000 ? 70 : -40)}
                    />
                ))}
            </ul>
        </nav>
    );
}
