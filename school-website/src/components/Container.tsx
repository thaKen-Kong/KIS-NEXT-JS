"use client"
import { Props } from "@/utils/Props";
import { ReactNode, useState } from "react";

export function PageContainer({custom = "", color = "" ,children, header} : Props) {
    return (
        <>
            <section className={` ${color} ${custom} mx-auto flex flex-col items-center shadow-lg w-full min-h-screen`}>
                {header ? (<div></div>) : <></>}
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