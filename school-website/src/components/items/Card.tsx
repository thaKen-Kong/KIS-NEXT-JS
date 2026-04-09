import { ReactNode } from "react"
import { Label } from "./Label"

type Properties = {
    children? : ReactNode
}

export function TextCard({children} : Properties) {
    return (
        <>
            <div className="flex flex-col item-center min-w-[90%] md:min-w-[400px] min-h-[200px] md:min-h-[400px] bg-white shadow-lg p-2">
                <Label text="KEN" size={2}/>
            </div>
        </>
    )
}