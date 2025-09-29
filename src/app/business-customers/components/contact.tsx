"use client";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        company: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form); // xử lý gửi API ở đây
    };

    return (
        <section className="w-[66%] h-screen mx-auto py-12 flex flex-col md:flex-row items-center justify-center">
            {/* Left side - Image */}
            <div className="bg-linear-to-r from-[#FDDB00] to-[#f9e55e] rounded-l-xl flex flex-col items-center justify-center p-8 h-[70%] w-full md:w-2/5">
                <img
                    src="/logo/white-logo.webp"
                    alt="SkyHome"
                    className="max-w-[150px] mx-auto pb-10"
                />
                <img
                    src="/logo/Logo@4x-8.png"
                    alt="SkyHome"
                    className="max-w-[250px] mx-auto"
                />
            </div>

            {/* Right side - Form */}
            <div className=" bg-white rounded-xl shadow-[-8px_-8px_24px_0px_rgba(0,0,0,0.2)] w-full h-[80%] md:w-3/5 p-8">
                <h3 className="text-4xl font-bold text-sky-900 mb-6">Liên hệ với SkyHome</h3>
                <form className="space-y-10" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="company"
                        placeholder="Tên doanh nghiệp"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />
                    <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
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
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />

                    <button
                        type="submit"
                        className="bg-sky-900 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-800 transition"
                    >
                        Gửi
                    </button>
                </form>
            </div>
        </section>
    );
}
