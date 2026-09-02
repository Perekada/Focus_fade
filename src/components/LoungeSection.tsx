import React from 'react';
import { ASSETS } from '../data/barbershopData';
import { Wine, Wifi, Sparkles, Clock, MapPin } from 'lucide-react';

export const LoungeSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 md:px-16 max-w-[1280px] mx-auto relative overflow-hidden" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Interior Image */}
        <div className="relative h-[420px] sm:h-[500px] w-full border border-[#20201F] p-3 sm:p-4 bg-[#121212] group">
          <img
            src={ASSETS.loungeInterior}
            alt="Focus-Fade luxury barbershop interior lounge with vintage leather barber chairs and ambient lighting"
            className="w-full h-full object-cover filter grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          {/* Subtle atmospheric ambient glow */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#D32F2F]/15 blur-3xl pointer-events-none" />
          <div className="absolute top-6 left-6 bg-[#0A0A0A]/85 backdrop-blur-sm border border-[#2A2A2A] px-3 py-1.5 text-[11px] uppercase tracking-widest text-[#E5E2E1]">
            Sanctuary Atmosphere
          </div>
        </div>

        {/* Right Editorial Copy */}
        <div className="flex flex-col gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#D32F2F] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Studio Experience</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#E5E2E1] uppercase tracking-tight mb-4">
              The Lounge
            </h2>
            <div className="w-16 h-1 bg-[#D32F2F]"></div>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#C4C7C7] leading-relaxed">
            More than just a haircut, Focus-Fade is a sanctuary for the modern man. We've curated an environment that speaks to classic masculinity while delivering contemporary precision.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#8E9192] leading-relaxed">
            Enjoy a complimentary beverage, soak in the curated playlists, and trust your image to master craftsmen who understand that the perfect fade is a blend of geometry and art.
          </p>

          {/* Amenities & Feature Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#121212] px-4 py-2.5 text-xs uppercase tracking-wider text-[#FFB4AB]">
              <Wine className="w-4 h-4 text-[#D32F2F]" />
              <span>Complimentary Drinks</span>
            </span>

            <span className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#121212] px-4 py-2.5 text-xs uppercase tracking-wider text-[#FFB4AB]">
              <Wifi className="w-4 h-4 text-[#D32F2F]" />
              <span>High-Speed Wi-Fi</span>
            </span>

            <span className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#121212] px-4 py-2.5 text-xs uppercase tracking-wider text-[#FFB4AB]">
              <Clock className="w-4 h-4 text-[#D32F2F]" />
              <span>Appointment Only</span>
            </span>
          </div>

          {/* Location & Hours Quick Snippet */}
          <div className="mt-4 pt-6 border-t border-[#222222] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#8E9192]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D32F2F] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#E5E2E1] block">Maza-Maza Studio</strong>
                <span>Alahun Osumba Street, Maza-Maza, Lagos</span>
              </div>
            </div>
            <div>
              <strong className="text-[#E5E2E1] block">Operating Hours</strong>
              <span>Tue – Sun: 9:00 AM – 8:00 PM (Mon: Closed)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
