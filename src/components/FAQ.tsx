"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I start using ActiveHub FitTracker?",
      answer: "You can start using ActiveHub FitTracker immediately after signing up. Our setup process takes less than 10 minutes, and you'll have access to all features right away. We also provide free onboarding support to help you migrate your existing member data."
    },
    {
      question: "What's included in the free trial?",
      answer: "The free trial includes access to all features for 14 days with no credit card required. You can manage unlimited members, use all analytics features, and even set up your shop to test the revenue generation capabilities."
    },
    {
      question: "How does the shop feature help generate additional revenue?",
      answer: "Our shop feature allows you to sell merchandise, supplements, and training packages directly to members. Most gym owners see an additional ₹20,000-₹75,000 monthly revenue from shop sales alone. We handle payment processing and provide inventory management tools."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes! We provide comprehensive training through video tutorials, live webinars, and one-on-one onboarding sessions. Our support team is available via chat, email, and phone to help you get the most out of the platform."
    },
    {
      question: "Can I migrate my existing member data?",
      answer: "Absolutely. We provide free data migration services to help you transfer member information, payment records, and other data from your current system. Our team handles the entire process to ensure no data is lost."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, UPI, net banking, and digital wallets. For annual subscriptions, we also accept bank transfers. All payments are processed securely through our payment partners."
    },
    {
      question: "Is my member data secure?",
      answer: "Yes, we take data security seriously. All data is encrypted in transit and at rest. We're compliant with Indian data protection regulations and use enterprise-grade security measures to protect your information."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll continue to have access to the platform until the end of your current billing period."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, we offer custom integrations with popular fitness apps, payment gateways, and other business tools. Contact our sales team to discuss your specific integration needs."
    },
    {
      question: "What makes ActiveHub different from other gym management software?",
      answer: "ActiveHub is specifically designed for the Indian market with features like shop integration for additional revenue, automated renewal reminders to reduce churn, and marketplace listing to attract new members. We focus on helping gym owners grow their business, not just manage it."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Find answers to common questions about ActiveHub FitTracker. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Our support team is here to help you succeed. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Schedule Demo Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
