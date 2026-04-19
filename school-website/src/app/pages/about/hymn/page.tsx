import { PageContainer } from "@/components/Container";
import { Label } from "@/components/items/Label";
import { PageIntroHeader } from "@/components/ui/PagesIntroHeader";

export default function Hymn() {
    return (
        <>
            <PageContainer custom="gap-2">
                <PageIntroHeader headerText="HYMN"/>

                <Label text="HYMN" />
            </PageContainer>
        </>
    )
}

