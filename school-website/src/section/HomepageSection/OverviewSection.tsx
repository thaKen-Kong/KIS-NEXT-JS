import { PageContainer } from "@/components/Container";
import { TextCard } from "@/components/items/Card";


export function OverviewSection() {
    return (
        <> 
            <PageContainer custom=" border-t-[2px] border-emerald-800 border-b-[2px]" color="bg-emerald-50" header="OVERVIEW">
                <TextCard />
            </PageContainer>
        </>
    )
}