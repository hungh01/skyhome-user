"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        company: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form); // xử lý gửi API ở đây
    };

    return (
        <section className="w-[70%] mx-auto min-h-screen py-8 px-4 flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Left side - Image */}
            <div className="bg-gradient-to-r from-[#FDDB00] to-[#f9e55e] rounded-t-xl md:rounded-l-xl md:rounded-tr-none flex flex-col items-center justify-center p-6 md:p-8 w-full md:w-2/5 h-auto md:h-[70%] mb-4 md:mb-0">
                <Image
                    src="/logo/white-logo.webp"
                    alt="SkyHome"
                    width={2080}
                    height={1050}
                    className="max-w-[120px] md:max-w-[150px] mx-auto pb-6 md:pb-10"
                />
                <Image
                    src="/business-service/equipments.webp"
                    alt="SkyHome"
                    width={2080}
                    height={1050}
                    className="max-w-[180px] md:max-w-[250px] mx-auto"
                />
            </div>

            {/* Right side - Form */}
            <div className="bg-white rounded-b-xl md:rounded-xl shadow-[-8px_-8px_24px_0px_rgba(0,0,0,0.2)] w-full md:w-3/5 p-4 md:p-8 h-auto md:h-[80%]">
                <h3 className="text-2xl md:text-4xl font-bold text-sky-900 mb-4 md:mb-6 text-center md:text-left">
                    Liên hệ với SkyHome
                </h3>
                <form className="space-y-6 md:space-y-10" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="company"
                        placeholder="Tên doanh nghiệp"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-base"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-base"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-base"
                    />
                    <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-base"
                    >
                        <option value="">Dịch vụ quan tâm</option>
                        <option value="cleaning">Vệ sinh công nghiệp</option>
                        <option value="office">Vệ sinh văn phòng</option>
                        <option value="home">Vệ sinh gia đình</option>
                    </select>
                    <textarea
                        name="message"
                        placeholder="Gửi tin nhắn cho SkyHome"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-base"
                    />

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-sky-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-800 transition w-full md:w-auto"
                        >
                            Gửi
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
