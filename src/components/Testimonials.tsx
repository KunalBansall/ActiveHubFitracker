import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Owner, FitZone Gym",
    location: "Mumbai",
    image: "/APex.png",
    quote: "ActiveHub FitTracker increased our revenue by ₹75,000 monthly. The shop feature alone generates ₹50K from supplement sales. Our member retention improved from 65% to 92% in just 6 months.",
    metrics: {
      revenue: "+₹75K/month",
      retention: "92%",
      members: "200+"
    }
  },
  {
    name: "Priya Sharma",
    role: "Owner, PowerFit Studio",
    location: "Delhi",
    image: "/APex.png",
    quote: "The automated renewal reminders saved us from losing 30+ members this year. The analytics dashboard helps us make data-driven decisions. Best investment we've made for our gym.",
    metrics: {
      saved: "30+ members",
      efficiency: "70% time saved",
      satisfaction: "98%"
    }
  },
  {
    name: "Amit Patel",
    role: "Owner, Iron Strength Gym",
    location: "Bangalore",
    image: "/APex.png",
    quote: "From managing 150 members manually to scaling to 400+ with ease. The marketplace listing brought us 60 new members in 3 months. ActiveHub transformed our entire operation.",
    metrics: {
      growth: "400+ members",
      newMembers: "60 in 3 months",
      revenue: "+120%"
    }
  }
];

const caseStudy = {
  gym: "FitZone Gym, Mumbai",
  owner: "Rajesh Kumar",
  results: {
    before: {
      members: 200,
      churn: "15%",
      revenue: "₹3,00,000/month",
      adminHours: "40/week"
    },
    after: {
      members: 200,
      churn: "5%",
      revenue: "₹3,75,000/month",
      adminHours: "15/week"
    }
  }
};

export default function Testimonials() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Results from Real Gym Owners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            See how gym owners across India are transforming their businesses 
            and increasing revenue with ActiveHub FitTracker.
          </p>
        </motion.div>

        {/* ROI Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 mb-16 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Real ROI Case Study</h3>
            <p className="text-blue-100 text-lg">{caseStudy.gym} • {caseStudy.owner}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-red-200">Before ActiveHub</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Members:</span>
                  <span className="font-bold">{caseStudy.results.before.members}</span>
                </div>
                <div className="flex justify-between">
                  <span>Churn Rate:</span>
                  <span className="font-bold text-red-300">{caseStudy.results.before.churn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Revenue:</span>
                  <span className="font-bold">{caseStudy.results.before.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Admin Hours:</span>
                  <span className="font-bold">{caseStudy.results.before.adminHours}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-green-200">After ActiveHub</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Members:</span>
                  <span className="font-bold">{caseStudy.results.after.members}</span>
                </div>
                <div className="flex justify-between">
                  <span>Churn Rate:</span>
                  <span className="font-bold text-green-300">{caseStudy.results.after.churn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Revenue:</span>
                  <span className="font-bold">{caseStudy.results.after.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Admin Hours:</span>
                  <span className="font-bold">{caseStudy.results.after.adminHours}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block">
              <div className="text-3xl font-bold text-green-200">+₹75,000/month</div>
              <div className="text-blue-100">Additional Revenue Generated</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(testimonial.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-blue-600">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
