import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../../components/ui/card';

const benefits = [
  {
    icon: 'fa-clock',
    title: 'Save 10+ Hours Per Week',
    description: 'Automate data entry and report generation. Spend less time on spreadsheets and more time growing your fleet.',
    stat: '10+ hrs',
    statLabel: 'saved weekly'
  },
  {
    icon: 'fa-dollar-sign',
    title: 'Maximize Profitability',
    description: 'Identify underperforming vehicles, optimize pricing, and track every expense. Make data-driven decisions that boost your bottom line.',
    stat: '25%+',
    statLabel: 'profit increase'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Complete Transparency',
    description: 'Share detailed reports with co-hosts while maintaining control. Build trust and accountability in your partnerships.',
    stat: '100%',
    statLabel: 'data accuracy'
  },
  {
    icon: 'fa-chart-line',
    title: 'Scale with Confidence',
    description: 'From 1 vehicle to 100+, our platform grows with you. Track multiple co-hosts, locations, and revenue streams effortlessly.',
    stat: 'Unlimited',
    statLabel: 'vehicles'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Turo Host - 12 vehicles',
    image: '👩‍💼',
    quote: 'This tool completely transformed how I manage my fleet. I used to spend entire weekends on Excel spreadsheets. Now everything is automated and I have real-time insights at my fingertips.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Turo Host - 8 vehicles',
    image: '👨‍💼',
    quote: 'As someone who works with 3 co-hosts, the data sharing feature is a game-changer. Everyone knows exactly what they need to know, and I have complete control over what\'s shared.',
    rating: 5
  },
  {
    name: 'David Martinez',
    role: 'Turo Host - 25 vehicles',
    image: '🧑‍💼',
    quote: 'I was able to identify which vehicles were losing money and make strategic decisions to improve profitability. My net profit increased by 30% in just 3 months.',
    rating: 5
  }
];

const BenefitsSection = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Why Turo Hosts
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> Love Us</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join hundreds of successful hosts who are already using Turnover Manager to grow their business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
                    <i className={`fas ${benefit.icon} text-2xl`}></i>
                  </div>

                  {/* Stat */}
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900">{benefit.stat}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">{benefit.statLabel}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Users Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400"></i>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Turo Hosts Nationwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <i className="fas fa-lock text-4xl text-blue-600 mb-3"></i>
              <div className="text-sm font-semibold text-gray-700">Bank-Level Security</div>
            </div>
            <div>
              <i className="fas fa-cloud text-4xl text-purple-600 mb-3"></i>
              <div className="text-sm font-semibold text-gray-700">Cloud Backup</div>
            </div>
            <div>
              <i className="fas fa-mobile-alt text-4xl text-pink-600 mb-3"></i>
              <div className="text-sm font-semibold text-gray-700">Mobile Friendly</div>
            </div>
            <div>
              <i className="fas fa-headset text-4xl text-indigo-600 mb-3"></i>
              <div className="text-sm font-semibold text-gray-700">24/7 Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsSection;
