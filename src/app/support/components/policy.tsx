import Link from "next/link";

export default function Policy() {
    return (
        <section className="w-full h-screen min-h-[40vh] flex items-center justify-center mx-auto py-8 px-4">
            <div className="w-full max-w-6xl mx-auto my-auto flex flex-col justify-center items-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 text-sky-900">
                    Điều khoản và chính sách bảo mật của khách hàng
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-800 text-center leading-relaxed">
                    Khi sử dụng dịch vụ vệ sinh nhà cửa của Skyhome, khách hàng đồng ý với các điều khoản sau: Skyhome cam kết cung cấp dịch vụ đúng chất lượng, đúng thời gian đã thỏa thuận. Khách hàng có trách nhiệm cung cấp thông tin chính xác về địa chỉ, thời gian và yêu cầu công việc. Mọi thay đổi hoặc hủy dịch vụ cần thông báo trước ít nhất 24 giờ.
                    <br />
                    Skyhome tuyệt đối bảo mật thông tin cá nhân của khách hàng, bao gồm họ tên, địa chỉ, số điện thoại và thông tin thanh toán. Thông tin này chỉ được sử dụng cho mục đích cung cấp và cải thiện dịch vụ, không tiết lộ cho bên thứ ba nếu không có sự đồng ý của khách hàng, trừ trường hợp bắt buộc theo quy định pháp luật.
                    <br />
                    Nhân viên Skyhome được đào tạo chuyên nghiệp, tuân thủ quy trình an toàn và tôn trọng tài sản khách hàng. Trong trường hợp có sự cố phát sinh, Skyhome sẽ phối hợp giải quyết thỏa đáng dựa trên thiện chí và quy định hiện hành. Khi tiếp tục sử dụng dịch vụ, khách hàng được xem là đã đọc, hiểu và đồng ý với điều khoản và chính sách này.
                </p>
                <Link className="block mt-4" href="/privacy-policy">
                    <p className="text-sky-600 hover:underline">Xem đầy đủ chính sách bảo mật tại đây &gt;&gt;&gt;&gt; </p>
                </Link>
            </div>
        </section>
    );
}