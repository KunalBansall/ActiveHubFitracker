import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import About from "./components/Benefits";
import { Footer } from "./components/Footer";
import ScreenshotSection from "./components/ScreenShots";

function App() {
  return (
    <main>
      {/* Hero Section */}
      <div id="hero">
        <Hero />
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
    </main>
  );
}

export default App;
