import { useState } from 'react';
import { LoginForm, SignupForm } from '../components/AuthForms';
import {
  Briefcase,
  Globe,
  Users,
  LockKeyhole,
  BarChart3,
  ArrowUpRight,
  Wallet,
  Shield
} from 'lucide-react';

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(true);

  const benefits = [
    {
      icon: Briefcase,
      title: 'Contract Management',
      description: 'Streamline contract workflows and ensure secure payment milestones for every project.'
    },
    {
      icon: Users,
      title: 'Payroll Solutions',
      description: 'Automated payroll processing with multi-currency support for global teams.'
    },
    {
      icon: LockKeyhole,
      title: 'Escrow Protection',
      description: 'Secure funds in escrow until project milestones are met, building trust between parties.'
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Handle payments in multiple currencies with real-time conversion rates.'
    }
  ];

  const Logo = ({ className = "" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-blue-600 text-white p-2 rounded">
        <span className="font-semibold">P</span>
      </div>
      <span className="font-semibold text-white">PaySync</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF] to-[#0039B3] opacity-95" />
          {/* Simplified Dashboard Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              {/* Main Chart Area */}
              <div className="h-72 bg-white/5 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-white/60" />
                    <div className="w-24 h-2 bg-white/20 rounded-lg" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="w-full h-40 relative">
                  <div className="absolute bottom-0 left-0 w-full h-32 flex items-end space-x-4">
                    <div className="flex-1 h-[75%] bg-white/10 rounded-t-lg" />
                    <div className="flex-1 h-[90%] bg-white/20 rounded-t-lg" />
                    <div className="flex-1 h-[60%] bg-white/10 rounded-t-lg" />
                    <div className="flex-1 h-[85%] bg-white/20 rounded-t-lg" />
                    <div className="flex-1 h-[70%] bg-white/10 rounded-t-lg" />
                  </div>
                </div>
              </div>
              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Wallet className="w-5 h-5 text-white/60" />
                    <div className="w-16 h-2 bg-white/20 rounded-lg" />
                  </div>
                  <div className="w-20 h-3 bg-white/10 rounded-lg" />
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 className="w-5 h-5 text-white/60" />
                    <div className="w-16 h-2 bg-white/20 rounded-lg" />
                  </div>
                  <div className="w-20 h-3 bg-white/10 rounded-lg" />
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <ArrowUpRight className="w-5 h-5 text-white/60" />
                    <div className="w-16 h-2 bg-white/20 rounded-lg" />
                  </div>
                  <div className="w-20 h-3 bg-white/10 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                <Logo className="text-2xl text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Secure Payments for Growing Agencies
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Building trust through secure payments, escrow protection, and seamless contract management. Your financial operations, simplified.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setShowLogin(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#0052FF] rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => setShowLogin(false)}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-6 lg:p-8">
              {showLogin ? (
                <>
                  <div className="flex justify-center mb-6">
                    <Logo className="text-xl text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>
                  <LoginForm />
                  <p className="mt-4 text-center text-blue-100">
                    Don't have an account?{' '}
                    <button
                      onClick={() => setShowLogin(false)}
                      className="text-white hover:text-blue-200 font-semibold"
                    >
                      Sign up
                    </button>
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-center mb-6">
                    <Logo className="text-xl text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
                  <SignupForm />
                  <p className="mt-4 text-center text-blue-100">
                    Already have an account?{' '}
                    <button
                      onClick={() => setShowLogin(true)}
                      className="text-white hover:text-blue-200 font-semibold"
                    >
                      Sign in
                    </button>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Complete Financial Operations Platform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            PaySync provides everything agencies need to manage payments, contracts, and team finances in one secure platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#0052FF]/10 dark:bg-[#0052FF]/20 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-[#0052FF] dark:text-[#0052FF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Stats Section */}
      <div className="bg-[#0052FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">$100M+</div>
              <div className="text-blue-100">Payments Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">Agencies Trust Us</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-blue-100">Supported Currencies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}