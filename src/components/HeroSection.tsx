import React from 'react';
import { ASSETS } from '../data/barbershopData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick, onExploreMenu }) => {
  return (
    <section className="relative w-full min-h-[640px] md:min-h-[760px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Luxury Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroBanner}
          alt="Precision modern fade haircut on model in vintage leather barber chair with warm moody atmospheric lighting"
          className="w-full h-full object-cover object-center opacity-60 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Obsidian Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-16 md:mt-20">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A]/80 border border-[#2A2A2A] text-xs uppercase tracking-widest text-[#FFB4AB] backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#D32F2F]" />
          <span>Exclusive Grooming Experience</span>
        </div>

        {/* Display Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-[#E5E2E1] uppercase tracking-tight leading-[1.08] max-w-3xl">
          Precision Meets <span className="gradient-text">Artistry</span>.
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#C4C7C7] max-w-2xl mx-auto leading-relaxed font-normal">
          Experience the ultimate fade in a studio built for the modern gentleman. Uncompromising quality, meticulous attention to detail.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            id="hero-secure-slot-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D32F2F] text-white font-sans text-xs uppercase tracking-widest font-semibold py-4 px-8 rounded-none hover:bg-white hover:text-black transition-all duration-300 group shadow-lg shadow-[#D32F2F]/25 cursor-pointer"
          >
            <span>Secure Your Slot</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#353534] bg-[#121212]/70 backdrop-blur-sm text-[#E5E2E1] hover:border-[#D32F2F] hover:text-[#D32F2F] font-sans text-xs uppercase tracking-widest font-semibold py-4 px-7 transition-all duration-300 cursor-pointer"
          >
            Explore Services
          </button>
        </div>

        {/* Subtle quick indicators */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-8 pt-8 border-t border-[#2A2A2A]/60 w-full max-w-xl text-center">
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-white">100%</div>
            <div className="text-[11px] uppercase tracking-wider text-[#8E9192] mt-0.5">Master Cuts</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-white">4.9 ★</div>
            <div className="text-[11px] uppercase tracking-wider text-[#8E9192] mt-0.5">Client Rating</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-white">VIP</div>
            <div className="text-[11px] uppercase tracking-wider text-[#8E9192] mt-0.5">Lounge Access</div>
          </div>
        </div>
      </div>
    </section>
  );
};
