import Image from "next/image";

export default function CustomersFeedback() {
    return (
        <section className="w-full py-16 ">
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-900">Feedback của khách hàng SkyHome</h2>
            <div className="flex flex-row items-end justify-center gap-18 w-[72%] mx-auto">
                {/* Card nhỏ trái */}
                <div className="bg-white rounded-t-3xl rounded-bl-2xl shadow-[6px_6px_6px_6px_rgba(0,0,0,0.1)] p-6 w-64 flex flex-col justify-between mx-2">
                    <div className="flex items-center mb-2">
                        <svg className="w-8 h-8 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <text x="2" y="20" fontSize="20" fontWeight="bold">“</text>
                        </svg>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                        &quot;Dịch vụ vệ sinh của SkyHome rất chuyên nghiệp.
                        Nhân viên đến đúng giờ, làm việc tận tâm và chi tiết.
                        Sau khi vệ sinh, không gian nhà tôi sạch sẽ, gọn gàng, tạo cảm giác vô cùng thoải mái.&quot;
                    </p>
                    <div className="flex items-center mt-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 relative overflow-hidden">
                            <Image
                                src="/about/review/customer3.png"
                                alt="User Avatar"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <span className="font-bold text-sm">Xuân Hương</span>
                    </div>
                </div>
                {/* Card lớn giữa */}
                <div className="bg-white rounded-t-3xl rounded-bl-2xl shadow-[6px_6px_6px_6px_rgba(0,0,0,0.1)] p-8 w-96 flex flex-col justify-between scale-110 z-10 mx-2">
                    <div className="flex items-center mb-2">
                        <svg className="w-10 h-10 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <text x="2" y="30" fontSize="32" fontWeight="bold">“</text>
                        </svg>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-base text-gray-700 mb-4">
                        &quot;Công ty tôi đã sử dụng dịch vụ vệ sinh văn phòng định kỳ của SkyHome.
                        Mọi quy trình đều bài bản, sạch sẽ từ bàn ghế đến các góc nhỏ.
                        Nhân viên thân thiện và hỗ trợ nhiệt tình.&quot;
                    </p>
                    <div className="flex items-center mt-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 relative overflow-hidden">
                            <Image
                                src="/about/review/customer1.png"
                                alt="User Avatar"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <span className="font-bold text-base">Phúc Tín</span>
                    </div>
                </div>
                {/* Card nhỏ phải */}
                <div className="bg-white rounded-t-3xl rounded-bl-2xl shadow-[6px_6px_6px_6px_rgba(0,0,0,0.1)] p-6 w-64 flex flex-col justify-between mx-2">
                    <div className="flex items-center mb-2">
                        <svg className="w-8 h-8 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <text x="2" y="20" fontSize="20" fontWeight="bold">“</text>
                        </svg>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                        &quot;Tôi chọn gói tổng vệ sinh toàn diện của SkyHome và rất hài lòng.
                        Ngôi nhà sáng sủa, không khí trong lành hơn hẳn.
                        Thật sự mang lại cảm giác an tâm cho cả gia đình.&quot;
                    </p>
                    <div className="flex items-center mt-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 relative overflow-hidden">
                            <Image
                                src="/about/review/customer2.png"
                                alt="User Avatar"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <span className="font-bold text-sm">Quỳnh Trang</span>
                    </div>
                </div>
            </div>
        </section>
    );
}