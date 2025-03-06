import React from "react";
import UnlockPremium from "../components/UnlockPremium";

const Pricing = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <UnlockPremium />
    </section>
  );
});

export default Pricing;