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
                        SkyHome hiểu rằng, ai cũng có những dự định và ước mơ riêng, ai cũng mong muốn mình đủ tự tin và sự chủ động để hiện thực hoá chúng.
                        SkyHom luôn muốn mạng lại cho khách hàng những tiện ích... dù bạn là ai, ở độ tuổi nào, bạn sẽ luôn chủ động cuộc sống, và việc nhà còn là rào cản của bạn nữa. (Câu tương tự ý này chuẩn SEO)
                    </p>
                </div>
                {/* Right image */}
                <div className="flex-1 flex justify-center items-center ">
                    <Image
                        width={1200}
                        height={1200}
                        src="/home-page/employee.png"
                        alt="SkyHome Employee"
                        className="w-full max-w-xl rounded-2xl shadow-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}