import { PageContainer } from "@/components/Container";
import { Label } from "@/components/items/Label";
import { PageIntroHeader } from "@/components/ui/PagesIntroHeader";

export default function Administration() {
    return (
        <>
            <PageContainer custom="gap-2">
                <PageIntroHeader headerText="ADMINISTRATIONS"/>

                <Label text="ADMINISTRATIONS" />
            </PageContainer>
        </>
    )
}

