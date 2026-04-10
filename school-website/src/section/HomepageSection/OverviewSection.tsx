import { PageContainer } from "@/components/Container";
import { GreenButton } from "@/components/items/Button";
import { CardOne, TextCardWhite, TwoColumnCard, VideoCard } from "@/components/items/Card";


export function OverviewSection() {
    return (
        <> 
            <PageContainer custom="gap-2 border-t-[2px] border-emerald-800 border-b-[2px]" color="bg-emerald-50" header="OVERVIEW">
                <div className="flex flex-col md:flex-row items-center gap-10 justify-evenly w-[90%]">
                    <VideoCard header="FEATURED VIDEO" source="https://www.youtube.com/embed/SJTpYdrAVfM?si=rb9vwBlLcMS0f_bN"/>
                    <TwoColumnCard 
                    firstContainerLabel="ABOUT US"
                    firstContainerContent={<><GreenButton /></>}

                    secondContainerLabel="JOIN US"/>
                </div>
            </PageContainer>
        </>
    )
}