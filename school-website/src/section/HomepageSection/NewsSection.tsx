import { PageContainer, TransulecentContainer, WhiteContainer } from "@/components/Container";
import { WhiteButton, WhiteOutlinedButton } from "@/components/items/Button";
import { NewsCard } from "@/components/items/Card";
import { Label } from "@/components/items/Label";




export function NewsSection() {
    return (
        <>
            <PageContainer color="bg-emerald-800" custom="gap-2">
                <Label textColor="text-white" text="LATEST NEWS" />
                <p className="text-white text-shadow-lg text-[0.8rem] md:text-[1rem]">Check out latest news up-to-date to day</p>
                <TransulecentContainer custom="md:flex-row flex-col p-2 gap-2 items-center justify-center rounded-[10px]">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </TransulecentContainer>
                <WhiteOutlinedButton position="items-center" text="CHECK MORE NEWS"/>
            </PageContainer>
        </>
    )
}