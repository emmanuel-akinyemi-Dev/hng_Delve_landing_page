import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
// import Pricing from "./pages/Pricing";
// import Faq from "./pages/Faq";
// import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const contactUsRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Pass scroll functions to Navbar */}
      <Navbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToPricing={() => scrollToSection(pricingRef)}
        scrollToFaq={() => scrollToSection(faqRef)}
        scrollToContactUs={() => scrollToSection(contactUsRef)}
      />

      {/* Assign refs to each section */}
      <Home ref={homeRef} />
      {/* <Pricing ref={pricingRef} /> */}
      {/* <Faq ref={faqRef} /> */}
      {/* <ContactUs ref={contactUsRef} /> */}
      <Footer />
    </div>
  );
};

export default App;
