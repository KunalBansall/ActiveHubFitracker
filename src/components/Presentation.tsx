"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  Target, 
  DollarSign,
  Zap,
  Globe,
  CheckCircle,
  XCircle,
  Dumbbell,
  BarChart3,
  Store,
  Megaphone,
  Smartphone,
  Users2,
  TrendingDown,
  Lightbulb
} from "lucide-react";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

const Slide = ({ children, className = "" }: SlideProps) => (
  <div className={`min-h-screen flex items-center justify-center p-4 md:p-8 ${className}`}>
    <div className="max-w-6xl mx-auto text-center w-full">
      {children}
    </div>
  </div>
);

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const totalSlides = 10;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation and touch support
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key >= '1' && event.key <= '9') {
        event.preventDefault();
        const slideIndex = parseInt(event.key) - 1;
        if (slideIndex < totalSlides) {
          goToSlide(slideIndex);
        }
      } else if (event.key === '0') {
        event.preventDefault();
        goToSlide(9); // Slide 10 (index 9)
      }
    };

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          nextSlide();
        } else {
          // Swipe right - previous slide
          prevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const slides = [
    // Slide 1: Title
    {
      bg: "bg-gradient-to-br from-blue-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <Dumbbell className="w-12 h-12 text-blue-400" />
              <h1 className="text-5xl md:text-7xl font-bold">ActiveHub FitTracker</h1>
            </div>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
              "Grow your gym. Retain more members. Unlock new revenue."
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </motion.div>
        </Slide>
      )
    },
    
    // Slide 2: The Problem
    {
      bg: "bg-gradient-to-br from-red-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <XCircle className="w-12 h-12 text-red-400" />
              <h2 className="text-4xl md:text-6xl font-bold">The Problem</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl">Manual/spreadsheet-based member management is inefficient</p>
                </div>
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl">Missed renewals → lost revenue</p>
                </div>
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl">High churn due to low engagement</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl">Limited ways to increase income beyond memberships</p>
                </div>
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-lg md:text-xl">Competing gyms are adopting digital solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Slide>
      )
    },
    
    // Slide 3: The Solution
    {
      bg: "bg-gradient-to-br from-green-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <Lightbulb className="w-12 h-12 text-green-400" />
              <h2 className="text-4xl md:text-6xl font-bold">The Solution</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">ActiveHub FitTracker – All-in-one SaaS platform for gym owners</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg md:text-xl">Manage members</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg md:text-xl">Track payments & renewals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg md:text-xl">Re-engage inactive members</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg md:text-xl">Boost retention with notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg md:text-xl">Earn extra with Shop & Ads</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Slide>
      )
    },
    
    // Slide 4: Key Features
    {
      bg: "bg-gradient-to-br from-purple-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <Target className="w-12 h-12 text-purple-400" />
              <h2 className="text-4xl md:text-6xl font-bold">Key Features for Gym Owners</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, text: "Member Management – Easy dashboard to add, view, and track" },
                { icon: Zap, text: "Renewal Reminders – Automated alerts save lost income" },
                { icon: TrendingDown, text: "Inactive Member Detection – Win back members before they quit" },
                { icon: Globe, text: "Marketplace Listing – Attract new leads in your area" },
                { icon: Store, text: "Shop Feature – Sell merchandise & supplements (new income source)" },
                { icon: Megaphone, text: "Ad Management – Promote services, upsell training" },
                { icon: BarChart3, text: "Analytics Dashboard – Get insights into gym performance" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                >
                  <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <p className="text-sm md:text-base">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Slide>
      )
    },
    
    // Slide 5: Shop Feature
    {
      bg: "bg-gradient-to-br from-orange-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <ShoppingCart className="w-12 h-12 text-orange-400" />
              <h2 className="text-4xl md:text-6xl font-bold">Shop Feature (Extra Income Stream)</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Gym owners can become sellers inside ActiveHub</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-orange-400">Sell:</h4>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400" />
                        <span>Gym merchandise (t-shirts, bottles, bands)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400" />
                        <span>Supplements & nutrition products</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400" />
                        <span>Personal training packages</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl mb-4">Members can buy directly from your gym, no third party needed.</p>
                    <div className="bg-orange-400/20 rounded-lg p-4">
                      <p className="text-xl font-bold text-orange-400">ActiveHub = Your second source of income beyond memberships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Slide>
      )
    },
    
    // Slide 6: Business Impact
    {
      bg: "bg-gradient-to-br from-teal-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <TrendingUp className="w-12 h-12 text-teal-400" />
              <h2 className="text-4xl md:text-6xl font-bold">Business Impact</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { icon: DollarSign, text: "Increase revenue with renewals, upsells & shop sales" },
                { icon: Zap, text: "Reduce costs with automation" },
                { icon: Users2, text: "Retain more members with engagement" },
                { icon: Target, text: "Build a professional brand with modern tools" }
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all"
                >
                  <impact.icon className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                  <p className="text-lg font-medium">{impact.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Slide>
      )
    },
    
    // Slide 7: Pricing Model
    {
      bg: "bg-gradient-to-br from-indigo-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <DollarSign className="w-12 h-12 text-indigo-400" />
              <h2 className="text-4xl md:text-6xl font-bold">Pricing Model (SaaS)</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Basic Plan",
                  price: "₹999–₹1,499/month",
                  features: ["Member management", "Renewal reminders"]
                },
                {
                  name: "Growth Plan",
                  price: "₹2,499–₹3,499/month",
                  features: ["Marketplace listing", "Inactivity detection", "Analytics"]
                },
                {
                  name: "Pro Plan",
                  price: "₹4,999–₹6,999/month",
                  features: ["Shop feature", "Ad management", "Branded app"]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-xl text-indigo-400 font-semibold mb-4">{plan.price}</p>
                  <ul className="space-y-2 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 bg-indigo-400/20 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg">
                <strong>Additional Revenue:</strong> ActiveHub earns via commissions on marketplace leads & shop transactions, 
                while gym owners keep most profits.
              </p>
            </div>
          </motion.div>
        </Slide>
      )
    },
    
    // Slide 8: ROI Example
    {
      bg: "bg-gradient-to-br from-emerald-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <BarChart3 className="w-12 h-12 text-emerald-400" />
              <h2 className="text-4xl md:text-6xl font-bold">ROI Example</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6">Gym with 200 members @ ₹1,500/month</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-400/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-red-400 mb-4">Without ActiveHub</h4>
                    <p className="text-lg">~15% churn = ₹45,000 lost/month</p>
                  </div>
                  <div className="bg-green-400/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-400 mb-4">With ActiveHub</h4>
                    <p className="text-lg">Cut churn to 5% = Save ₹30,000/month</p>
                    <p className="text-lg mt-2">Shop sales = +₹20,000/month average</p>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-400/20 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold">
                  👉 Net impact: +₹50,000/month gain for ₹3,000 subscription
                </p>
              </div>
            </div>
          </motion.div>
        </Slide>
      )
    },
    
    // Slide 9: Future Vision
    {
      bg: "bg-gradient-to-br from-violet-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <Globe className="w-12 h-12 text-violet-400" />
              <h2 className="text-4xl md:text-6xl font-bold">Future Vision</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Smartphone, text: "Mobile App: White-labeled gym apps" },
                { icon: Users2, text: "Community Challenges: Engage members across gyms" },
                { icon: Megaphone, text: "Ads Marketplace: Monetize through brand partnerships" },
                { icon: Zap, text: "AI Analytics: Predict churn, recommend training packages" }
              ].map((vision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                >
                  <vision.icon className="w-10 h-10 text-violet-400 mb-4" />
                  <p className="text-lg font-medium">{vision.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Slide>
      )
    },
    
    // Slide 10: Closing
    {
      bg: "bg-gradient-to-br from-blue-900 to-black",
      content: (
        <Slide className="text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-3 mb-8">
              <Dumbbell className="w-12 h-12 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-bold">ActiveHub FitTracker</h1>
            </div>
            <p className="text-2xl md:text-3xl text-blue-400 mb-8 font-bold">
              "More Members. More Money. Less Effort."
            </p>
            <div className="bg-blue-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl mb-4">🚀 Transform your gym into a growth engine with ActiveHub.</p>
              <div className="flex justify-center gap-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400/10 transition-all font-semibold"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </Slide>
      )
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Navigation Controls */}
      <div className="fixed top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-50">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all touch-manipulation"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
      
      <div className="fixed top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-50">
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all touch-manipulation"
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
      
      {/* Slide Indicators */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-1 md:gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all touch-manipulation ${
              currentSlide === index 
                ? "bg-white" 
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
      
      {/* Slide Counter */}
      <div className="fixed top-4 md:top-8 right-4 md:right-8 z-50 bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-lg text-sm md:text-base">
        {currentSlide + 1} / {totalSlides}
      </div>
      
      {/* Keyboard Shortcuts Help */}
      <div className="fixed bottom-6 md:bottom-8 left-4 md:left-8 z-50 bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm">
        <div className="hidden md:block">
          <div>← → or Space: Navigate</div>
          <div>1-0: Jump to slide</div>
        </div>
        <div className="md:hidden">
          <div>Tap arrows or dots</div>
        </div>
      </div>
      
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`${slides[currentSlide].bg} min-h-screen`}
        >
          {slides[currentSlide].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
