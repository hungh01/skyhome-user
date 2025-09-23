

export default function SkyhomeCustomers() {
    return (

        <section className="w-full h-screen pt-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10 text-sky-900">Khách hàng của SkyHome</h2>
            <div className="flex flex-col gap-8 w-[72%] mx-auto">
                <div className="flex-1 flex gap-8">
                    <div className="w-5/8 h-90 bg-gray-200 flex items-center justify-center rounded-2xl">
                        <span className="text-gray-500">Logo Khách hàng 1</span>
                    </div>
                    <div className="w-3/8 h-90 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Logo Khách hàng 2</span>
                    </div>
                </div>
                <div className="flex-1 flex flex-rows gap-8">
                    <div className="w-3/8 h-90 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Logo Khách hàng 3</span>
                    </div>
                    <div className="w-5/8 h-90 bg-gray-200 flex items-center justify-center rounded-2xl">
                        <span className="text-gray-500">Logo Khách hàng 4</span>
                    </div>
                </div>
            </div>
        </section>
    );
}