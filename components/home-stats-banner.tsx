"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
    { value: 23, suffix: "+", label: "Years of Experience" },
    { value: 99, suffix: "%", label: "Professional Care" },
    { value: 16, suffix: "K+", label: "Treatments Done" },
    { value: 50, suffix: "K+", label: "Satisfied Patients" },
]

function AnimatedCounter({
    target,
    suffix,
    inView,
}: {
    target: number
    suffix: string
    inView: boolean
}) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!inView) return
        let start = 0
        const duration = 2000
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const current = Math.floor(progress * target)
            setCount(current)
            if (progress < 1) requestAnimationFrame(step)
        }
        let startTime: number | null = null
        requestAnimationFrame(step)
    }, [inView, target])

    return (
        <span>
            {count}
            {suffix}
        </span>
    )
}

export default function HomeStatsBanner() {
    const ref = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true)
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className="bg-[#bd9e7d] py-16">
            <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="font-serif text-4xl sm:text-5xl font-bold text-[#505b3f]">
                            <AnimatedCounter
                                target={stat.value}
                                suffix={stat.suffix}
                                inView={inView}
                            />
                        </p>
                        <p className="text-[#505b3f]/70 text-sm mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
