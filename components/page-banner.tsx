export default function PageBanner({ title }: { title: string }) {
    return (
        <div className="bg-[#505b3f] py-10 text-center">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#fffdf5] tracking-wide uppercase">
                {title}
            </h1>
            <div className="w-16 h-1 bg-[#bd9e7d] mx-auto mt-4 rounded-full" />
        </div>
    )
}
