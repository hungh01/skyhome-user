import Image from "next/image";

export default function BriefEmployee() {
    return (
        <section
            id="section4"
            className="w-[76%] h-screen flex items-center justify-center"
        >
            <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-center">
                {/* Left content */}
                <div className="flex-1 flex flex-col justify-center items-start text-left px-4">
                    {/* <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-sky-900">
                        Đội ngũ SkyHome
                    </h2> */}
                    <p className="text-lg lg:text-2xl text-gray-700 mb-6 max-w-xl">
                        SkyHome hiểu rằng mỗi khách hàng đều có những nhu cầu riêng về vệ sinh. Vì thế, chúng tôi mang đến dịch vụ vệ sinh đa dạng
                        – từ dịch vụ vệ sinh nhà ở, vệ sinh văn phòng,
                        đến vệ sinh định kỳ hay tổng vệ sinh toàn diện. Dù là không gian sống hay nơi làm việc,
                        SkyHome luôn hướng đến sự sạch sẽ, gọn gàng và trong lành, để bạn thoải mái tận hưởng môi trường an toàn mỗi ngày.
                    </p>
                </div>
                {/* Right image */}
                <div className="flex-1 flex justify-center items-center ">
                    <Image
                        width={1200}
                        height={1200}
                        src="/home-page/employee.webp"
                        alt="SkyHome Employee"
                        className="w-full max-w-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}