"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Monitor, Smartphone, BarChart3, ShoppingCart, Users, Calendar, DollarSign } from "lucide-react";

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productScreenshots = [
    {
      id: 1,
      title: "Main Dashboard",
      description: "Comprehensive overview of your gym's performance with real-time metrics",
      image: "/dashboard (2).png",
      features: ["Member Statistics", "Revenue Tracking", "Attendance Overview", "Expiring Memberships"],
      category: "Analytics"
    },
    {
      id: 2,
      title: "Revenue Dashboard",
      description: "Track your gym's financial performance with detailed analytics",
      image: "/revenue.png",
      features: ["Revenue Analytics", "Shop Sales", "Membership Revenue", "Financial Reports"],
      category: "Analytics"
    },
    {
      id: 3,
      title: "Attendance Management",
      description: "Real-time attendance monitoring and member check-ins",
      image: "/attendence_management.png",
      features: ["Real-time Check-ins", "Attendance Reports", "Member Activity", "Session Tracking"],
      category: "Member Management"
    },
    {
      id: 4,
      title: "Member Attendance History",
      description: "Detailed attendance records and member activity tracking",
      image: "/member_attendence_history.png",
      features: ["Attendance History", "Session Details", "Member Activity", "Progress Tracking"],
      category: "Member Management"
    },
    {
      id: 5,
      title: "Member Profile Management",
      description: "Complete member management with detailed profiles and activity tracking",
      image: "/member_profile.png",
      features: ["Member Details", "Personal Information", "Membership Status", "Activity History"],
      category: "Member Management"
    },
    {
      id: 6,
      title: "Member Details",
      description: "Comprehensive member information and management interface",
      image: "/memberDetails.png",
      features: ["Member Information", "Contact Details", "Membership Plans", "Activity Overview"],
      category: "Member Management"
    },
    {
      id: 7,
      title: "Member Dashboard",
      description: "Personalized member portal with workout plans and progress tracking",
      image: "/member_dashboard.png",
      features: ["Personal Dashboard", "Workout Plans", "Progress Tracking", "Membership Status"],
      category: "Member Portal"
    },
    {
      id: 8,
      title: "Member Login Portal",
      description: "Secure member login with easy access to personal dashboard",
      image: "/member_login.png",
      features: ["Secure Login", "Profile Access", "Dashboard Entry", "Account Management"],
      category: "Member Portal"
    },
    {
      id: 9,
      title: "Membership Management",
      description: "Complete membership tracking and renewal management",
      image: "/membership of member.png",
      features: ["Membership Plans", "Renewal Tracking", "Payment Status", "Plan Details"],
      category: "Member Management"
    },
    {
      id: 10,
      title: "Shop Management",
      description: "Comprehensive product catalog and inventory management system",
      image: "/shop.png",
      features: ["Product Catalog", "Inventory Management", "Sales Tracking", "Featured Products"],
      category: "Shop Management"
    },
    {
      id: 11,
      title: "Order Management",
      description: "Seamlessly manage customer orders and track deliveries",
      image: "/orders.png",
      features: ["Order Tracking", "Status Updates", "Customer Details", "Payment Management"],
      category: "Shop Management"
    },
    {
      id: 12,
      title: "Product Details",
      description: "Detailed product information and purchase interface",
      image: "/Shop_product_Detail.png",
      features: ["Product Information", "Pricing Details", "Inventory Status", "Purchase Options"],
      category: "Shop Management"
    },
    {
      id: 13,
      title: "Shopping Cart",
      description: "Easy shopping cart management and checkout process",
      image: "/shopcart.png",
      features: ["Cart Management", "Item Review", "Quantity Updates", "Checkout Process"],
      category: "Shop Management"
    },
    {
      id: 14,
      title: "Add New Product",
      description: "Simple interface for adding new products to your gym's shop",
      image: "/Add_a_product.png",
      features: ["Product Creation", "Image Upload", "Pricing Setup", "Category Management"],
      category: "Shop Management"
    },
    {
      id: 15,
      title: "Workout Plan Creation",
      description: "Create personalized workout plans for your members",
      image: "/workoutPlan.png",
      features: ["Plan Creation", "Exercise Selection", "Schedule Planning", "Member Assignment"],
      category: "Member Management"
    },
    {
      id: 16,
      title: "Gym Profile Management",
      description: "Manage your gym's profile and business information",
      image: "/gymprofile.png",
      features: ["Gym Information", "Business Details", "Contact Management", "Profile Settings"],
      category: "Administration"
    },
    {
      id: 17,
      title: "Admin Login",
      description: "Secure admin access to the gym management system",
      image: "/login.png",
      features: ["Secure Authentication", "Admin Access", "System Login", "Account Security"],
      category: "Administration"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === productScreenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? productScreenshots.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Analytics":
        return <BarChart3 className="w-5 h-5" />;
      case "Shop Management":
        return <ShoppingCart className="w-5 h-5" />;
      case "Member Management":
        return <Users className="w-5 h-5" />;
      case "Member Portal":
        return <Smartphone className="w-5 h-5" />;
      case "Administration":
        return <Monitor className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  const currentScreenshot = productScreenshots[currentIndex];

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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Monitor className="w-4 h-4" />
            Product Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            👉 "See ActiveHub FitTracker in Action"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore 17+ actual screenshots of our comprehensive gym management platform. 
            From member management to revenue tracking, shop management to attendance tracking, 
            see how ActiveHub transforms your gym operations.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Screenshot Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Browser Frame */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500">
                  ActiveHub FitTracker - {currentScreenshot.title}
                </div>
              </div>
              
              {/* Screenshot */}
              <div className="relative">
                <img
                  src={currentScreenshot.image}
                  alt={currentScreenshot.title}
                  className="w-full h-auto object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {productScreenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-blue-600 w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Screenshot Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                {getCategoryIcon(currentScreenshot.category)}
              </div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {currentScreenshot.category}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              {currentScreenshot.title}
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              {currentScreenshot.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {currentScreenshot.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">
                  {currentIndex + 1} of {productScreenshots.length}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Users, title: "Member Management", count: "500+", description: "Active members managed" },
            { icon: DollarSign, title: "Revenue Tracking", count: "₹2M+", description: "Monthly revenue tracked" },
            { icon: Calendar, title: "Attendance", count: "95%", description: "Average attendance rate" },
            { icon: ShoppingCart, title: "Shop Sales", count: "₹50K+", description: "Monthly shop revenue" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.count}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              👉 "Ready to Transform Your Gym Management?"
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              See how ActiveHub FitTracker can streamline your operations and boost your revenue. 
              Get a personalized demo tailored to your gym's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Request Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Start Free Trial
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
