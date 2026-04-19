"use client"
import { Props } from "@/utils/Props";
import { ReactNode, useState, useRef, useEffect } from "react";
import { Label } from "./items/Label";
import { GreenOutlinedButton } from "./items/Button";
import { ScrollReveal } from "./animations";


export function PageContainer({custom = "", color = "" ,children, header} : Props) {
    return (
        <>
        <ScrollReveal>
            <section className={` ${color} ${custom} flex flex-col items-center shadow-lg min-w-full min-h-screen h-auto py-2   `}>
                {header ? (<div className=" flex w-full"><Label orientation="center" size={3} textColor="text-emerald-800" text={header}/></div>) : <></>}
                {children}
            </section>
        </ScrollReveal>
        </>
    )
}

export function WhiteContainer( {children, custom}: {children? : ReactNode, custom? : string} ) {
    return (
        <>
            <div className={`${custom} mx-auto flex w-[90%] min-h-100 h-auto shadow-lg items-center gap-x-4 bg-white`}>
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


type BoxData = {
  title? : string
  info? : string
  year? : string
  highlight : string
}

type MultipleBoxContainer = {
  data? : BoxData[]
}

export function MultipleBoxContainer({data = []} : MultipleBoxContainer) {

  const boxStyle = {

  }

  return (
    <>
<div className="flex w-full gap-4">
  {/* Timeline line */}
  <div className="relative flex flex-col items-center">
    <div className="w-[4px] bg-emerald-800 rounded-full flex-1"></div>
  </div>

  {/* Content */}
  <div className="flex flex-col gap-6 w-[100%] min-w-0">
    {data?.map((item, key) => (
      <div key={key} className="relative flex gap-4 items-start min-w-0">
        
        {/* Timeline dot */}
        <div className="absolute -left-[26px] top-3 w-[14px] h-[14px] bg-white border-4 border-emerald-900 b rounded-full shadow-lg"></div>

        {/* Card */}
        <div className="min-w-0 w-full p-4 border border-emerald-900 border-b-4 border-2 rounded-xl shadow-md hover:-translate-y-[1px] hover:border-emerald-700 hover:bg-green-50 duration-200">
          <h3 className="font-extrabold text-emerald-900 md:text-[1rem]">
            {item.year} - {item.title}            
          </h3>
          <p className="text-gray-700 text-[0.7rem] md:text-[0.9rem] leading-relaxed break-words">
            {item.info}
          </p>
          <h2 className="text-[0.7rem] font-bold opacity-50">{item.highlight}</h2>
        </div>

      </div>
    ))}
  </div>
</div>
    </>
  )
}