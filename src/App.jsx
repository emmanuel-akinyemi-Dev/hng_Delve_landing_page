import React from "react";
import "./App.css";
import DelveLogo from "./assets/delve-logo.svg"; // Import the SVG file

function App() {
  return (
    <div className="landing-page">
      <header className="header">
        <img src={DelveLogo} alt="Delve Logo" className="logo" />{" "}
        {/* Add the SVG image */}
        <h1>Delve</h1>
        <p>
          Explore the world with Delve - Your ultimate language learning
          companion.
        </p>
      </header>

      <section className="download-section">
        <h2>Download Now</h2>
        <div className="download-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.delve.app"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
            />
          </a>
          <a
            href="https://apps.apple.com/app/delve/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
            />
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Delve. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
