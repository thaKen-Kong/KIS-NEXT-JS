"use client"
import { Props } from "@/utils/Props";
import { ReactNode, useState, useRef, useEffect } from "react";
import { Label } from "./items/Label";
import { GreenOutlinedButton } from "./items/Button";


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


export function HorizontalScrollContainer({ children }: { children?: ReactNode }) {

  const scrollRef = useRef<HTMLDivElement>(null);

  const [hasOverflow, setHasOverflow] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkOverflow = () => {
    const el = scrollRef.current;
    if (!el) return;

    setHasOverflow(el.scrollWidth > el.clientWidth);
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
  };

  useEffect(() => {
    checkOverflow();

    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkOverflow);
    window.addEventListener("resize", checkOverflow);

    return () => {
      el.removeEventListener("scroll", checkOverflow);
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      {/* WRAPPER (needed for absolute positioning) */}
      <div className="relative w-[90%]">

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="p-2 flex flex-row items-center overflow-x-auto gap-3 scroll-smooth"
        >
          {children}
        </div>

        {/* LEFT ARROW */}
        {hasOverflow && (
          <button
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
                       w-8 h-8 rounded-full text-white
                       disabled:opacity-80"
          >
            ←
          </button>
        )}

        {/* RIGHT ARROW */}
        {hasOverflow && (
          <button
            onClick={handleScrollRight}
            disabled={!canScrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
                       w-8 h-8 rounded-full border-emerald-900 text-white
                       disabled:opacity-30"
          >
            →
          </button>
        )}

      </div>

      {/* SEPARATE BUTTON */}
      <div className="mt-2">
        <GreenOutlinedButton text="VIEW MORE EVENTS" />
      </div>
    </>
  );
}