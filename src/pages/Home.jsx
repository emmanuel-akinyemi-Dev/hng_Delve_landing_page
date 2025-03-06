import React from "react";
import HeroSection from "../components/HeroSection";
import StatsWithFlags from "../components/StatsWithFlags";
import WhyDelve from "../components/WhyDelve";
import UnlockPremium from "../components/UnlockPremium";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsWithFlags />
      <WhyDelve />
      <UnlockPremium />
      <FAQ />
      <Testimonials />
    </div>
  );
};

export default Home;
