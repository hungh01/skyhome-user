import Image from "next/image"
import Link from "next/link"

const tips = [
    {
        id: 1,
        title: "Trick 1",
        description: "Description for trick 1, Description for trick 1Description for trick 1 ",
        image: "/logo/white-logo.webp",
    },
    {
        id: 2,
        title: "Trick 2",
        description: "Description for trick 2",
        image: "/logo/white-logo.webp",
    },
    {
        id: 3,
        title: "Trick 3",
        description: "Description for trick 3",
        image: "/logo/white-logo.webp",
    },
    {
        id: 4,
        title: "Trick 4",
        description: "Description for trick 4",
        image: "/logo/white-logo.webp",
    },
    {
        id: 5,
        title: "Trick 5",
        description: "Description for trick 5",
        image: "/logo/white-logo.webp",
    },
    {
        id: 6,
        title: "Trick 6",
        description: "Description for trick 6",
        image: "/logo/white-logo.webp",
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
                            <div className="bg-yellow-300 rounded-2xl flex items-center justify-center h-48 mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={2080}
                                    height={1120}
                                    className="w-24 h-24 object-contain"
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