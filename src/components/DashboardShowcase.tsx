"use client";

import { motion } from "framer-motion";
import { Eye, AlertTriangle, Clock, Smartphone, BarChart3, Bell, TrendingUp } from "lucide-react";

export default function DashboardShowcase() {
  const benefits = [
    {
      icon: BarChart3,
      title: "Instant Insights",
      description: "See member counts, renewals, and performance at a glance"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Never miss a renewal or inactive member"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Replace paperwork with automation"
    },
    {
      icon: Smartphone,
      title: "Anytime, Anywhere",
      description: "Cloud-based and mobile-friendly"
    }
  ];

  const dashboardFeatures = [
    {
      metric: "71",
      label: "Total Members",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      metric: "₹44,445",
      label: "Collected Revenue",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      metric: "₹28,000",
      label: "From Shop Sales",
      icon: Bell,
      color: "text-purple-600"
    },
    {
      metric: "5",
      label: "Expiring Soon",
      icon: AlertTriangle,
      color: "text-orange-600"
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Eye className="w-4 h-4" />
            Product Dashboard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            👉 "Your Entire Gym, Managed From One Dashboard."
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            ActiveHub FitTracker gives you a clear, simple, and powerful dashboard to run your gym like a pro.
          </p>
        </motion.div>

        {/* Dashboard Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Browser Chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500">
                ActiveHub FitTracker Dashboard
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-lg w-10 h-10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">ActiveHub FitTracker</h3>
                    <p className="text-gray-600">Dashboard</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Tuesday 30 September, 2025</div>
                  <div className="text-sm text-gray-500">10:44:12 pm IST</div>
                </div>
              </div>

              {/* Alert Banner */}
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-8">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <span className="text-yellow-800 font-medium">Your subscription expires today. Renew now</span>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {dashboardFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                      <div className="text-sm text-green-600 font-semibold">+0.0%</div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{feature.metric}</div>
                    <div className="text-gray-600">{feature.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Revenue Overview */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">Revenue Overview</h4>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">₹44,445</div>
                    <div className="text-sm text-gray-600">Total Collected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">₹16,445</div>
                    <div className="text-sm text-gray-600">From Memberships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">₹28,000</div>
                    <div className="text-sm text-gray-600">From Shop Sales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">₹62,610</div>
                    <div className="text-sm text-gray-600">Pending Collection</div>
                  </div>
                </div>
              </div>

              {/* Member Cards */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Expiring Soon Members</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {["Ravi", "Virat Hia", "Rab2", "Siraj"].map((name, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-semibold">{name[0]}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{name}</div>
                          <div className="text-sm text-gray-500">56236</div>
                        </div>
                      </div>
                      <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        Expired
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Track active members, upcoming renewals, and attendance — all in one place.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Get real-time insights into who's active, who's due, and who needs attention.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Save hours of manual work with automated reminders and activity tracking.
            </p>
            <p className="text-lg text-gray-600">
              Access from any device — manage your gym on the go.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              👉 "Run your gym smarter, not harder."
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Join 500+ gym owners who are already using ActiveHub FitTracker to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                See Live Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
