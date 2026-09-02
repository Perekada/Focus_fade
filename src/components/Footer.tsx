import React from 'react';
import { ASSETS } from '../data/barbershopData';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigateBooking }) => {
  return (
    <footer className="bg-[#0E0E0E] text-[#C4C7C7] w-full py-16 border-t border-[#222222]">
      <div className="flex flex-col md:flex-row justify-between items-start px-4 sm:px-8 md:px-16 gap-12 max-w-[1280px] mx-auto">
        {/* Brand column */}
        <div className="flex flex-col gap-4 max-w-sm">
          <button
            onClick={() => {
              onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity text-left"
          >
            <img
              src={ASSETS.logo}
              alt="Focus-Fade Logo"
              className="h-10 w-10 object-contain rounded"
            />
            <span className="font-serif text-2xl text-[#E5E2E1] font-bold uppercase tracking-widest">
              Focus-Fade
            </span>
          </button>
          <p className="text-sm text-[#8E9192] leading-relaxed mt-2">
            Precision in every cut. The premier destination for the modern gentleman's grooming needs.
          </p>
          <div className="text-xs text-[#706F6F] pt-2">
            Alahun Osumba Street, Maza-Maza, Lagos
          </div>
        </div>

        {/* Links columns */}
        <div className="flex flex-wrap gap-12 md:gap-20">
          {/* Quick navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold text-[#D32F2F] uppercase tracking-widest mb-1">
              Studio
            </span>
            <a
              href="#services"
              onClick={onNavigateHome}
              className="text-xs uppercase tracking-wider text-[#C4C7C7] hover:text-[#D32F2F] transition-colors"
            >
              Services Menu
            </a>
            <a
              href="#gallery"
              onClick={onNavigateHome}
              className="text-xs uppercase tracking-wider text-[#C4C7C7] hover:text-[#D32F2F] transition-colors"
            >
              Our Work
            </a>
            <a
              href="#about"
              onClick={onNavigateHome}
              className="text-xs uppercase tracking-wider text-[#C4C7C7] hover:text-[#D32F2F] transition-colors"
            >
              The Lounge
            </a>
            <button
              onClick={onNavigateBooking}
              className="text-xs uppercase tracking-wider text-[#D32F2F] hover:text-white text-left font-semibold"
            >
              Book A Master Barber →
            </button>
          </div>

          {/* Social Channels */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold text-[#D32F2F] uppercase tracking-widest mb-1">
              Connect
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-wider text-[#C4C7C7] hover:text-[#D32F2F] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-wider text-[#C4C7C7] hover:text-[#D32F2F] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-wider text-[#C4C7C7] hover:text-[#D32F2F] transition-colors"
            >
              Twitter (X)
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold text-[#D32F2F] uppercase tracking-widest mb-1">
              Legal
            </span>
            <a
              href="#privacy"
              onClick={(e) => { e.preventDefault(); alert('Focus-Fade Privacy Policy: Your grooming profile and booking details are strictly confidential.'); }}
              className="text-xs uppercase tracking-wider text-[#C4C7C7] hover:text-[#D32F2F] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => { e.preventDefault(); alert('Focus-Fade Terms of Service: Cancellations requested up to 2 hours prior to scheduled session.'); }}
              className="text-xs uppercase tracking-wider text-[#C4C7C7] hover:text-[#D32F2F] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="px-4 sm:px-8 md:px-16 max-w-[1280px] mx-auto mt-14 pt-8 border-t border-[#1C1B1B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706F6F]">
        <p>© 2024 Focus-Fade Barbershop. Precision in every cut.</p>
        <p className="font-mono text-[11px] text-[#8E9192]">Noir & Crimson Aesthetic Standard</p>
      </div>
    </footer>
  );
};
