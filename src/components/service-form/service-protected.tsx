interface ServiceProtectedProps {
    title: string;
    description: string;
}
export default function ServiceProtected({ title, description }: ServiceProtectedProps) {
    return (
        <section className="w-full h-auto min-h-[40vh] flex items-center justify-center mx-auto py-8 px-4">
            <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 text-sky-900">
                    {title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-800 text-center leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
}