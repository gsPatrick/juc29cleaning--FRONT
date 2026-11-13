import Hero from "@/components/organisms/Hero/Hero";
import Services from "@/components/organisms/Services/Services";
import TrustBar from "@/components/organisms/TrustBar/TrustBar";
import HomeEstimate from "@/components/organisms/HomeEstimate/HomeEstimate";
import WhyUs from "@/components/organisms/WhyUs/WhyUs";
import Reviews from "@/components/organisms/Reviews/Reviews";
import BeforeAfter from "@/components/organisms/BeforeAfter/BeforeAfter";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <HomeEstimate />
      <WhyUs />
      <Reviews />
      <BeforeAfter />
    </main>
  );
}

