import { HeroSection } from "@/section/HomepageSection/HeroSection";
import { WhiteContainer, PageContainer } from "../components/Container";
import { OverviewSection } from "@/section/HomepageSection/OverviewSection";



export default function Home() {
  return (
    <> 
    <div className="flex flex-col gap-10 p-0 m-0">
      <HeroSection />
      <OverviewSection />
    </div>
    </>
  );
}
