"use client"
import { useMemo } from "react";

type Properties = {
    text?: String,
    orientation?: string,
    variantStyle?: string,
    size?: number
}

const sizeMap: Record<number, string> = {
    1: "text-[0.9rem] md:text-[1.2rem]",
    2: "text-[1.5rem] md:text-[2rem]",
    3: "text-[2rem] md:text-[3rem]",
    4: "text-[3rem] md:text-[4rem]",
    5: "text-[4rem] md:text-[5rem]",
};

function RenderLinedLabel(
    { render_text = "", text_size = 3 }:
    { text_size?: number, render_text?: String }
) {
    const sizeClass = sizeMap[text_size] ?? sizeMap[3];

    return (
        <div className="flex items-center w-full px-3">
            <span className="flex-1 h-[2px] md:h-[3px] bg-emerald-800 shadow-lg"></span>

            <h2 className={`px-2 text-emerald-800 text-shadow-lg font-extrabold ${sizeClass}`}>
                {render_text}
            </h2>

            <span className="flex-1 h-[2px] md:h-[3px] shadow-lg bg-emerald-800"></span>
        </div>
    )
}

export function Label(
    { text = "", orientation = "center", variantStyle = "", size = 3 }: Properties
) {
    const textAlignment = useMemo(() => {
        switch (orientation) {
            case "left":
                return "text-left";
            case "center":
                return "text-center";
            case "right":
                return "text-right";
            default:
                return "text-center";
        }
    }, [orientation]);
    const sizeClass = sizeMap[size] ?? sizeMap[3];

    return (
        <>
            {variantStyle === "lined-label" ? (
                <RenderLinedLabel
                    render_text={text}
                    text_size={size}
                />
            ) : (
                <h2
                    className={`${textAlignment} px-2 w-full text-emerald-800 text-shadow-lg font-extrabold ${sizeClass}`}
                >
                    {text}
                </h2>
            )}
        </>
    )
}
