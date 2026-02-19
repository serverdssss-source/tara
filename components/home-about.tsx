import Image from "next/image"
import { Award, Cpu, IndianRupee, Smile } from "lucide-react"

const stats = [
    { icon: Award, label: "Years of Experience", value: "23+" },
    { icon: Cpu, label: "Advanced Equipment", value: "100%" },
    { icon: IndianRupee, label: "Affordable Care", value: "Yes" },
    { icon: Smile, label: "Happy Smiles", value: "50K+" },
]

export default function HomeAbout() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-[#d2ceab]/30">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                            <Image
                                src="/images/two.webp"
                                alt="TARA Dental Aesthetics clinic interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-[#505b3f] text-[#d2ceab] p-6 rounded-2xl shadow-xl hidden md:block">
                            <p className="font-serif text-4xl font-bold">23+</p>
                            <p className="text-sm text-[#d2ceab]/70">Years of Trusted Expertise</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-[#bd9e7d] text-sm tracking-[0.3em] uppercase mb-4">
                            About Us
                        </p>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance mb-6">
                            Your Gateway to Health
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            At TARA Dental Aesthetics & Wellness, we believe that a beautiful, healthy smile begins with trust, comfort, and quality care. Nestled in the heart of Konanakunte, our clinic has grown into a preferred destination for comprehensive dental treatment in South Bengaluru.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                            At TARA Dental Aesthetics and Wellness, Dr. M. S. Srinivas Gowda leads the team with a philosophy that blends clinical expertise, compassionate care, and a commitment to lifelong dental wellness. Our vision is to create healthy, confident smiles for every patient in Bengaluru through personalised, ethical, and state-of-the-art dental care.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex items-center gap-4 bg-background p-4 rounded-xl"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#d2ceab] flex items-center justify-center shrink-0">
                                        <stat.icon className="w-5 h-5 text-[#505b3f]" />
                                    </div>
                                    <div>
                                        <p className="font-serif text-xl font-bold text-foreground">
                                            {stat.value}
                                        </p>
                                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}