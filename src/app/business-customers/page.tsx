import MainSection from "@/components/service-form/main-section";


export default function BusinessCustomers() {
    return (
        <div className="min-h-screen">
            <MainSection
                title1="Dịch vụ"
                title2="Tiện ích"
                description="Dịch vụ dọn dẹp theo giờ của SkyHome mang đến sự tiện lợi và linh hoạt cho khách hàng. Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết cung cấp dịch vụ chất lượng cao, giúp bạn duy trì không gian sống sạch sẽ và thoải mái mà không cần phải lo lắng về việc thuê dài hạn."
                buttonText="Giá trị mang lại"
                buttonLink="/individual-customers/hourly-cleaning/service-form"
                imageSrc="/footer/employee.webp"
            />
        </div>
    )
}