import { HorizontalScrollContainer, PageContainer } from "@/components/Container";
import { EventCard, EventInfoCard } from "@/components/items/Card";
import { Label } from "@/components/items/Label";


export function EventSection() {
    return (
        <>
            <PageContainer custom="border-y-[2px] border-emerald-800 justify-evenly">
                <Label text="UPCOMING EVENTS" />
                <p className="text-center text-[0.8rem] md:text-[1rem]">Be ready for the upcoming events in our school.</p>
                <HorizontalScrollContainer>
                    <EventInfoCard />
                    <EventInfoCard />
                    <EventInfoCard />
                </HorizontalScrollContainer>
            </PageContainer>
        </>
    )
}