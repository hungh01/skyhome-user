"use client";
import Image from "next/image";
import Link from "next/link";
const posts = [
    {
        id: 1,
        title: "Khám phá Skyhome: Không gian sống hiện đại",
        description: "Giải pháp nhà ở thông minh, thiết kế tối ưu, tiện nghi hiện đại.",
        content:
            "Skyhome không chỉ là nơi ở mà còn là không gian sống lý tưởng với các tiện ích hiện đại, thiết kế thông minh và môi trường xanh mát. Tại đây, cư dân được trải nghiệm sự tiện nghi vượt trội, từ hệ thống quản lý thông minh đến các dịch vụ hỗ trợ tận tâm, mang lại cuộc sống an lành và hạnh phúc cho mọi gia đình.",
        image: "/images/large.png",
    },
    {
        id: 2,
        title: "Tiện ích nổi bật tại Skyhome",
        description: "Đầy đủ tiện ích: hồ bơi, gym, khu vui chơi trẻ em.",
        content:
            "Skyhome được trang bị hệ thống tiện ích đa dạng như hồ bơi ngoài trời, phòng gym hiện đại, khu vui chơi trẻ em an toàn, khu BBQ và sân vườn xanh mát. Mỗi tiện ích đều được thiết kế nhằm phục vụ tối đa nhu cầu thư giãn, rèn luyện sức khỏe và gắn kết các thành viên trong gia đình.",
        image: "/images/small1.png",
    },
    {
        id: 3,
        title: "An ninh tuyệt đối tại Skyhome",
        description: "An ninh 24/7, bảo vệ chuyên nghiệp, an toàn tuyệt đối.",
        content:
            "Skyhome áp dụng công nghệ an ninh tiên tiến với hệ thống camera giám sát toàn khu, kiểm soát ra vào bằng thẻ từ và đội ngũ bảo vệ túc trực 24/7. Nhờ đó, cư dân hoàn toàn yên tâm tận hưởng cuộc sống mà không phải lo lắng về các vấn đề an ninh.",
        image: "/images/small2.png",
    },
    {
        id: 4,
        title: "Skyhome – Gắn kết cộng đồng cư dân",
        description: "Hoạt động cộng đồng sôi nổi, môi trường sống thân thiện.",
        content:
            "Skyhome chú trọng xây dựng cộng đồng cư dân văn minh, thân thiện thông qua các sự kiện, hoạt động giao lưu, câu lạc bộ sở thích và chương trình thiện nguyện. Đây là nơi mọi người có thể kết nối, chia sẻ và cùng nhau xây dựng môi trường sống tốt đẹp.",
        image: "/images/small3.png",
    },
    {
        id: 5,
        title: "Đầu tư sinh lời cùng Skyhome",
        description: "Vị trí đắc địa, tiềm năng phát triển, sinh lời bền vững.",
        content:
            "Skyhome tọa lạc tại vị trí chiến lược, thuận tiện di chuyển đến các khu vực trung tâm và các tiện ích lân cận. Nhờ tiềm năng phát triển mạnh mẽ, giá trị bất động sản tại Skyhome không ngừng gia tăng, mang lại cơ hội sinh lời hấp dẫn cho các nhà đầu tư.",
        image: "/images/small3.png",
    },
];

export default function Posts() {
    return (
        <div className="w-[76%] h-screen mx-auto flex flex-col items-center justify-center gap-6 py-8 px-4">
            <div className=" h-auto mx-auto  grid grid-cols-1 md:grid-cols-6 gap-6">
                {/* Left smaller big card */}
                <Link
                    href={`/news/${posts[0].id}`}
                    className="md:col-span-3 bg-white rounded-xl p-6 flex flex-col">
                    <div className="items-center justify-center mb-4 bg-[#ffe9a8] rounded-lg p-4">
                        <Image
                            src={posts[0].image}
                            alt={posts[0].title}
                            width={2080}
                            height={1120}
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-1">
                        {posts[0].title}
                    </h3>
                    <p className="text-xl text-black">{posts[0].description}</p>
                    <p className="mt-6 text-base text-gray-600 line-clamp-4">
                        {posts[0].content}
                    </p>
                </Link>

                {/* Right list bigger cards */}
                <div className="md:col-span-3 flex flex-col gap-8  bg-white rounded-xl">
                    {posts.slice(1).map((post) => (
                        <Link
                            href={`/posts/${post.id}`}
                            key={post.id}
                            className="flex items-center justify-between p-6 cursor-pointer hover:shadow-md transition"
                        >
                            {/* Text */}
                            <div className="flex flex-col pr-4">
                                <h4 className="font-bold text-xl text-black">{post.title}</h4>
                                <p className="text-base text-black line-clamp-2">
                                    {post.description}
                                </p>
                            </div>
                            {/* Image */}
                            <div className="w-30 h-20 flex-shrink-0 bg-[#ffe9a8] rounded-lg p-2">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={2080}
                                    height={1120}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
