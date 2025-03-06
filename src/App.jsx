// import React from "react";
// import "./App.css";
// import DelveLogo from "./assets/delve-logo.svg"; // Import the SVG file

// function App() {
//   // Direct download link for the file
//   const fileDownloadLink =
//     "https://drive.google.com/uc?export=download&id=1cFtIcpxIn9U3ZH02Q2D6GsxmxXxUS9dj";

//   return (
//     <div className="landing-page">
//       <header className="header">
//         <img src={DelveLogo} alt="Delve Logo" className="logo" />
//         <h1>Delve</h1>
//         <p>Explore the world with Delve - Your ultimate travel companion.</p>
//       </header>

//       <section className="download-section">
//         <h2>Download Now</h2>
//         <div className="download-buttons">
//           <a
//             href={fileDownloadLink}
//             // href="https://play.google.com/store/apps/details?id=com.delve.app"
//             target="_blank"
//             download="fileDownloadLink"
//             rel="noopener noreferrer"
//             className="download-button"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//               alt="Get it on Google Play"
//             />
//           </a>
//           <a
//             href={fileDownloadLink}
//             // href="https://apps.apple.com/app/delve/id123456789"
//             target="_blank"
//             download="fileDownloadLink"
//             rel="noopener noreferrer"
//             className="download-button"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
//               alt="Download on the App Store"
//             />
//           </a>
//         </div>
//       </section>

//       {/* Add a section for the file download */}
//       <section className="file-download-section">
//         <h2>Download Our Brochure</h2>
//         <a
//           href={fileDownloadLink}
//           download="Delve_Brochure.pdf" // Optional: Specify the file name for download
//           className="file-download-button"
//         >
//           Download Brochure
//         </a>
//       </section>

//       <footer className="footer">
//         <p>&copy; 2025 Delve. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
