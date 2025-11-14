import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Waitlist = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    isTuroHost: '',
    wouldUse: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Use relative path /api/waitlist - works for both local and production
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          email: '',
          isTuroHost: '',
          wouldUse: '',
          additionalInfo: ''
        });
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Waitlist submission error:', err);
      if (err.message && err.message.includes('Failed to execute')) {
        setError('API endpoint not available. Please run with "npm run dev" (Vercel CLI) instead of "npm start" to test the waitlist feature.');
      } else {
        setError('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
              <i className="fas fa-car text-white text-base sm:text-xl"></i>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-base sm:text-lg text-gray-900 leading-tight">TURNOVER MANAGER</div>
              <div className="text-xs text-gray-500 leading-none">Fleet Management Platform</div>
            </div>
            <div className="block sm:hidden">
              <div className="font-bold text-sm text-gray-900 leading-tight">TURNOVER</div>
            </div>
          </button>

          {/* Back to Home */}
          <button
            onClick={() => navigate('/')}
            className="px-3 sm:px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
          >
            <i className="fas fa-arrow-left mr-1 sm:mr-2"></i>
            <span className="hidden sm:inline">Back to Home</span>
            <span className="inline sm:hidden">Back</span>
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4 sm:mb-6 shadow-2xl"
                  >
                    <i className="fas fa-rocket text-white text-2xl sm:text-3xl"></i>
                  </motion.div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                    Coming <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Soon!</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto px-4">
                    We're putting the finishing touches on Turnover Manager. Join our waitlist to be the first to know when we launch!
                  </p>
                </div>

                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 p-8 md:p-10"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <i className="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Are you a Turo host? */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Are you a Turo host? *
                      </label>
                      <div className="space-y-2">
                        {['Yes, I currently host on Turo', 'No, but I\'m interested in hosting', 'I\'m considering it'].map((option) => (
                          <label
                            key={option}
                            className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer group"
                          >
                            <input
                              type="radio"
                              name="isTuroHost"
                              value={option}
                              checked={formData.isTuroHost === option}
                              onChange={handleChange}
                              required
                              className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-gray-700 group-hover:text-gray-900 font-medium">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Would you use this tool? */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Would you use a tool like Turnover Manager? *
                      </label>
                      <div className="space-y-2">
                        {['Yes, definitely!', 'Maybe, tell me more', 'Not sure yet'].map((option) => (
                          <label
                            key={option}
                            className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50/50 transition-all cursor-pointer group"
                          >
                            <input
                              type="radio"
                              name="wouldUse"
                              value={option}
                              checked={formData.wouldUse === option}
                              onChange={handleChange}
                              required
                              className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="ml-3 text-gray-700 group-hover:text-gray-900 font-medium">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tell us more (optional)
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                        placeholder="What features are you most excited about? How many vehicles do you manage? Any questions for us?"
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3"
                      >
                        <i className="fas fa-exclamation-circle text-red-500"></i>
                        <p className="text-red-700 text-sm">{error}</p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i>
                          Joining Waitlist...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane"></i>
                          Join the Waitlist
                        </>
                      )}
                    </motion.button>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center gap-6 pt-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <i className="fas fa-shield-alt text-green-500"></i>
                        <span>Secure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-envelope text-blue-500"></i>
                        <span>No spam</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-bolt text-yellow-500"></i>
                        <span>Early access</span>
                      </div>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="text-center"
              >
                {/* Success Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mb-8 shadow-2xl"
                >
                  <motion.i
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="fas fa-check text-white text-4xl"
                  ></motion.i>
                </motion.div>

                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  You're on the list! 🎉
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                  Thank you for your interest! We'll notify you as soon as Turnover Manager launches.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <i className="fas fa-home mr-2"></i>
                    Back to Home
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        email: '',
                        isTuroHost: '',
                        wouldUse: '',
                        additionalInfo: ''
                      });
                    }}
                    className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-200"
                  >
                    <i className="fas fa-plus mr-2"></i>
                    Add Another Person
                  </motion.button>
                </div>

                {/* Share Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100"
                >
                  <p className="text-gray-700 font-semibold mb-3">
                    Know other Turo hosts who'd love this?
                  </p>
                  <p className="text-gray-600 text-sm">
                    Share Turnover Manager with your network!
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
