import React from "react";
import HeroSection from "../components/HeroSection";
import StatsWithFlags from "../components/StatsWithFlags";
import WhyDelve from "../components/WhyDelve";

const Home = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <HeroSection />
      <StatsWithFlags />
      <WhyDelve />
    </section>
  );
});

export default Home;
