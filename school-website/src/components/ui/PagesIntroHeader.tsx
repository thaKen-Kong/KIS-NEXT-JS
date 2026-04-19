
import { Label } from "@/components/items/Label";
import { images } from "@/data/images"
 
type Header = {
    headerText? : string
    imageToDisplay? : string
}

export function PageIntroHeader({headerText = "", imageToDisplay = images.bg_1.src} : Header) {
    
    return (
        <>
            <div className="flex bg-black w-[95%] h-[150px] md:h-[300px] items-center relative rounded-[20px]">
                <img className="opacity-50 shadow-lg rounded-[20px]  absolute w-full h-full object-center object-cover" src={imageToDisplay} alt={headerText} />
                <Label text={headerText} textColor="text-white z-10" orientation="center" size={3}/>
            </div>
        </>
    )
}