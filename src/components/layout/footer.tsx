import Image from "next/image";
import DownloadButton from "@/components/button/download-button";


export function Footer() {
    return (
        <footer className="bg-white snap-start h-auto w-full">
            <div className="bg-gradient-to-t from-[#FDDB00] to-white py-8 md:py-12 text-sky-900">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="text-left">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">
                            Đăng ký ngay hôm nay
                        </h2>
                        <p className="text-xs md:text-base mb-6 md:mb-8">
                            Để trải nghiệm những dịch vụ tốt nhất của SkyHome
                        </p>
                        <DownloadButton text="Trải nghiệm dịch vụ" href="/" />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">

                    {/* Hỗ trợ */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Hỗ trợ</h3>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                            <li>Hotline: 096 292 7273</li>
                            <li>Email: cskh@skyhome.net.vn</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Điều khoản sử dụng</li>
                        </ul>
                    </div>

                    {/* Công ty */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Công ty</h3>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                            <li>Về chúng tôi</li>
                            <li>Tin tức</li>
                            <li>Tuyển dụng</li>
                        </ul>
                    </div>

                    {/* KH cá nhân */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">KH cá nhân</h3>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                            <li>Vệ sinh theo giờ</li>
                            <li>Tổng vệ sinh</li>
                            <li>Vệ sinh máy lạnh</li>
                            <li>Vệ sinh điều hoà</li>
                            <li>Vệ sinh máy nóng lạnh</li>
                            <li>Vệ sinh máy năng lượng mặt trời</li>
                        </ul>
                    </div>

                    {/* KH doanh nghiệp */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">KH doanh nghiệp</h3>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                            <li>Vệ sinh công nghiệp</li>
                            <li>Vệ sinh văn phòng</li>
                            <li>Vệ sinh homestay</li>
                            <li>Vệ sinh khách sạn</li>
                        </ul>
                    </div>

                    {/* Cộng tác viên */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Cộng tác viên</h3>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                            <li>Hướng dẫn đăng ký</li>
                            <li>Chương trình đào tạo</li>
                            <li>Cộng đồng SkyHome</li>
                        </ul>
                    </div>
                </div>

                {/* Logo and Social Media */}
                <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
                        <Image src="/logo-company.svg" alt="SkyHome Logo" width={100} height={34} />
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-xs md:text-sm text-gray-600 mb-1">Theo dõi các nền tảng</p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-white ">
                                <Image src="/icons/social-media/fb-icon.png" alt="Facebook" width={32} height={32} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-white ">
                                <Image src="/icons/social-media/yt-icon.png" alt="YouTube" width={32} height={32} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-white ">
                                <Image src="/icons/social-media/tiktok-icon.png" alt="TikTok" width={32} height={32} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Company Information */}
                <div className="mt-8 md:mt-12 pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-600">
                        <p className="font-semibold mb-1">CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ SKYHOME VIỆT NAM</p>
                        <p>Địa chỉ: 46 Cửu Long, phường Tân Sơn Hoà, TP Hồ Chí Minh</p>
                        <p>MST: 0318963348</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
