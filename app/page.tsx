import { CoverDemo } from "@/components/youtube-project-1/CoverDemo";
import FooterSection from "@/components/youtube-project-1/Footer";
import { HowItWorks } from "@/components/youtube-project-1/HowItWorks";
import MainSection from "@/components/youtube-project-1/MainSection";
import { NavbarDemo } from "@/components/youtube-project-1/Nav";
import StatsSection from "@/components/youtube-project-1/StatsSection";
import Testimonials from "@/components/youtube-project-1/Testimonials";

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <CoverDemo />
      <MainSection />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <FooterSection />
    </main>
  );
}
