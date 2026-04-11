

export function GreenButton({position = "items-start", text = "BUTTON"} : {position? : string, text?: string}) {
    return (
        <>
            <div className={`flex flex-col ${position}`}>
            <button className="duration-100 active:translate-y-[2px] active:text-gray-300 active:border-b-[2px] hover:bg-emerald-700 hover:border-emerald-900 font-extrabold min-w-25 px-4 h-[35px] md:h-[50px] md:text-[0.9rem] text-[0.75rem] rounded-[30px] text-white bg-emerald-800 text-shadow-lg shadow-lg border-b-[4px] border-emerald-950">
                {text}
            </button>
            </div>
        </>
    )
}


export function WhiteButton({position = "items-start", text = "BUTTON"} : {position? : string, text?: string}) {
    return (
        <>
            <div className={`flex flex-col ${position}`}>
            <button className="duration-100 active:translate-y-[2px] active:text-gray-800 active:border-b-[2px] hover:bg-gray-200 hover:border-gray-400 font-extrabold min-w-25 px-4 h-[35px] md:h-[50px] md:text-[0.9rem] text-[0.75rem] rounded-[30px] text-gray-600 bg-white text-shadow-lg shadow-lg border-b-[4px] border-gray-400">
                {text}
            </button>
            </div>
        </>
    )
}

export function GreenOutlinedButton({position = "items-start", text = "BUTTON"} : {position? : string, text?: string}) {
    return (
        <>
            <div className={`flex flex-col ${position}`}>
            <button className="duration-100 active:translate-y-[2px] active:text-emerald-900 hover:bg-emerald-700 hover:text-white font-extrabold min-w-25 px-4 h-[35px] md:h-[50px] md:text-[0.9rem] text-[0.75rem] rounded-[30px] text-emerald-800 bg-transparent text-shadow-lg border-[2px] border-emerald-800">
                {text}
            </button>
            </div>
        </>
    )
}

export function WhiteOutlinedButton({position = "items-start", text = "BUTTON"} : {position? : string, text?: string}) {
    return (
        <>
            <div className={`flex flex-col w-[100%] p-2 ${position}`}>
            <button className="duration-100 active:text-gray-400 active:border-gray-400 font-extrabold min-w-25 px-4 h-[35px] md:h-[50px] md:text-[0.9rem] text-[0.75rem] rounded-[30px] text-white bg-transparent text-shadow-lg border-[2px] border-white">
                {text}
            </button>
            </div>
        </>
    )
}
