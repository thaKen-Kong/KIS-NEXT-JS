import { PageContainer } from "@/components/Container";
import { GreenButton } from "@/components/items/Button";
import { CardOne, TextCardWhite, TwoColumnCard, VideoCard } from "@/components/items/Card";


export function OverviewSection() {
    return (
        <> 
            <PageContainer custom="gap-2" color="bg-emerald-50" header="OVERVIEW">
                <div className="flex flex-col md:flex-row items-center gap-10 justify-evenly w-[90%]">
                    <VideoCard header="FEATURED VIDEO" source="https://www.youtube.com/embed/SJTpYdrAVfM?si=rb9vwBlLcMS0f_bN"/>
                    <TwoColumnCard 
                    firstContainerLabel="ABOUT US"
                    firstContainerContent={[<p key="one">Kaytitinga Integrated School provides a safe, supportive learning environment that builds strong foundations in academics and character.</p>, <GreenButton key="two" text="LEARN MORE"/>]}

                    secondContainerLabel="JOIN US"
                    secondContainerContent={[<p key="one">Join KIS for dedicated teachers, active student programs, and a campus community that helps learners grow with confidence.</p>, <GreenButton key="two" text="JOIN NOW" />]}
                    />
                </div>
            </PageContainer>
        </>
    )
}