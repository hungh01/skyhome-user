'use client';
import Image from "next/image";
import Link from "next/link";
import { useViewportContext } from "@/providers/viewport-provider";


export function Footer() {
    const { isMobile } = useViewportContext();
    return (
        <footer className="bg-white snap-start h-screen w-full flex flex-col">
            <div className="h-1/2 bg-gradient-to-r text-sky-900 mt-16 flex items-end">
                <div className="flex w-full h-[80%] mx-auto max-w-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FDDB00] via-[rgb(244,226,110)] to-[#FDDB00]">

                    <div className="flex-1 flex flex-col justify-center items-center text-center px-2 sm:px-4 h-full">
                        <div className="w-full max-w-lg flex flex-col h-auto justify-center ">
                            <div className="flex flex-row justify-center items-center space-x-4 mb-6 space-y-0 w-full">
                                <a href="#" className="inline-block w-auto">
                                    <Image src="/footer/download-ios.png" alt="App Store" width={160} height={48} className="w-full sm:w-[160px] h-auto max-w-[120px] sm:max-w-none mx-auto" />
                                </a>
                                <a href="#" className="inline-block w-auto">
                                    <Image src="/footer/download-android.png" alt="Google Play" width={160} height={48} className="w-full sm:w-[160px] h-auto max-w-[120px] sm:max-w-none mx-auto" />
                                </a>
                            </div>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                                    </svg>
                                ))}
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-4 text-sky-900">
                                Tải ứng dụng ngay
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg mb-1 md:mb-6 text-gray-800">
                                Để trải nghiệm những dịch vụ tốt nhất của SkyHome.
                            </p>

                            {!isMobile && (<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center justify-center w-full">
                                <Link href="/individual-customers" className="bg-white rounded-full px-4 sm:px-6 py-2 font-semibold text-sky-900 border border-gray-300 shadow hover:bg-yellow-100 transition text-xs sm:text-base w-full sm:w-auto mb-2 sm:mb-0">
                                    Khách hàng cá nhân
                                </Link>
                                <Link href="/business-customers" className="bg-white rounded-full px-4 sm:px-6 py-2 font-semibold text-sky-900 border border-gray-300 shadow hover:bg-yellow-100 transition text-xs sm:text-base w-full sm:w-auto">
                                    Khách hàng doanh nghiệp
                                </Link>
                            </div>)}
                        </div>
                    </div>
                    {!isMobile && (<div className="flex-1 flex justify-center items-end">
                        <Image
                            src="/footer/employee.webp"
                            alt="Employee"
                            width={400}
                            height={500}
                            className="w-[200px] md:w-[400px] lg:w-[650px] h-auto"
                        />
                    </div>)}
                </div>
            </div>
            <div className="h1/2 mx-auto px-4 w-[74%] md:pt-4 sm:pt-2 lg:pt-8">
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
                        <Image src="/logo/logo-company.svg" alt="SkyHome Logo" width={100} height={34} />
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
                <div className="pb-6 mt-4 md:mt-6 pt-4 border-t border-gray-200">
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
