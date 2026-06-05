import HomeHero from "@/components/home/HomeHero";
import HomeStats from "@/components/home/HomeStats";
import HomeServices from "@/components/home/HomeServices";
import HomeWhyChooseUs from "@/components/home/HomeWhyChooseUs";
import PartnerBanks from "@/components/home/PartnerBanks";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HomeWhyChooseUs />
      <PartnerBanks />
      <Testimonials />
    </>
  );
}
