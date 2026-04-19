import { PageContainer, WhiteContainer } from "@/components/Container";
import { TwoRowCards } from "@/components/items/Card";
import { Label } from "@/components/items/Label";
import { PageIntroHeader } from "@/components/ui/PagesIntroHeader";

export default function MissionVision() {
    return (
        <>
            <PageContainer custom="gap-2">
                <PageIntroHeader headerText="MISSION AND VISION"/>
                <WhiteContainer custom="flex-col border-y-5 border-emerald-900 rounded-lg p-2   ">
                    <TwoRowCards left_title="MISSION" right_title="VISION" right_content={[<p></p>]}/>
                </WhiteContainer>
            </PageContainer>
        </>
    )
}
