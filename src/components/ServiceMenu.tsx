import React from 'react';
import { SERVICES_MENU } from '../data/barbershopData';
import { ServiceItem } from '../types';
import { Scissors, Clock, ArrowUpRight } from 'lucide-react';

interface ServiceMenuProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({ onSelectService }) => {
  return (
    <section className="py-24 px-4 sm:px-8 md:px-16 max-w-[1280px] mx-auto relative" id="services">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#D32F2F] mb-2">
          <Scissors className="w-3.5 h-3.5" />
          <span>Tailored Pricing</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#E5E2E1] uppercase tracking-tight mb-4">
          The Service Menu
        </h2>
        <div className="w-16 h-1 bg-[#D32F2F] mx-auto"></div>
        <p className="text-sm text-[#8E9192] mt-4 max-w-md mx-auto">
          Every service includes a personalized consultation, hot lather razor finish, and premium styling.
        </p>
      </div>

      {/* Services Grid with Dot-Leaders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
        {SERVICES_MENU.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectService(item)}
            className="group cursor-pointer p-3 -mx-3 rounded hover:bg-[#161616] transition-all duration-200 border border-transparent hover:border-[#2A2A2A]"
            role="button"
            tabIndex={0}
            aria-label={`Book ${item.name} for ${item.formattedPrice}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onSelectService(item);
              }
            }}
          >
            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#E5E2E1] group-hover:text-[#D32F2F] transition-colors font-semibold">
                  {item.name}
                </span>
                {item.subtitle && (
                  <span className="text-xs text-[#8E9192] group-hover:text-[#C4C7C7] transition-colors mt-0.5">
                    {item.subtitle}
                  </span>
                )}
              </div>
              
              {/* Dot leader */}
              <div className="dot-leader group-hover:border-[#D32F2F] transition-colors" />

              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#D32F2F]">
                  {item.formattedPrice}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#8E9192] opacity-0 group-hover:opacity-100 group-hover:text-[#D32F2F] transition-all -translate-y-0.5" />
              </div>
            </div>

            {/* Service Subtext & Duration Details on Hover / Mobile */}
            <div className="flex items-center justify-between text-[11px] text-[#706F6F] mt-1.5 pt-1 border-t border-[#1C1B1B]">
              <span className="truncate pr-2">{item.description}</span>
              <span className="flex items-center gap-1 text-[#8E9192] flex-shrink-0">
                <Clock className="w-3 h-3 text-[#D32F2F]" />
                {item.duration}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* VIP / Custom Request Note */}
      <div className="mt-14 p-6 bg-[#121212] border border-[#20201F] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D32F2F] font-semibold">Executive Grooming</span>
          <p className="text-sm text-[#C4C7C7] mt-0.5">Need a full package, wedding party consultation, or custom home service?</p>
        </div>
        <button
          onClick={() => {
            const homeService = SERVICES_MENU.find(s => s.id === 'home-service') || SERVICES_MENU[0];
            onSelectService(homeService);
          }}
          className="px-6 py-2.5 bg-[#1C1B1B] hover:bg-[#D32F2F] text-white text-xs uppercase tracking-widest font-semibold border border-[#353534] hover:border-[#D32F2F] transition-all flex-shrink-0"
        >
          Book VIP Package
        </button>
      </div>
    </section>
  );
};
