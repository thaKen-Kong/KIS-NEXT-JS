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

export function WhiteContainer( {children}: {children : ReactNode} ) {
    return (
        <>
            <div className="mx-auto flex p-6 items-center gap-x-4 bg-amber-50 rounded-md">
                {children}
            </div>
        </>
    );
}