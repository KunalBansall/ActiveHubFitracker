"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 'Free',
    features: [
      'Up to 100 members',
      'Basic reporting',
      'Email support',
      'Member app access',
    ],
  },
  {
    name: 'Pro',
    price: 'Free',
    features: [
      'Up to 500 members',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'API access',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Free',
    features: [
      'Unlimited members',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations',
      'On-site training',
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
            Choose the Perfect Plan for Your Gym
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer flexible pricing options to suit gyms of all sizes. Find the plan that works best for you.
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
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-normal text-gray-600">/month</span></p>
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
      </div>
    </section>
  );
}

