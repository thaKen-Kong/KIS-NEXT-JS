"use client"
import { Props } from "@/utils/Props";
import { ReactNode, useState } from "react";
import { Label } from "./items/Label";

export function PageContainer({custom = "", color = "" ,children, header} : Props) {
    return (
        <>
            <section className={` ${color} ${custom} flex flex-col items-center shadow-lg min-w-full min-h-screen h-auto py-2   `}>
                {header ? (<div className=" flex w-full"><Label orientation="center" size={3} textColor="text-emerald-800" text={header}/></div>) : <></>}
                {children}
            </section>
        </>
    )
}

export function WhiteContainer( {children, custom}: {children? : ReactNode, custom? : string} ) {
    return (
        <>
            <div className={`${custom} mx-auto flex w-[90%] min-h-100 shadow-lg items-center gap-x-4 bg-white`}>
                {children}
            </div>
        </>
    );
}

export function TransulecentContainer( {children, custom, translucense}: {children? : ReactNode, custom? : string, translucense? : number} ) {
    return (
        <>
            <div className={`${custom} bg-black/10 mx-auto flex w-[90%] min-h-100 shadow-lg items-center gap-x-4`}>
                {children}
            </div>
        </>
    );
}