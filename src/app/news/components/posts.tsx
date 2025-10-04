
import Image from "next/image";
import Link from "next/link";
const posts = [
    {
        id: 1,
        title: "Khám phá Skyhome: Không gian sống hiện đại",
        description: "",
        content:
            "SkyHome mang đến giải pháp vệ sinh toàn diện cho căn hộ, nhà ở, văn phòng và các không gian sống hiện đại. Chúng tôi hiểu rằng một môi trường sạch sẽ không chỉ giúp nâng tầm chất lượng sống mà còn tạo nên sự thoải mái, an toàn cho cả gia đình.",
        image: "/about/individual-customer.webp",
    },
    {
        id: 2,
        title: "Tiện ích nổi bật tại SkyHome",
        description: "Đa dạng tiện ích, phù hợp cho từng mục đích và từng đối tượng khách hàng.",
        content:
            "Skyhome được trang bị hệ thống tiện ích đa dạng như hồ bơi ngoài trời, phòng gym hiện đại, khu vui chơi trẻ em an toàn, khu BBQ và sân vườn xanh mát. Mỗi tiện ích đều được thiết kế nhằm phục vụ tối đa nhu cầu thư giãn, rèn luyện sức khỏe và gắn kết các thành viên trong gia đình.",
        image: "/news/post.png",
    },
    {
        id: 3,
        title: "An tâm sử dụng dịch vụ",
        description: "Đội ngũ đối tác chuyên nghiệp, tận tâm và tỉ mỉ trong từng chi tiết.",
        content:
            "Skyhome áp dụng công nghệ an ninh tiên tiến với hệ thống camera giám sát toàn khu, kiểm soát ra vào bằng thẻ từ và đội ngũ bảo vệ túc trực 24/7. Nhờ đó, cư dân hoàn toàn yên tâm tận hưởng cuộc sống mà không phải lo lắng về các vấn đề an ninh.",
        image: "/news/post.png",
    },
    {
        id: 4,
        title: "SkyHome - Gắn kết cộng đồng",
        description: "Đặt yếu tố con người lên hàng đầu, không chỉ gắn kết với khác hàng mà còn gắn kết tình người trong đời sống xa hội.",
        content:
            "Skyhome chú trọng xây dựng cộng đồng cư dân văn minh, thân thiện thông qua các sự kiện, hoạt động giao lưu, câu lạc bộ sở thích và chương trình thiện nguyện. Đây là nơi mọi người có thể kết nối, chia sẻ và cùng nhau xây dựng môi trường sống tốt đẹp.",
        image: "/news/post.png",
    },
    {
        id: 5,
        title: "SkyHome - Phát triển lối sống Xanh - Sạch - Đẹp",
        description: "Không chỉ nâng cao giá trị sống mà ở SkyHome giá trị về môi trường và đạo đức con người cũng là 1 trong số giá trị được đánh giá cao.",
        content:
            "SkyHome tọa lạc tại vị trí chiến lược, thuận tiện di chuyển đến các khu vực trung tâm và các tiện ích lân cận. Nhờ tiềm năng phát triển mạnh mẽ, giá trị bất động sản tại SkyHome không ngừng gia tăng, mang lại cơ hội sinh lời hấp dẫn cho các nhà đầu tư.",
        image: "/news/post.png",
    },
];


export default function Posts() {
    return (
        <div className="lg:w-[76%] w-full mx-auto flex flex-col items-center justify-center gap-6 py-8 px-2 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 pt-20 md:pt-20 w-full">
                {/* Left big card */}
                <Link
                    href={`/news/${posts[0].id}`}
                    className="md:col-span-3 bg-white rounded-xl p-4 md:p-6 flex flex-col"
                >
                    <div className="items-center justify-center mb-4 bg-[#ffe9a8] rounded-lg">
                        <Image
                            src={posts[0].image}
                            alt={posts[0].title}
                            width={800}
                            height={400}
                            className="object-contain w-full h-auto rounded-lg"
                        />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">
                        {posts[0].title}
                    </h3>
                    <p className="text-lg md:text-xl text-black">{posts[0].description}</p>
                    <p className="mt-4 md:mt-6 text-base text-gray-600 line-clamp-4">
                        {posts[0].content}
                    </p>
                </Link>
                <div className="md:col-span-3 flex flex-col gap-6 md:gap-8 bg-white rounded-xl">
                    {posts.slice(1).map((post) => (
                        <Link
                            href={`/news/${post.id}`}
                            key={post.id}
                            className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 cursor-pointer hover:shadow-md transition"
                        >
                            {/* Text */}
                            <div className="flex flex-col pr-0 md:pr-4 mb-2 md:mb-0 w-full md:w-auto">
                                <h4 className="font-bold text-lg md:text-xl text-black">{post.title}</h4>
                                <p className="text-base text-black line-clamp-2">
                                    {post.description}
                                </p>
                            </div>
                            {/* Image */}
                            <div className="w-full md:w-32 h-32 md:h-full flex-shrink-0 bg-[#ffe9a8] rounded-lg mt-2 md:mt-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={128}
                                    height={128}
                                    className="object-contain w-full h-full rounded-lg"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
