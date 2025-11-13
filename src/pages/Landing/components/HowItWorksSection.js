import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: 'fa-download',
    title: 'Download Your Turo Report',
    description: 'Log into Turo, navigate to your earnings, and download your trip history as a CSV file. It takes less than 30 seconds.',
    color: 'from-blue-500 to-cyan-500',
    image: '/images/screenshots/step-1.png'
  },
  {
    number: '02',
    icon: 'fa-cloud-upload-alt',
    title: 'Upload to Turnover Manager',
    description: 'Simply drag and drop your CSV file into our platform. We automatically parse all trips, earnings, and fees. Duplicates are smartly handled.',
    color: 'from-purple-500 to-pink-500',
    image: '/images/screenshots/step-2.png'
  },
  {
    number: '03',
    icon: 'fa-plus-circle',
    title: 'View Your Dashboard',
    description: 'See all your vehicles, trips, and earnings in a clean dashboard. Track performance at a glance with real-time analytics.',
    color: 'from-green-500 to-emerald-500',
    image: '/images/screenshots/step-3.png'
  },
  {
    number: '04',
    icon: 'fa-car',
    title: 'Track Vehicle Details',
    description: 'Monitor each vehicle separately with detailed performance metrics, maintenance history, and profitability insights.',
    color: 'from-orange-500 to-red-500',
    image: '/images/screenshots/step-4.png'
  },
  {
    number: '05',
    icon: 'fa-user-plus',
    title: 'Manage Co-Hosts',
    description: 'Add co-hosts, assign vehicles, set commission rates, and define what data they can access. Keep everyone aligned and informed.',
    color: 'from-indigo-500 to-blue-500',
    image: '/images/screenshots/step-5.png'
  },
  {
    number: '06',
    icon: 'fa-chart-line',
    title: 'Generate Fleet Reports',
    description: 'Create comprehensive reports with revenue trends, profitability analysis, expense breakdowns, and performance metrics.',
    color: 'from-pink-500 to-rose-500',
    image: '/images/screenshots/step-6.png'
  },
  {
    number: '07',
    icon: 'fa-share-nodes',
    title: 'Share Reports Hassle-Free',
    description: 'Generate secure, shareable links for co-hosts. They see only what you allow - no sensitive data exposed. Export to PDF or Excel anytime.',
    color: 'from-teal-500 to-cyan-500',
    image: '/images/screenshots/step-7.png'
  }
];

const HowItWorksSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close button */}
              <motion.button
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors flex items-center justify-center group"
                onClick={() => setSelectedImage(null)}
              >
                <i className="fas fa-times text-white text-xl group-hover:rotate-90 transition-transform duration-300"></i>
              </motion.button>

              {/* Navigation hint */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md"
              >
                <p className="text-white/80 text-sm">
                  <i className="fas fa-mouse-pointer mr-2"></i>
                  Click anywhere to close
                </p>
              </motion.div>

              {/* Image container */}
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Step badge */}
                <div className={`absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-gradient-to-r ${selectedImage?.color} backdrop-blur-md shadow-lg`}>
                  <span className="text-white font-bold text-sm">
                    {selectedImage?.title}
                  </span>
                </div>

                {/* Image */}
                <img
                  src={selectedImage?.image}
                  alt={selectedImage?.title}
                  className="w-full h-full object-contain bg-white"
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get up and running in minutes. No technical skills required. Just follow these simple steps.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-16 lg:mb-24 flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-8 relative"
                >
                  {/* Step Number */}
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-sm mb-4`}>
                    STEP {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} text-white mb-4`}>
                    <i className={`fas ${step.icon} text-2xl`}></i>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Circle (desktop) */}
              <div className="hidden lg:flex w-2/12 justify-center items-center my-8 lg:my-0">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg border-4 border-white z-10`}
                >
                  <i className={`fas ${step.icon} text-white text-xl`}></i>
                </motion.div>
              </div>

              {/* Image Placeholder */}
              <div className={`w-full lg:w-5/12 mt-6 lg:mt-0 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => setSelectedImage(step)}
                  className="group relative rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden bg-white cursor-pointer"
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Screenshot image - natural aspect ratio */}
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay with zoom icon */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center gap-4`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-white flex flex-col items-center gap-3"
                    >
                      <i className="fas fa-search-plus text-6xl"></i>
                      <span className="text-lg font-semibold">Click to enlarge</span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Decorative corner badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold shadow-lg opacity-90`}>
                    Step {step.number}
                  </div>

                  {/* Zoom hint badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <i className="fas fa-expand text-xs"></i>
                    View full size
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-6">
            Ready to streamline your Turo business?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            <i className="fas fa-rocket mr-2"></i>
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
