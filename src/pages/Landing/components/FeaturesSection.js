import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../../components/ui/card';

const features = [
  {
    icon: 'fa-file-upload',
    title: 'CSV Upload & Auto-Import',
    description: 'Simply download your Turo earnings report and upload it. We automatically parse and organize all your trip data, revenue, and expenses.',
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: 'fa-chart-line',
    title: 'Comprehensive Analytics',
    description: 'Get deep insights into your fleet performance with intuitive charts, revenue breakdowns, and profitability analysis per vehicle.',
    color: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    icon: 'fa-receipt',
    title: 'Expense Tracking',
    description: 'Log all expenses by category - fuel, insurance, maintenance, cleaning. Automatically calculate net profit and ROI for each vehicle.',
    color: 'from-green-500 to-emerald-500',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    icon: 'fa-wrench',
    title: 'Maintenance Management',
    description: 'Schedule and track maintenance tasks. Get automated reminders for upcoming services. Monitor vehicle health scores in real-time.',
    color: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    icon: 'fa-user-friends',
    title: 'Co-Host Management',
    description: 'Assign vehicles to co-hosts, set commission rates, and generate detailed reports. Share data securely without exposing sensitive information.',
    color: 'from-indigo-500 to-blue-500',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600'
  },
  {
    icon: 'fa-share-alt',
    title: 'Data Sharing & Reports',
    description: 'Generate beautiful, shareable reports for co-hosts with customizable access. Export data to Excel or PDF for accounting and tax purposes.',
    color: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600'
  },
  {
    icon: 'fa-exclamation-triangle',
    title: 'Incident Tracking',
    description: 'Document accidents, damages, and insurance claims. Keep a complete history with photos, notes, and resolution status for each incident.',
    color: 'from-yellow-500 to-orange-500',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    icon: 'fa-robot',
    title: 'AI-Powered Predictions',
    description: 'Get intelligent forecasts for future earnings, optimal pricing suggestions, and maintenance predictions based on your historical data.',
    color: 'from-teal-500 to-cyan-500',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600'
  },
  {
    icon: 'fa-filter',
    title: 'Advanced Filtering',
    description: 'Filter trips by date range, vehicle, status, or co-host. Search through thousands of records instantly. Export filtered results with one click.',
    color: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600'
  }
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Everything You Need to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> Succeed</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Powerful features designed specifically for Turo hosts who want to take their business to the next level.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fas ${feature.icon} text-2xl ${feature.iconColor}`}></i>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Gradient line on hover */}
                  <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${feature.color} rounded-full mt-4`}></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Screenshot Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <div className="relative group">
            {/* Decorative gradient blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500"></div>
            
            {/* Screenshot container */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl border-4 border-gray-200 overflow-hidden"
            >
              {/* Browser chrome */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-400">
                  turnover-manager.com/dashboard
                </div>
              </div>
              
              {/* Actual dashboard screenshot */}
              <div className="relative overflow-hidden">
                <img 
                  src="/images/screenshots/dashboard-page.png"
                  alt="Turnover Manager Dashboard"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Animated gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"
                ></motion.div>
              </div>
            </motion.div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-xl font-bold"
            >
              <i className="fas fa-star mr-2"></i>
              Live Dashboard
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;
