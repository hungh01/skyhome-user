
import Image from "next/image";
import Link from "next/link";
const posts = [
    {
        id: 1,
        title: "Đảm bảo an toàn vệ sinh",
        description:
            "Nhân viên được đào tạo chuyên nghiệp, sử dụng hóa chất an toàn và thiết bị hiện đại để bảo vệ sức khỏe gia đình bạn.",
        content:
            "Chúng tôi cam kết sử dụng các sản phẩm tẩy rửa thân thiện với môi trường, không gây hại cho trẻ nhỏ và vật nuôi. Nhân viên luôn tuân thủ quy trình vệ sinh nghiêm ngặt, đảm bảo không gian sống sạch sẽ, an toàn.",
        image: "/logo/white-logo.webp",
    },
    {
        id: 2,
        title: "Bảo mật tài sản khách hàng",
        description:
            "Tất cả nhân viên đều được kiểm tra lý lịch và ký cam kết bảo mật tài sản khi làm việc tại nhà khách hàng. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí.",
        content:
            "Chúng tôi hiểu rằng tài sản của bạn rất quan trọng. Nhân viên vệ sinh được tuyển chọn kỹ lưỡng, có lý lịch rõ ràng và luôn tuân thủ quy tắc ứng xử chuyên nghiệp. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí.",
        image: "/logo/white-logo.webp",
    },
    {
        id: 3,
        title: "Đền bù thiệt hại rõ ràng",
        description:
            "Nếu xảy ra mất mát hoặc hư hỏng tài sản do lỗi của nhân viên, chúng tôi sẽ đền bù theo chính sách công khai. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí.",
        content:
            "Chính sách đền bù minh bạch, đảm bảo quyền lợi tối đa cho khách hàng. Mọi trường hợp phát sinh sẽ được xử lý nhanh chóng, công bằng. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí.",
        image: "/logo/white-logo.webp",
    },
    {
        id: 4,
        title: "Đảm bảo đúng giờ và lịch hẹn",
        description:
            "Nhân viên luôn đến đúng giờ, làm việc theo lịch hẹn đã thống nhất với khách hàng. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí.",
        content:
            "Chúng tôi cam kết không làm gián đoạn sinh hoạt của khách hàng, luôn chủ động liên hệ nếu có thay đổi về thời gian.",
        image: "/logo/white-logo.webp",
    },
    {
        id: 5,
        title: "Hỗ trợ khách hàng 24/7",
        description:
            "Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ, giải đáp mọi thắc mắc về dịch vụ vệ sinh bất cứ lúc nào. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí.",
        content:
            "Bạn có thể liên hệ với chúng tôi qua hotline, email hoặc ứng dụng để được hỗ trợ nhanh chóng, tận tình. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí.",
        image: "/logo/white-logo.webp",
    },
    {
        id: 6,
        title: "Hoàn tiền nếu không hài lòng",
        description:
            "Nếu khách hàng không hài lòng về chất lượng dịch vụ, chúng tôi cam kết hoàn tiền theo chính sách. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí.",
        content:
            "Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu. Nếu dịch vụ không đạt yêu cầu, bạn sẽ được hoàn tiền hoặc phục vụ lại miễn phí.",
        image: "/logo/white-logo.webp",
    },
];

export default function SafetyPolicy() {

    return (
        <section className="w-[80%] mx-auto py-12">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-gray-900 mb-8 mx-auto">
                Hỏi đáp chính sách an toàn
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <Link
                        key={post.id}
                        href={`/support/safety-policy/${post.id}`}
                        className={`bg-[#ffe9a8] rounded-lg p-6 cursor-pointer hover:shadow-lg transition ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                            }`}
                    >
                        <div className="flex flex-col items-start">
                            {/* Title */}
                            <h3 className="font-bold text-2xl text-black mb-2">{post.title}</h3>
                            {/* Icon */}
                            <div className="w-1/2 h-auto mb-4">
                                <Image src={post.image} alt="Icon" width={2080} height={1050} className="w-full h-full text-black" />
                            </div>

                            {index !== 0 && post.description.length >= 100 ? (
                                <p className="text-base text-black">{post.description.slice(0, 80)}...</p>
                            ) : (
                                <p className="text-base text-black">{post.description}</p>
                            )}
                            {index === 0 && (
                                <p className="text-base font-light text-black pt-5">{post.content}</p>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
}
