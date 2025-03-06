import React from "react";
import GetInTouch from "../components/GetInTouch";

const ContactUs = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <GetInTouch />
    </section>
  );
});

export default ContactUs;