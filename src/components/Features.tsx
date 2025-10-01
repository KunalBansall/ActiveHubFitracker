import { motion } from "framer-motion";
import { Users, Bell, AlertTriangle, Globe, ShoppingCart, Megaphone, BarChart3, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Member Management",
    description: "Complete member lifecycle management with automated check-ins, attendance tracking, and member profiles.",
    benefit: "Reduce admin time by 70%"
  },
  {
    icon: Bell,
    title: "Automated Renewal Reminders",
    description: "Smart notification system that prevents missed renewals and reduces member churn automatically.",
    benefit: "Increase retention by 67%"
  },
  {
    icon: AlertTriangle,
    title: "Inactive Member Detection",
    description: "AI-powered alerts identify at-risk members before they cancel, enabling proactive retention strategies.",
    benefit: "Save 15% of at-risk members"
  },
  {
    icon: Globe,
    title: "Marketplace Listing",
    description: "Get discovered by new members in your area through our integrated gym marketplace platform.",
    benefit: "Attract 40% more leads"
  },
  {
    icon: ShoppingCart,
    title: "Shop Feature",
    description: "Sell merchandise, supplements, and training packages directly to members for additional revenue.",
    benefit: "Generate ₹20K+ monthly"
  },
  {
    icon: Megaphone,
    title: "Ad Management",
    description: "Promote services, upsell training packages, and run targeted campaigns to increase revenue.",
    benefit: "Boost upsells by 45%"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive business intelligence with revenue tracking, member insights, and performance metrics.",
    benefit: "Make data-driven decisions"
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Multiple income streams including memberships, shop sales, and premium services for maximum profitability.",
    benefit: "Increase revenue by 80%"
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
            Everything You Need to Scale Your Gym Business
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From member retention to revenue optimization, our comprehensive platform 
            gives you the tools to grow your gym into a profitable, thriving business.
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-700 font-semibold text-sm">{feature.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
