'use client';

import React from 'react';
import { Check } from 'lucide-react';

const SponsorshipTier = ({ 
  name, 
  price, 
  features, 
  gradient, 
  isIndividual = false 
}: { 
  name: string; 
  price?: string; 
  features: string[]; 
  gradient: string;
  isIndividual?: boolean;
}) => (
  <div className={`relative p-8 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${gradient} text-white`}>
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        {!isIndividual && <span className="text-sm opacity-90">{name === 'Platinum' ? 'Title Sponsor' : (name === 'Gold' ? 'Co-Sponsor' : '')}</span>}
      </div>
      {price && (
        <div className="text-right">
          <span className="text-2xl font-bold">{price}</span>
        </div>
      )}
    </div>
    
    <ul className="space-y-3 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm">
          <Check className="w-5 h-5 flex-shrink-0 opacity-80" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    {isIndividual && (
       <div className="mt-4 pt-4 border-t border-white/20">
         <p className="text-xs opacity-80">*Only available for individuals.</p>
       </div>
    )}
  </div>
);

export default function Sponsorship() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  const tiers = [
    {
      name: "Platinum",
      price: "₹50,000",
      gradient: "bg-gradient-to-br from-[#7AA1B4] to-[#A8C8D9]", // Muted teal/blue
      features: [
        "Booth space (4 m²)",
        "Keynote Slot (max. 25 min)",
        "Everything in Gold"
      ]
    },
    {
      name: "Gold",
      price: "₹35,000",
      gradient: "bg-gradient-to-br from-[#B5A642] to-[#D9C962]", // Goldish
      features: [
        "Shoutout from OSM India handles on social media",
        "Keynote Slot (max. 15 min)",
        "Everything in Silver"
      ]
    },
    {
      name: "Silver",
      price: "₹25,000",
      gradient: "bg-gradient-to-br from-[#757575] to-[#9E9E9E]", // Silver/Grey
      features: [
        "Standee space (3x6 feet)",
        "Logo on SotM India website"
      ]
    },
    {
      name: "Individual",
      gradient: "bg-gradient-to-br from-[#B8860B] to-[#CD853F]", // Bronze/Copper
      isIndividual: true,
      features: [
        "Support the conference as an individual!",
        "Gold Tier @ ₹5,000",
        "Silver Tier @ ₹2,000"
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-12 md:py-16 px-6 bg-slate-50">
        {/* Gold Sponsors Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#B5A642' }}>Gold Sponsor</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-6xl mx-auto px-4">
            <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-yellow-100 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img src={`${basePath}/images/grabmaps.png`} alt="GrabMaps" className="h-32 md:h-48 w-auto" />
            </div>
          </div>
        </div>

        {/* Silver Sponsors Section (Supported by) */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-neutral-charcoal mb-12">Supported by</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            {[
              { src: 'eukarya.png', alt: 'Eukarya', h: 'h-16 md:h-20' },
              { src: 'OSGEOTH.png', alt: 'OSGeo Thailand', h: 'h-16 md:h-20' },
              { src: 'gateway.png', alt: 'Gateway Geo', h: 'h-16 md:h-20' },
              { src: 'osgeo.png', alt: 'OSGeo', h: 'h-16 md:h-20' },
              { src: 'tomtom.png', alt: 'TomTom', h: 'h-16 md:h-20' },
              { src: 'stadia.png', alt: 'Stadia Maps', h: 'h-14 md:h-16' },
              { src: 'foss4gjp.png', alt: 'FOSS4G Japan', h: 'h-14 md:h-16' },
              { src: 'osgeo_kr.png', alt: 'OSGeo Korea', h: 'h-14 md:h-16' }
            ].map((logo, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center justify-center transition-transform hover:scale-105 duration-300">
                <img src={`${basePath}/images/${logo.src}`} alt={logo.alt} className={`${logo.h} w-auto`} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
           <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Sponsorship Opportunities</h2>
           <p className="text-sm md:text-base text-neutral-slate max-w-xl mx-auto">
             Join us in making SOTM India 2026 a success
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <SponsorshipTier key={index} {...tier} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-neutral-slate mb-6">
            Ready to sponsor or have questions? Reach out to us at <a href="mailto:contact@stateofthemap.in" className="text-secondary font-medium hover:underline">contact@stateofthemap.in</a>
          </p>
          <a 
            href={`${basePath}/docs/sponsorship.pdf`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary-light transition-all transform hover:-translate-y-0.5"
          >
            Download Sponsorship Brochure
          </a>
        </div>
    </section>
  );
}

