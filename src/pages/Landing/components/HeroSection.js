import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Top Navigation Bar with Logo */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
              <i className="fas fa-car text-white text-base sm:text-xl"></i>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-xl font-bold text-white tracking-wider leading-tight">TURNOVER MANAGER</h1>
              <p className="text-xs text-gray-300 leading-none">Fleet Management Platform</p>
            </div>
            <div className="block sm:hidden">
              <h1 className="text-sm font-bold text-white tracking-wider leading-tight">TURNOVER</h1>
            </div>
          </motion.div>
          
          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/waitlist')}
              className="hidden sm:block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors text-sm font-medium"
            >
              Join Waitlist
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/waitlist')}
              className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-28 md:pt-32"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
            <i className="fas fa-car mr-2"></i>
            <span className="font-medium">Made for Turo Hosts by a Turo Host</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Manage Your Turo Fleet
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Like a Pro
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-3 sm:mb-4 max-w-3xl mx-auto px-4"
        >
          The all-in-one platform to track earnings, manage expenses, monitor vehicle health, 
          and collaborate seamlessly with your co-hosts.
        </motion.p>

        {/* Personal Story */}
        <motion.p 
          variants={fadeInUp}
          className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto italic px-4"
        >
          "As a Turo host myself, I built this tool to solve the exact problems I faced managing 
          my fleet. Now I'm sharing it with the community to help others succeed."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl"
              onClick={() => navigate('/waitlist')}
            >
              <i className="fas fa-rocket mr-2"></i>
              Join Waitlist
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-full"
              onClick={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-play-circle mr-2"></i>
              See How It Works
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={fadeInUp}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">50+</div>
            <div className="text-sm sm:text-base text-gray-300">Beta Users</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">$500K+</div>
            <div className="text-sm sm:text-base text-gray-300">Revenue Tracked</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">10K+</div>
            <div className="text-sm sm:text-base text-gray-300">Trips Managed</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-white text-2xl opacity-50"></i>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
