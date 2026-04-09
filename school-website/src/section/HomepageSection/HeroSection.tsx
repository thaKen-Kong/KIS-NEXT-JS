import { PageContainer } from "@/components/Container";
import { images } from "@/data/images";


export function HeroSection() {
    return(
        <>
            <PageContainer color="bg-black" custom="relative flex-row items-center justify-center h-screen overflow-hidden">
                <img src={images.bg_1.src} alt="" className="absolute opacity-30 w-full h-full object-cover object-center"/>
                <h1 className="text-[8rem] md:text-[15rem] font-extrabold z-10 from-yellow-300 to-green-700 text-transparent bg-clip-text bg-gradient-to-b text-shadow-lg pointer-events-none shadow-black">KIS</h1>
            </PageContainer>
        </>
    )
}