import { Props, LabelType } from "@/utils/Props";

export function Label({text, variant, direction, color, weight } : LabelType) {
    return (
        <>
            <div className="flex mx-auto">
                <h2 className={`${variant} ${direction} ${color} ${weight}`}>{text}</h2>
            </div>
        </>
    )
}
