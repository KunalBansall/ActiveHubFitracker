"use client"

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Plan',
    price: '₹999',
    originalPrice: '₹1,499',
    features: [
      'Member management dashboard',
      'Automated renewal reminders',
      'Basic member tracking',
      'Email support',
      'Up to 200 members',
    ],
  },
  {
    name: 'Growth Plan',
    price: '₹2,499',
    originalPrice: '₹3,499',
    features: [
      'Everything in Basic',
      'Marketplace listing',
      'Inactive member detection',
      'Advanced analytics dashboard',
      'Priority support',
      'Up to 500 members',
    ],
    recommended: true,
  },
  {
    name: 'Pro Plan',
    price: '₹4,999',
    originalPrice: '₹6,999',
    features: [
      'Everything in Growth',
      'Shop feature for merchandise',
      'Ad management system',
      'Branded mobile app',
      'Advanced reporting',
      'Unlimited members',
      '24/7 phone support',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Gym with ActiveHub FitTracker
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to grow your gym, retain more members, and unlock new revenue streams. 
            Our SaaS platform scales with your business needs.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={index === 1 ? { scale: 0.95 } : { scale: 1.05 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ${
                plan.recommended ? 'border-2 border-blue-500' : 'hover:border-2 hover:border-blue-500'
              } relative overflow-hidden`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-lg text-sm font-semibold">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold text-green-600">{plan.price}<span className="text-lg font-normal text-gray-600">/month</span></p>
                {plan.originalPrice && (
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-lg text-gray-500 line-through">{plan.originalPrice}/month</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Save ₹{(parseInt(plan.originalPrice.replace('₹', '').replace(',', '')) - parseInt(plan.price.replace('₹', '').replace(',', ''))).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg transition-colors ${
                  plan.recommended
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        {/* ROI Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Proven ROI: Save ₹30,000+ Monthly
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our gym with 200 members reduced churn from 15% to 5%, saving ₹30,000/month in lost revenue. 
            Plus, the Shop feature generates an average ₹20,000/month in additional income.
          </p>
          <div className="mt-6 bg-green-100 rounded-lg p-4 inline-block">
            <p className="text-lg font-semibold text-green-800">
              💰 Net Impact: +₹50,000/month gain for ₹3,000 subscription
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

