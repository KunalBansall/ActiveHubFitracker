"use client";

import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, DollarSign, Package, Users, Star } from "lucide-react";

export default function ShopSection() {
  const shopFeatures = [
    {
      icon: ShoppingCart,
      title: "Merchandise Sales",
      description: "Sell gym t-shirts, water bottles, equipment, and branded merchandise directly to members.",
      revenue: "₹15,000/month average"
    },
    {
      icon: Package,
      title: "Supplements & Nutrition",
      description: "Offer protein powders, vitamins, and fitness supplements with integrated inventory management.",
      revenue: "₹25,000/month average"
    },
    {
      icon: Users,
      title: "Personal Training Packages",
      description: "Sell training sessions, meal plans, and premium coaching services through the platform.",
      revenue: "₹35,000/month average"
    }
  ];

  const stats = [
    { number: "₹75K+", label: "Average Monthly Revenue" },
    { number: "45%", label: "Increase in Member Value" },
    { number: "3x", label: "ROI on Shop Investment" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            New Revenue Stream
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Turn Your Gym Into a Revenue Machine
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our integrated shop feature lets you sell merchandise, supplements, and services 
            directly to members, creating multiple income streams beyond just memberships.
          </p>
        </motion.div>

        {/* Revenue Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Shop Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {shopFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-700 font-bold text-sm">{feature.revenue}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real Gym Owner Success Story
              </h3>
              <blockquote className="text-gray-600 text-lg mb-6">
                "Within 3 months of launching our shop, we've added ₹75,000 to our monthly revenue. 
                Members love the convenience of buying supplements and gear right after their workout. 
                It's been a game-changer for our business."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">5.0 rating</span>
                </div>
                <div className="text-gray-500">
                  — Rajesh Kumar, Owner of FitZone Gym (Mumbai)
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Unlock New Revenue?</h3>
            <p className="text-green-100 mb-6 text-lg">
              Join 500+ gym owners who are already generating extra income with ActiveHub FitTracker
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                See Shop Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
