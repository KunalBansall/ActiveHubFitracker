"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Package, TrendingUp, DollarSign, Users, Star } from "lucide-react";

export default function ShopManagementShowcase() {
  const shopStats = [
    {
      metric: "₹28,000",
      label: "Shop Sales This Month",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      metric: "₹1,800",
      label: "Average Order Value",
      icon: ShoppingCart,
      color: "text-blue-600"
    },
    {
      metric: "63%",
      label: "Revenue from Shop",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      metric: "15",
      label: "Active Products",
      icon: Package,
      color: "text-orange-600"
    }
  ];

  const orderStatuses = [
    { status: "Delivered", count: 8, color: "bg-green-100 text-green-800" },
    { status: "Shipped", count: 3, color: "bg-blue-100 text-blue-800" },
    { status: "Processing", count: 2, color: "bg-yellow-100 text-yellow-800" },
    { status: "Pending", count: 1, color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <ShoppingCart className="w-4 h-4" />
            Shop Management
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            👉 "Turn Your Gym Into a Revenue Machine"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage customer orders, track deliveries, and generate additional revenue 
            through our integrated shop management system.
          </p>
        </motion.div>

        {/* Shop Management Interface */}
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
                ActiveHub FitTracker - Order Management
              </div>
            </div>
            
            {/* Shop Management Content */}
            <div className="bg-gray-50 p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-lg w-10 h-10 flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Order Management</h3>
                    <p className="text-gray-600">Manage customer orders, update status, and track deliveries</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Refresh Orders
                </button>
              </div>

              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search orders by ID, name, or product..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  {["All Orders", "Pending", "Processing", "Shipped", "Delivered"].map((filter, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        index === 0 
                          ? "bg-blue-600 text-white" 
                          : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Orders Table */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PAYMENT</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#25A66C01</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">virat hia</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">June 19, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">₹1,800.00</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Card</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-900">View</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#25A66C02</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Kunal Bansal</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">June 18, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">₹500.00</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Delivered
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cash</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-900">View</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#25A66C03</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ROhit %%%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">June 17, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">₹3,000.00</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Shipped
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Card</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-900">View</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Shop Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {shopStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.metric}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              👉 "Shop sales now account for 63% of our total revenue!"
            </h3>
            <p className="text-green-100 text-lg mb-6">
              "The shop feature has been a game-changer. Members love buying supplements and gear 
              right after their workout, and it's generated ₹28,000 in additional monthly revenue."
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-green-100">- Rajesh Kumar, FitZone Gym</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Start Your Shop
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
