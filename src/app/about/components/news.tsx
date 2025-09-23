export default function News() {
    return (
        <section className="h-screen w-full py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-900">Bảng tin SkyHome</h2>
            <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Card lớn bên trái */}
                <div className="bg-yellow-300 rounded-2xl flex flex-col justify-center items-start h-80 p-8">
                    <svg className="w-20 h-20 text-sky-900 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="14" rx="2" />
                        <circle cx="8.5" cy="10.5" r="2.5" />
                        <path d="M21 21l-5-5-4 4-7-7" />
                    </svg>
                    <h3 className="font-bold text-2xl mb-2">Lorem ipsum</h3>
                    <p className="text-base text-gray-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                </div>
                {/* Card nhỏ bên phải */}
                <div className="flex flex-col gap-6 justify-center">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="flex-1">
                                <h3 className="font-bold text-lg mb-1">Lorem ipsum</h3>
                                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                            </div>
                            <div className="bg-yellow-300 rounded-2xl flex justify-center items-center w-24 h-24">
                                <svg className="w-12 h-12 text-sky-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="18" height="14" rx="2" />
                                    <circle cx="8.5" cy="10.5" r="2.5" />
                                    <path d="M21 21l-5-5-4 4-7-7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}