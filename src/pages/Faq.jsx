 
import React from "react";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

const Faq = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <FAQ />
      <Testimonials/>
    </section>
  );
});

export default Faq;