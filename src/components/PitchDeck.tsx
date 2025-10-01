import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'ActiveHub FitTracker',
    subtitle: 'Grow your gym. Retain more members. Unlock new revenue.',
    content: null,
    isTitle: true,
    bg: 'bg-gradient-to-br from-blue-600 to-green-500',
  },
  {
    title: 'The Problem',
    subtitle: 'Challenges gym owners face today',
    content: [
      'Manual/spreadsheet-based member management is inefficient',
      'Missed renewals → lost revenue',
      'High churn due to low engagement',
      'Limited ways to increase income beyond memberships',
      'Competing gyms are adopting digital solutions',
    ],
    bg: 'bg-gradient-to-br from-red-500 to-orange-500',
  },
  {
    title: 'The Solution',
    subtitle: 'All-in-one SaaS platform for gym owners',
    content: [
      '✔ Manage members',
      '✔ Track payments & renewals',
      '✔ Re-engage inactive members',
      '✔ Boost retention with notifications',
      '✔ Earn extra with Shop & Ads',
    ],
    bg: 'bg-gradient-to-br from-blue-400 to-indigo-600',
  },
  {
    title: 'Key Features',
    subtitle: 'Everything you need to grow your gym business',
    content: [
      '📊 Member Management – Easy dashboard to add, view, and track',
      '🔔 Renewal Reminders – Automated alerts save lost income',
      '👥 Inactive Member Detection – Win back members before they quit',
      '📍 Marketplace Listing – Attract new leads in your area',
      '🛍️ Shop Feature – Sell merchandise & supplements',
      '📢 Ad Management – Promote services, upsell training',
      '📈 Analytics Dashboard – Get insights into gym performance',
    ],
    bg: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    title: 'Shop Feature',
    subtitle: 'Extra Income Stream for Your Gym',
    content: [
      '🛒 Gym owners can become sellers inside ActiveHub',
      '\nSell:',
      '• Gym merchandise (t-shirts, bottles, bands)',
      '• Supplements & nutrition products',
      '• Personal training packages',
      '\nMembers can buy directly from your gym, no third party needed',
      '\nActiveHub = Your second source of income beyond memberships',
    ],
    bg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
  },
  {
    title: 'Business Impact',
    subtitle: 'Transform your gym operations',
    content: [
      '💰 Increase revenue with renewals, upsells & shop sales',
      '📉 Reduce costs with automation',
      '🤝 Retain more members with engagement tools',
      '🏆 Build a professional brand with modern tools',
      '📱 Mobile-friendly platform for you and your members',
    ],
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
  },
  {
    title: 'Pricing Plans',
    subtitle: 'Choose the perfect plan for your gym',
    content: [
      'Basic Plan: ₹999–₹1,499/month',
      '→ Member management + reminders',
      '\nGrowth Plan: ₹2,499–₹3,499/month',
      '→ Marketplace + inactivity detection + analytics',
      '\nPro Plan: ₹4,999–₹6,999/month',
      '→ Shop feature + ad management + branded app',
      '\n💡 Additional Revenue: Commission on marketplace & shop transactions',
    ],
    bg: 'bg-gradient-to-br from-rose-500 to-pink-600',
  },
  {
    title: 'ROI Example',
    subtitle: 'See the numbers for yourself',
    content: [
      '🏋️ Gym with 200 members @ ₹1,500/month',
      '\n❌ Without ActiveHub:',
      '~15% churn = ₹45,000 lost/month',
      '\n✅ With ActiveHub:',
      'Cut churn to 5% = Save ₹30,000/month',
      'Shop sales = +₹20,000/month average',
      '\n👉 Net impact: +₹50,000/month gain for ₹3,000 subscription',
    ],
    bg: 'bg-gradient-to-br from-sky-500 to-blue-600',
  },
  {
    title: 'Future Vision',
    subtitle: 'What\'s coming next',
    content: [
      '📱 Mobile App: White-labeled gym apps',
      '🏆 Community Challenges: Engage members across gyms',
      '📢 Ads Marketplace: Monetize through brand partnerships',
      '🤖 AI Analytics: Predict churn, recommend training packages',
      '🌐 Global Community: Connect with fitness professionals worldwide',
    ],
    bg: 'bg-gradient-to-br from-violet-500 to-fuchsia-500',
  },
  {
    title: 'ActiveHub FitTracker',
    subtitle: 'More Members. More Money. Less Effort.',
    content: [
      '🚀 Transform your gym into a growth engine with ActiveHub',
      '\n📅 Book a demo today and get 14 days free!',
    ],
    isTitle: true,
    bg: 'bg-gradient-to-br from-blue-600 to-green-500',
  },
];

const PitchDeck = ({ onClose }: { onClose: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
          <div className="text-sm font-medium text-gray-600">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close presentation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Content */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className={`h-full flex flex-col ${slide.bg} text-white p-8 md:p-12`}
            >
              <div className="mb-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                {slide.subtitle && (
                  <p className="text-xl md:text-2xl opacity-90">{slide.subtitle}</p>
                )}
              </div>

              {slide.content && (
                <div className="flex-1 flex items-center">
                  <ul className="space-y-3 text-lg md:text-xl leading-relaxed">
                    {slide.content.map((item, index) => (
                      <li key={index} className={item.startsWith('\n') || item.startsWith('•') ? 'mt-4' : ''}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center p-4 bg-gray-50 border-t">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-2 rounded-full ${currentSlide === 0 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-200'}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slide indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-2 rounded-full ${currentSlide === slides.length - 1 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-200'}`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
