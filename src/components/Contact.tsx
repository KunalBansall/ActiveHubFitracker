import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        message: formData.message,
        to_email: "activehubfitracker@gmail.com",
      };

      console.log("Sending inquiry data:", inquiryData);

      // Send inquiry email
      const inquiryResult = await emailjs.send(
        "service_bd2rdxh",
        "template_7ithrsw",
        inquiryData,
        "_3jzHfs3fLD6elP3t"
      );
      console.log("Inquiry email result:", inquiryResult);

      // Send auto-reply email to the user
      const autoReplyData = {
        user_name: formData.name,
        user_email: formData.email, // Ensure this is passed for auto-reply
        message: formData.message,
        to_email: formData.email, // Set the recipient email for the auto-reply
      };

      console.log("Sending auto-reply data:", autoReplyData);

      const autoReplyResult = await emailjs.send(
        "service_bd2rdxh",
        "template_wpruymr", // Auto-reply template
        autoReplyData,
        "_3jzHfs3fLD6elP3t"
      );
      console.log("Auto-reply email result:", autoReplyResult);

      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about ActiveHub? We're here to help. Contact us for
              a personalized demo or to learn more about how we can support your
              gym.
            </p>
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
                {isSuccess && (
                  <p className="text-green-500 mt-4">
                    Message sent successfully!
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
