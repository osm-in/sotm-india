'use client';

import { motion } from 'framer-motion';
import { Users, Map as MapIcon, Activity, ExternalLink } from 'lucide-react';

const stats = [
  {
    label: 'Total Contributors',
    value: '50,000+',
    icon: Users,
    color: 'text-secondary'
  },
  {
    label: 'Map Objects',
    value: '10M+',
    icon: MapIcon,
    color: 'text-accent-purple'
  },
  {
    label: 'Daily Updates',
    value: '100K+',
    icon: Activity,
    color: 'text-accent'
  }
];

export default function AboutStats() {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className={`p-3 rounded-lg bg-slate-50 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-charcoal">{stat.value}</div>
              <div className="text-sm text-neutral-slate">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center">
        <a 
          href="https://osmstats.neis-one.org/?item=countries&country=India" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-secondary font-medium hover:text-secondary-light transition-colors"
        >
          View Live Statistics for India
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

