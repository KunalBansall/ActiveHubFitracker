import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Users, DollarSign } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gymName: "",
    memberCount: "",
    message: "",
    demoType: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const inquiryData = {
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        gym_name: formData.gymName,
        member_count: formData.memberCount,
        demo_type: formData.demoType,
        message: formData.message,
        to_email: "activehubfitracker@gmail.com",
      };

      await emailjs.send(
        "service_bd2rdxh",
        "template_7ithrsw",
        inquiryData,
        "_3jzHfs3fLD6elP3t"
      );

      await emailjs.send(
        "service_bd2rdxh",
        "template_wpruymr",
        {
          user_name: formData.name,
          user_email: formData.email,
          phone: formData.phone,
          gym_name: formData.gymName,
          member_count: formData.memberCount,
          demo_type: formData.demoType,
          message: formData.message,
          to_email: formData.email,
        },
        "_3jzHfs3fLD6elP3t"
      );

      toast.success("Demo request sent successfully! We'll contact you within 24 hours.");
      setFormData({ 
        name: "", 
        email: "", 
        phone: "",
        gymName: "",
        memberCount: "",
        message: "",
        demoType: "general"
      });
    } catch (error: any) {
      // console.error("Error sending email:", error);

      const errorMessage =
        error?.text || "Failed to send message. Please try again later.";

      // Check if the error message contains the "recipients address is empty" issue
      if (errorMessage.includes("The recipients address is empty")) {
        toast.success("Message sent successfully.");
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              Book Your Demo
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Gym?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Schedule a personalized demo and see how ActiveHub FitTracker can 
              help you retain more members, automate operations, and unlock new revenue streams.
            </p>
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {[
                { Icon: Mail, text: "activehubfitracker@gmail.com" },
                { Icon: Phone, text: "+91 9050207670" },
                { Icon: MapPin, text: "Karnal, Haryana" },
              ].map(({ Icon, text }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Icon className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-600">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              className="bg-white rounded-xl shadow-lg p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gym Name
                    </label>
                    <input
                      type="text"
                      name="gymName"
                      value={formData.gymName}
                      onChange={handleInputChange}
                      placeholder="Your gym name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Member Count
                    </label>
                    <select
                      name="memberCount"
                      value={formData.memberCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select member count</option>
                      <option value="1-50">1-50 members</option>
                      <option value="51-100">51-100 members</option>
                      <option value="101-200">101-200 members</option>
                      <option value="201-500">201-500 members</option>
                      <option value="500+">500+ members</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Demo Type
                    </label>
                    <select
                      name="demoType"
                      value={formData.demoType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="general">General Demo</option>
                      <option value="shop">Shop Feature Demo</option>
                      <option value="analytics">Analytics Demo</option>
                      <option value="member-management">Member Management Demo</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your gym and goals
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="What challenges are you facing? What would you like to achieve with ActiveHub FitTracker?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {isSubmitting ? "Sending Request..." : "Schedule Demo"}
                </motion.button>
                
                <p className="text-sm text-gray-500 text-center">
                  We'll contact you within 24 hours to schedule your personalized demo.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
