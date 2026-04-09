"use client"
import { useEffect, useState } from "react"

export function ToTop() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setShowButton(window.scrollY > 200)
        }

        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <button
            type="button"
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className={[
                "fixed bottom-6 right-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white shadow-md transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                "hover:scale-105",
                showButton
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0",
            ].join(" ")}
        >
            ↑
        </button>
    )
}
