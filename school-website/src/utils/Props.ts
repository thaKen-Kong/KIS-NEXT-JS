import { ReactNode } from "react"


export type Props = {
    children?: ReactNode,
    color? : String,
    padding? : String,
    custom? : String,
    header? : String,
    text? : String,
    variant? : String
}

export type LabelType = {
    text? : String,
    direction? : String,
    variant? : String,
    color? : String,
    weight? : String,
}


export type Properties = {
    size? : String,
    shadow_size? : String,
    color? : String
}