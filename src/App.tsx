import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardShowcase from "./components/DashboardShowcase";
import ProductShowcase from "./components/ProductShowcase";
import Features from "./components/Features";
import ShopManagementShowcase from "./components/ShopManagementShowcase";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
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
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <div id="hero">
        <Hero onShowPresentation={() => setShowPresentation(true)} />
      </div>

      {/* Dashboard Showcase */}
      <div id="dashboard">
        <DashboardShowcase />
      </div>

      {/* Product Showcase */}
      <div id="product-showcase">
        <ProductShowcase />
      </div>

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>
      
      {/* Screenshots Section */}
      <div id="screenshots">
        <ScreenshotSection />
      </div>

      {/* Shop Management Showcase */}
      <div id="shop">
        <ShopManagementShowcase />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Pricing Section */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* About Us Section */}
      <div id="about">
        <AboutUs />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
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
