"use client"
import { images } from "@/data/images"

export function Footer() {
    return(
        <>
            <section className="flex items-center flex-auto flex-col md:flex-row p-4 border-t-[2px] border-emerald-950 rounded-tr-[10%] rounded-tl-[10%] bg-emerald-900 w-full min-h-[200px] h-auto ">
                <div className="flex flex-row items-center gap-2 shadow-lg p-2">
                    <img src={images.logo.src} alt="" className="w-20 md:w-40"/>
                    <div className="flex flex-col items-center p-2">
                        <h2 className="font-extrabold text-white text-2xl text-center md:text-[3rem]">KAYTITINGA</h2>
                        <h2 className="font-extrabold text-white text-center md:text-[2rem]">INTEGRATED</h2>
                        <h2 className="font-extrabold text-white text-center">SCHOOL</h2>
                    </div>
                </div>
            </section>
        </>
    )

}