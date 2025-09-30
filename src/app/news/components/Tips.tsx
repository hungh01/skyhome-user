import Image from "next/image"
import Link from "next/link"

const tips = [
    {
        id: 6,
        title: "Làm sạch bồn tắm cực nhanh",
        description: " Cho một ít giấm ăn vào lò vi sóng, quay trong vài phút để làm nóng giấm ăn rồi bạn pha giấm ăn với nước rửa chén, hoặc dung dịch xà phòng khác theo tỉ lệ 1 : 1 rồi khuấy cho đều, sau đó đổ dung dịch vào chai xịt. Tiếp theo, bạn xịt dung dịch tẩy rửa vừa pha lên bề mặt bồn tắm, để vậy trong 30 phút sau đó dùng miếng rửa chén chà qua rồi xả lại với nước là bồn tắm sẽ không còn vết bẩn.",
        image: "/news/tips/lamsachbontam.jpg",
    },
    {
        id: 7,
        title: "Xóa vết bút lông, bút mực trên sàn gỗ",
        description: " Muốn loại bỏ vết bút lông, bút mực nhanh trên sàn gỗ, bàn gỗ, bạn nặn một ít kem đánh răng lên khăn vải mềm (tốt nhất là khăn sợi bông), sau đó lấy khăn vải chà mạnh lên sàn gỗ, sau vài phút, vết bẩn sẽ biến mất nhé. Ngoài ra, bạn còn có thể sử dụng keo xịt tóc để tẩy loại vết bẩn này bằng cách phun keo xịt tóc lên bề mặt vết bẩn, sau đó lấy khăn vải chà mạnh, rửa lại với nước sạch.",
        image: "/news/tips/xoavetbutlong.jpg",
    },
    {
        id: 8,
        title: "Tẩy vết sơn móng tay trên thảm",
        description: " Nếu bạn vô tình làm đổ sơn móng tay lên thảm trải sàn, bạn cần phải nhanh tay loại bỏ sơn móng tay ra khỏi thảm ngay, bởi khi sơn khô lại, sẽ rất khó làm sạch. Đổ lên bề mặt thảm bị bẩn một ít dung dịch tẩy sơn móng tay, để vậy trong 1 phút, sau đó nhấn khăn giấy cuộn vào vết bẩn để khăn giấy thấm hết vết bẩn, làm như vậy nhiều lần. Tới khi vết bẩn còn mờ mờ thì bạn lấy cục tẩy chà lên, vết sơn móng tay sẽ được làm sạch và không bị lây lan nhé. .",
        image: "/news/tips/tayvetmongtay.jpg",
    },
    {
        id: 9,
        title: "Làm sạch bụi bẩn trên đồ nội thất",
        description: "Nhỏ vài giọt dầu ăn lên khăn giấy khô, chà lên đồ nội thất rồi lau lại bằng khăn ướt để sạch bóng.",
        image: "/news/tips/lamsachnoithat.jpg",
    },
    {
        id: 10,
        title: "Vệ sinh đồ chơi của bé yêu",
        description: "Gom đồ chơi của bé vào một chiếc túi giặt, sau đó thả túi vào máy giặt, thêm bột giặt, khởi động máy. Đồ chơi của bé sẽ được làm sạch toàn diện, đơn giản và không mất nhiều thời gian, công sức của người nội trợ nhé.",
        image: "/news/tips/vesinhdochoi.jpg",
    },
    {
        id: 11,
        title: "Dùng giấm làm sạch vòi sen",
        description: "Cách làm sạch vòi sen nhanh chóng là dùng giấm. Bạn chuẩn bị một túi nilon đổ đầy giấm rồi cho vòi sen dính đầy vết bẩn vào ngâm trong khoảng 1 tiếng. Những vết bẩn sau khi ngâm qua giấm sẽ trở nên dễ dàng khi cọ rửa, bạn chỉ cần lấy bàn chải cọ nhẹ là các vết bẩn cứng đầu sẽ biến mất. ",
        image: "/news/tips/sachvoisen.jpg",
    },
]

export default function Tips() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center  py-12">
            <div className="w-[90%] max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-sky-900">
                    Mẹo vặt hữu ích
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {tips.map((item) => (
                        <Link
                            href={`/news/${item.id}`}
                            key={item.id}
                            className="flex flex-col bg-white rounded-2xl p-2 hover:shadow-lg transition"
                        >
                            <div className=" flex items-center justify-center h-48 mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={2080}
                                    height={1120}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col px-4">
                                <h3 className="text-xl font-bold mb-1 text-sky-900 line-clamp-1">{item.title}</h3>
                                <p className="text-base text-gray-800 line-clamp-1">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}