import { HeroSection } from "@/section/HomepageSection/HeroSection";
import { WhiteContainer, PageContainer } from "../components/Container";
import { OverviewSection } from "@/section/HomepageSection/OverviewSection";
import { NewsSection } from "@/section/HomepageSection/NewsSection";
import { EventSection } from "@/section/HomepageSection/EventsSection";
import { ExploreMoreSection } from "@/section/HomepageSection/ExploreMoreSection";



export default function Home() {
  return (
    <> 
    <div className="flex flex-col gap-10 p-0 m-0">
      <HeroSection />
      <OverviewSection />
      <NewsSection />
      <EventSection />
      <ExploreMoreSection />
    </div>
    </>
  );
}
