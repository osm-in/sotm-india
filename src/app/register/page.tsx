'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RegisterPage() {

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-primary pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-neutral-slate opacity-90 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/50 to-primary pointer-events-none -z-10" />
        
        <div className="container mx-auto px-6 py-8 relative z-10">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Register for SOTM India 2026
            </h1>
            <div className="text-2xl font-bold text-red-400 mb-4 px-4 py-3 bg-red-500/20 rounded-lg border border-red-500/30 inline-block">
              Registration is now closed
            </div>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mt-6">
              Thank you for your interest in SOTM India 2026. Registration is no longer available.
            </p>
          </motion.div>



          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-10 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-semibold text-white mb-4 text-center">About SOTM India 2026</h3>
            <div className="space-y-3 text-neutral-200">
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <p>State of the Map India 2026 was held on January 24th, 2026</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <p>The event brought together OpenStreetMap enthusiasts and geospatial professionals</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <p>Hosted alongside FOSS4G Asia 2026 in Nashik, India</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <p>Thank you to all participants, speakers, and sponsors who made it a success</p>
              </div>
            </div>
            
            {/* Financial Note */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10 flex items-start gap-3">
              <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-300">
                <span className="text-white font-medium">Questions?</span> Please contact us for any inquiries about the event or future editions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

