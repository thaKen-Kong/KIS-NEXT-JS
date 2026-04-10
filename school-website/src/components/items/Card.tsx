"use client"
import { ReactNode, useEffect, useState } from "react"
import { Label } from "./Label"

type Props = {
    children? : ReactNode,
    cardColor? : string,
    text? : string,
    header? : string,

    colorVariant? : string,
    variantColor? : number,
    custom? : string
}


type VideoProps = {
    source? : string,
    header? : string
}

type TextProps = {
    header? : string,
    text? : string
}

function CardTemplate({children, cardColor, variantColor = 0, header, custom} : Props) {

    const twoVariantColor = [
        {
            "text" : "text-white",
            "background" : "bg-emerald-800"
        },
        {
            "text" : "text-emerald-800",
            "background" : "bg-white"
        }
    ]


    return (
        <>
            <div className={`${custom} ${twoVariantColor[variantColor].background} flex flex-col item-center min-w-[90%] max-w-[90%] md:min-w-[500px] min-h-[300px] md:min-h-[400px] shadow-lg p-3`}>
                {header ? <><h1 className={`${twoVariantColor[variantColor].text} border-y-[1.5px] py-1 text-shadow-lg font-extrabold text-center`}>{header}</h1></> : <></>}
                <div className=" rounded flex-1 mt-2 overflow-hidden flex">
                    {children}
                </div>
            </div>
        </>
    )
}

export function CardOne() {
    return (
        <>
            <CardTemplate variantColor={0}custom="rounded"/>
        </>
    )
}

export function VideoCard({source, header}: VideoProps) {
    return (
        <>
            <CardTemplate custom="rounded" header={header}>
                <iframe className="w-full" src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </CardTemplate>
        </>
    )
}


export function TextCardWhite() {
    return (
        <>
            <CardTemplate>

            </CardTemplate>
        </>
    )
}


type TwoColumnProps = {
    firstContainerContent? : ReactNode,
    firstContainerLabel? : string,

    secondContainerContent? : ReactNode,
    secondContainerLabel? : string
}

export function TwoColumnCard({firstContainerContent, firstContainerLabel, secondContainerContent, secondContainerLabel} : TwoColumnProps) {
    
    const card_stlye = "shadow-lg min-w-[100%] min-h-[200px] md:min-h-[200px] border-x-[5px] border-y-[2px] p-2 rounded-[10px] border-emerald-800 md:min-w-[500px] flex flex-col items-center"
    
    return (    
        <>
            <div className="flex w-[90%] gap-5 flex-col ">
                <div className={`${card_stlye}`}>
                    {firstContainerLabel ? <><h2 className="flex w-full text-shadow-lg text-emerald-900 font-extrabold text-[1rem] md:text-[1.5rem]">{firstContainerLabel}</h2></> : <></>}
                    <div className="p-2 w-full h-full">
                        {firstContainerContent}
                    </div>
                </div>
                <div className={`${card_stlye}`}>
                    {secondContainerLabel ? <><h2 className="flex w-full text-shadow-lg text-emerald-900 font-extrabold text-[1rem] md:text-[1.5em]">{secondContainerLabel}</h2></> : <></>}
                    <div className="p-2 w-full h-full">
                    {secondContainerContent}
                    </div>
                </div>
            </div>
        </>
    )
}