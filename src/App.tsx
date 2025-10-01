import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import About from "./components/Benefits";
import { Footer } from "./components/Footer";
import ScreenshotSection from "./components/ScreenShots";
import Presentation from "./components/Presentation";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";

function App() {
  const [showPresentation, setShowPresentation] = useState(false);

  if (showPresentation) {
    return (
      <div>
        <Presentation />
        <button
          onClick={() => setShowPresentation(false)}
          className="fixed top-4 left-4 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-all"
        >
          ← Back to Website
        </button>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <div id="hero">
        <Hero onShowPresentation={() => setShowPresentation(true)} />
      </div>

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>
      <div id="feature">
        <ScreenshotSection />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Pricing Section */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer Section */}
      <div id="footer">
        <Footer />
      </div>
      {/* Analytics Component */}
      <Analytics />
    </main>
  );
}

export default App;
