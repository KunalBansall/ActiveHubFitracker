"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, Award, TrendingUp, Globe } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower gym owners with cutting-edge technology that simplifies operations, maximizes revenue, and creates thriving fitness communities."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To become the leading gym management platform in India, transforming how fitness businesses operate and grow in the digital age."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We believe in building stronger fitness communities by connecting gym owners, trainers, and members through innovative technology."
    }
  ];

  const stats = [
    { number: "500+", label: "Gym Owners" },
    { number: "50K+", label: "Active Members" },
    { number: "₹2Cr+", label: "Revenue Generated" },
    { number: "95%", label: "Customer Satisfaction" }
  ];

  const team = [
    {
      name: "Kunal Bansal",
      role: "CEO & Founder",
      description: "Common Man who wants to create a platform for gym owners to grow their business to create a difference"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About ActiveHub FitTracker
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We're on a mission to revolutionize the fitness industry in India by providing 
            gym owners with the tools they need to build successful, profitable businesses.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 mb-16 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-lg text-blue-100 mb-6">
              ActiveHub FitTracker was born from a simple observation: gym owners across India 
              were struggling with manual processes, losing members due to poor retention strategies, 
              and missing out on revenue opportunities.
            </p>
            <p className="text-lg text-blue-100">
              Founded by former gym owners who experienced these challenges firsthand, we built 
              a comprehensive platform that not only solves these problems but creates new 
              opportunities for growth. Today, we're proud to serve 500+ gym owners who have 
              collectively generated over ₹2 crores in additional revenue.
            </p>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join the ActiveHub Community?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join 500+ gym owners who are already transforming their businesses with ActiveHub FitTracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
