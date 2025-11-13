import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';

const CTASection = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Free Trial',
      price: 'Free',
      period: '1 month',
      description: 'Perfect for getting started',
      features: [
        'Unlimited vehicles',
        'Full analytics dashboard',
        'Expense tracking',
        'Trip history',
        'Co-host management',
        'Maintenance tracking',
        'Email support',
        '30 days free access'
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Monthly',
      price: '$12',
      period: 'per month',
      description: 'Most flexible option',
      features: [
        'Unlimited vehicles',
        'Advanced analytics & AI predictions',
        'Co-host management',
        'Maintenance tracking',
        'Incident logging',
        'Data sharing & reports',
        'Priority support',
        'Export to Excel/PDF',
        'Cancel anytime'
      ],
      cta: 'Subscribe Monthly',
      popular: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Quarterly',
      price: '$30',
      period: '3 months',
      description: 'Save $6 with quarterly',
      features: [
        'Everything in Monthly',
        'Save $6 (vs monthly)',
        'Unlimited vehicles',
        'Advanced analytics',
        'AI predictions',
        'Priority support',
        'Export to Excel/PDF',
        'All premium features'
      ],
      cta: 'Subscribe Quarterly',
      popular: false,
      color: 'from-purple-500 to-pink-600',
      savings: '$6 savings'
    },
    {
      name: 'Yearly',
      price: '$120',
      period: 'per year',
      description: 'Best value - Save $24!',
      features: [
        'Everything in Monthly',
        'Save $24 (vs monthly)',
        'Unlimited vehicles',
        'Advanced analytics',
        'AI predictions',
        'Priority support',
        'Export to Excel/PDF',
        'Best price guarantee'
      ],
      cta: 'Subscribe Yearly',
      popular: false,
      color: 'from-green-500 to-emerald-600',
      savings: '$24 savings'
    }
  ];

  return (
    <div className="py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"> Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with a free trial. All plans include unlimited vehicles and full features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${plan.color} text-white text-sm font-bold shadow-lg`}>
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <Card className={`h-full bg-white/10 backdrop-blur-lg border-2 ${plan.popular ? 'border-purple-400' : 'border-white/20'} hover:border-purple-400 transition-all duration-300 overflow-hidden`}>
                <CardContent className="p-8">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-300">/ {plan.period}</span>
                      )}
                    </div>
                    {plan.savings && (
                      <div className="mt-2">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                          💰 {plan.savings}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      className={`w-full py-6 font-bold text-lg ${
                        plan.popular 
                          ? `bg-gradient-to-r ${plan.color} hover:opacity-90` 
                          : 'bg-white/20 hover:bg-white/30'
                      } transition-all mb-6`}
                      onClick={() => navigate('/waitlist')}
                    >
                      {plan.cta}
                    </Button>
                  </motion.div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <i className="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Turo Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful hosts who are already saving time and maximizing profits with Turnover Manager.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full shadow-2xl"
                onClick={() => navigate('/waitlist')}
              >
                <i className="fas fa-rocket mr-2"></i>
                Join Waitlist
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-bold rounded-full"
                onClick={() => navigate('/waitlist')}
              >
                <i className="fas fa-user-plus mr-2"></i>
                Get Early Access
              </Button>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>1 month free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>Unlimited vehicles</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-12 border-t border-white/20 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <div className="text-2xl font-bold mb-2">Turnover Manager</div>
              <div className="text-gray-400 text-sm">Made for Turo Hosts by a Turo Host</div>
            </div>
            
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-gray-500 text-sm">
            © 2025 Turnover Manager. All rights reserved.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
