import { CheckCircle } from 'lucide-react';

const benefits = [
  'Streamlined operations and reduced administrative work',
  'Enhanced member experience and engagement',
  'Data-driven insights for business growth',
  'Secure and scalable platform',
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800"
              alt="About ActiveHub"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose ActiveHub?
            </h2>
            <p className="text-gray-600 mb-8">
              ActiveHub is more than just gym management software. We're your partner in creating exceptional fitness experiences. Our mission is to empower gym owners with the tools they need to succeed in today's competitive market.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}