
interface ServiceProtectedProps {
    title: string;
    description: string;
}
export default function ServiceProtected({ title, description }: ServiceProtectedProps) {
    return (
        <section className="w-[76%] h-1/2 flex items-center justify-center align-center mx-auto my-auto">
            <div className="w-full max-w-2xl mx-auto h-1/3 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold text-center mb-4 text-sky-900">{title}</h2>
                <p className="text-base text-gray-800 text-center leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
}