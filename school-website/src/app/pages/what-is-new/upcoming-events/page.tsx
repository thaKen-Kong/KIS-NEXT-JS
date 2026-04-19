import { PageContainer } from "@/components/Container";
import { Label } from "@/components/items/Label";
import { PageIntroHeader } from "@/components/ui/PagesIntroHeader";

export default function UpcomingEvents() {
    return (
        <>
            <PageContainer custom="gap-2">
                <PageIntroHeader headerText="UPCOMING EVENTS"/>

                <Label text="UPCOMING EVENTS" />
            </PageContainer>
        </>
    )
}

