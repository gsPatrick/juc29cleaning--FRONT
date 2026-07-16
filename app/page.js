import Hero from "@/components/organisms/Hero/Hero";
import Services from "@/components/organisms/Services/Services";
import TrustBar from "@/components/organisms/TrustBar/TrustBar";
import HomeEstimate from "@/components/organisms/HomeEstimate/HomeEstimate";
import AboutUs from "@/components/organisms/AboutUs/AboutUs";
import Marquee from "@/components/organisms/Marquee/Marquee";
import ServicesDetail from "@/components/organisms/ServicesDetail/ServicesDetail";
import Reviews from "@/components/organisms/Reviews/Reviews";
import BeforeAfter from "@/components/organisms/BeforeAfter/BeforeAfter";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <HomeEstimate />
      <AboutUs />
      <Marquee />
      <ServicesDetail />
      <Reviews />
      <BeforeAfter />
    </main>
  );
}

