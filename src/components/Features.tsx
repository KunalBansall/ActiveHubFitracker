import React from "react";
import { motion } from "framer-motion";
import { Users, Bell, Upload, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Member Management",
    description:
      "Track memberships, attendance, and progress with our intuitive dashboard.",
  },
  {
    icon: Bell,
    title: "Membership Renewal Notifications",
    description:
      "Automatically notify members about upcoming membership renewals to keep them informed.",
  },
  {
    icon: Upload,
    title: "Digital Integration",
    description:
      "Upload and manage documents, photos, and member information securely.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Make data-driven decisions with comprehensive business insights.",
  },
];

export default function Features() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Gyms
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your gym efficiently and provide an
            exceptional experience for your members.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
