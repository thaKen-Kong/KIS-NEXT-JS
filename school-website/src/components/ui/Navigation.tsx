"use client"
import Link from "next/link"
import { useState } from "react"
import { navigationItems } from "@/data/navigationData"

function resolveChildPath(parentPath: string, childPath: string) {
    if (!childPath) return parentPath
    if (childPath.startsWith("/")) return childPath
    const trimmedParent = parentPath.endsWith("/") ? parentPath.slice(0, -1) : parentPath
    return `${trimmedParent}/${childPath}`
}

export function NavigationPanel() {
    const [isOpen, setIsOpen] = useState(false)
    const [openItem, setOpenItem] = useState<string | null>(null)

    return (
        <nav className="w-full bg-white text-black shadow-md sticky top-0 z-50">
            {/* NAVBAR */}
            <div className="mx-auto flex max-w-6xl items-center justify-between h-8 md:h-12 px-4">


                {/* DESKTOP NAV */}
                <ul className="hidden md:flex h-full flex-row items-center gap-10 text-[0.75rem] font-semibold tracking-wide">
                    {navigationItems.map((item) => {
                        const children = (item.childrens ?? []).filter(
                            (child) =>
                                String(child.label ?? "").trim().length > 0 &&
                                String(child.path ?? "").trim().length > 0
                        )

                        return (
                            <li key={item.label} className="relative group h-full">
                                {children.length > 0 ? (
                                    <button className="inline-flex h-full items-center hover:text-emerald-600">
                                        {item.label}
                                    </button>
                                ) : (
                                    <Link href={item.path} className="inline-flex h-full items-center hover:text-emerald-600">
                                        {item.label}
                                    </Link>
                                )}

                                {/* DESKTOP DROPDOWN */}
                                {children.length > 0 && (
                                    <div className="pointer-events-none absolute left-0 top-full z-20 w-60 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                                        <div className="rounded-lg shadow-lg bg-white p-3 shadow-lg">
                                            <ul className="flex flex-col gap-2">
                                                {children.map((child) => (
                                                    <li key={child.label}>
                                                        <Link
                                                            href={resolveChildPath(item.path, child.path)}
                                                            className="block px-2 py-1 hover:bg-gray-100 rounded-md duration-150"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>

                {/* HAMBURGER BUTTON */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-xl"
                >
                    ☰
                </button>
            </div>

            {/* MOBILE OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* MOBILE DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-4 flex justify-between items-center">
                    <span className="font-bold"></span>
                    <button onClick={() => setIsOpen(false)}>✕</button>
                </div>

                {/* MOBILE NAV ITEMS */}
                <ul className="flex flex-col p-4 gap-2">
                    {navigationItems.map((item) => {
                        const children = (item.childrens ?? []).filter(
                            (child) =>
                                String(child.label ?? "").trim().length > 0 &&
                                String(child.path ?? "").trim().length > 0
                        )

                        const hasChildren = children.length > 0
                        const isExpanded = openItem === item.label

                        return (
                            <li key={item.label}>
                                {hasChildren ? (
                                    <>
                                        {/* PARENT BUTTON */}
                                        <button
                                            onClick={() =>
                                                setOpenItem(isExpanded ? null : item.label)
                                            }
                                            className="w-full flex justify-between items-center py-2 text-[0.75rem] font-semibold"
                                        >
                                            {item.label}
                                            <span>{isExpanded ? "-" : "+"}</span>
                                        </button>

                                        {/* SUBMENU */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${
                                                isExpanded ? "max-h-100" : "max-h-0"
                                            }`}
                                        >
                                            <ul className="pl-4 flex flex-col gap-2">
                                                {children.map((child) => (
                                                    <li key={child.label}>
                                                        <Link
                                                            href={resolveChildPath(item.path, child.path)}
                                                            className="block py-1 text-[0.75rem] text-gray-600"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="block py-2 text-[0.75rem] font-semibold"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}