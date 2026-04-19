"use client"
import { ReactNode, useEffect, useState } from "react"
import { Label } from "./Label"
import { images } from "../../data/images"
import { GreenOutlinedButton } from "./Button"
import { PopupWrapper } from "../animations"

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
            <CardTemplate custom="rounded-[10px]" header={header}>
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
    
    const card_stlye = "shadow-lg min-w-[100%] min-h-[200px] md:min-h-[200px] border-x-[5px] border-y-[2px] p-2 rounded-[10px] border-emerald-800 md:min-w-[300px] flex flex-col items-center"
    
    return (    
        <>
            <div className="flex w-[90%] gap-5 flex-col ">
                <PopupWrapper>
                <div className={`${card_stlye}`}>
                    {firstContainerLabel ? <><h2 className="flex w-full text-shadow-lg text-emerald-900 font-extrabold text-[1rem] md:text-[1.5rem]">{firstContainerLabel}</h2></> : <></>}
                    <div className="p-2 w-full h-full flex-1 flex flex-col justify-between text-[0.8rem] md:text-[1rem]">
                        {firstContainerContent}
                    </div>
                </div>
                </PopupWrapper>
                <PopupWrapper>
                <div className={`${card_stlye}`}>
                    {secondContainerLabel ? <><h2 className="flex w-full text-shadow-lg text-emerald-900 font-extrabold text-[1rem] md:text-[1.5em]">{secondContainerLabel}</h2></> : <></>}
                    <div className="p-2 w-full h-full flex-1 flex flex-col justify-between text-[0.8rem] md:text-[1rem]">
                        {secondContainerContent}
                    </div>
                </div>
                </PopupWrapper>
            </div>
        </>
    )
}

export function NewsCard({source = images.bg_1.src, title = "NEWS SAMPLE TITLE", author = "sample author", glimpse = "news content sample"} : {title? : string, source? : string, author? : string, glimpse? : string}) {
    
    
    return (
        <>
        <PopupWrapper>
            <div className="duration-200 hover:-translate-y-1 bg-black w-[100%] rounded-[10px] md:w-[300px] max-h-400px shadow-lg overflow-hidden flex flex-col group">
                <img src={source} alt={title} className="bg-black opacity-70 w-full h-[200px] object-center object-cover"/>
                <div className="p-2 flex flex-col gap-2 rounded-t-[20px] bg-white flex-1">
                    <div className="flex flex-col items-start justify-between">
                        <h3 className="text-emerald-900 font-extrabold text-[1rem] md:text-[1.1rem] text-shadow-lg text-center">{title}</h3>
                        <p className="text-[0.75rem] md:text-[0.85rem] text-gray-700 px-3 bg-gray-200 rounded-4xl font-semibold">{author}</p>
                    </div>
                    <div className="break-words text-[0.8rem] md:text-[0.9rem] text-gray-700">
                        {glimpse.slice(0, 100)}
                    </div>
                    <GreenOutlinedButton text="READ MORE" />
                </div>
            </div>
        </PopupWrapper>
        </>
    )
}


export function EventCard({
  source = images.bg_1.src,
  title = "EVENT TITLE",
  date = "April 20, 2026",
  location = "Main Hall",
  description = "Short event description"
}: {
  title?: string,
  source?: string,
  date?: string,
  location?: string,
  description?: string
}) {

  return (
    <div className="duration-200 hover:-translate-y-1 bg-black md:w-[500px] h-[160px] rounded-[10px] shadow-lg overflow-hidden flex flex-row">

      {/* IMAGE */}
      <img
        src={source}
        alt={title}
        className="w-[30%] h-full object-cover opacity-80"
      />

      {/* CONTENT */}
      <div className="p-3 flex flex-col justify-between bg-white flex-1 min-w-0">

        {/* TOP */}
        <div className="flex flex-col gap-1">
          <h3 className="text-emerald-900 font-extrabold text-[1rem] md:text-[1.1rem]">
            {title}
          </h3>

          <p className="text-[0.75rem] text-gray-600 font-semibold">
            {date}
          </p>

          {location && (
            <p className="text-[0.75rem] text-gray-500">
              📍 {location}
            </p>
          )}
        </div>

        {/* DESCRIPTION */}
        {description && (
          <p className="text-[0.8rem] text-gray-700 line-clamp-2">
            {description}
          </p>
        )}

      </div>
    </div>
  );
}

export function EventInfoCard(
    {image_source = images.bg_1.src,
     card_title = "",
     card_info = "",
     card_date = "",
    } 
    : 
    {image_source? : string
     card_title? : string
     card_info? : string
     card_date? : string
    }

) {
return (
<>
  <div className="group flex-shrink-0 relative flex flex-col bg-black rounded-lg w-full md:w-[350px] h-[200px] md:h-[300px] overflow-hidden transition duration-300">

    {/* IMAGE */}
    <img
      src={image_source}
      alt={card_title}
      className="w-full h-full object-cover object-center opacity-70 transition duration-300 group-hover:scale-110"
    />

    {/* OVERLAY */}
    <div className="absolute bottom-0 w-full p-2 text-white  bg-black/20 group-hover:bg-black/50 transition duration-300">

      <div className="flex flex-row justify-between items-center">
        <h2 className="font-extrabold">{card_title}</h2>
        <h2 className="font-semibold bg-black/50 rounded-full px-2 text-[0.75rem] md:text-[1rem]">
          WHEN? {card_date}
        </h2>
      </div>

      <p className="break-words text-[0.75rem] md:text-[1rem]">
        {card_info}
      </p>

    </div>
  </div>
</>
);
}

type BoxContent = {
    label : string
    content : string
}


type TwoRowCardsProps = {
    left_title? : string
    left_content? : ReactNode
    right_title? : string
    right_content? : ReactNode
}


export function TwoRowCards({left_title, right_title, left_content = [], right_content} : TwoRowCardsProps) {
    
    const card_style = "w-full md:w-50 flex-col flex-1 shadow-xl bg-emerald-800 border-3 border-b-15 border-emerald-950 hover:border-green-950 hover:bg-green-900 duration-300 rounded-lg"


    return (
        <>
            <div className="gap-4 flex flex-col md:flex-row w-full min-w-0 min-h-100 h-auto shadow-xl rounded-[10px]">
                {/*LEFT CONTAINER*/}
                <div className={card_style}>
                    <Label text={left_title} textColor="text-white"/>
                    {left_content}
                </div>


                {/*RIGHT CONTAINER*/}
                <div className={card_style}>
                    <Label text={right_title} textColor="text-white"/>
                    {right_content}
                </div>
            </div>
        </>
    )
}