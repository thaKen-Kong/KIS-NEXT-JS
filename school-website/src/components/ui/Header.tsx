"use client"
import Link from "next/link"
import { images } from "@/data/images"


export function HeaderComponent() {
    return (
        <>
            <section className="flex w-full p-4 bg-emerald-700 h-12 md:h-14 drop-shadow-zinc-800 shadow-2xs shadow-md items-center">
                <div className="flex flex-row gap-1 items-center">
                    <img src={images.logo.src} alt="LOGO" className="size-10"/>
                    <Link href="/"><h1 className="pt-1 pb-1 text-[2rem] text-white text-shadow-sm text-shadow-zinc-600 font-bold ">KIS</h1></Link>
                </div>
            </section>
        </>
    )
}
