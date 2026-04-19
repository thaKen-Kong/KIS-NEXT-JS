import { PageContainer, WhiteContainer } from "@/components/Container";
import { TwoRowCards } from "@/components/items/Card";
import { Label } from "@/components/items/Label";
import { PageIntroHeader } from "@/components/ui/PagesIntroHeader";

const left_content =
    <>
        <div className="p-5 flex flex-col gap-2 text-[0.8rem] md:text-[1rem]">
            <p className="text-white text-shadow-lg">We are committed to protecting every Filipino's right to quality and inclusive basic education.</p>
            <p className="text-white text-shadow-lg">We make this possible by ensuring:</p>
            <ul className="list-disc text-white px-2 md:px-10 text-shadow-lg">
                <li>Students learn in safe, supportive, and motivating environments.</li>
                <li>Teachers guide, inspire, and nurture every learner.</li>
                <li>School leaders and staff create systems that help learning thrive.</li>
                <li>Families and communities work hand-in-hand in raising lifelong learners.</li>
            </ul>
        </div>
    </>

const right_content = 
    <>
        <div className="p-5 text-white text-shadow-lg flex flex-col gap-2 text-[0.8rem] md:text-[1rem]">
            <p>We envision Filipinos who love their country, believe in their abilities, and use their talents to help build a better nation.</p>
            <p>We are a learner-centered institution that keeps improving to serve every Filipino better.</p>
        </div>
    </>

export default function MissionVision() {
    return (
        <>
            <PageContainer custom="gap-2">
                <PageIntroHeader headerText="MISSION AND VISION"/>
                <WhiteContainer custom="flex-col border-y-5 border-emerald-900 rounded-lg p-2   ">
                    <TwoRowCards left_title="MISSION" left_content={left_content} right_title="VISION" right_content={right_content}/>
                </WhiteContainer>
            </PageContainer>
        </>
    )
}
