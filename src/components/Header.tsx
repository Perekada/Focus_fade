import React, { useState } from 'react';
import { ASSETS } from '../data/barbershopData';
import { Menu, X, CalendarCheck } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'booking' | 'appointments';
  onNavigate: (view: 'home' | 'booking' | 'appointments', sectionId?: string) => void;
  bookingCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, bookingCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId?: string) => {
    if (sectionId) {
      if (currentView !== 'home') {
        onNavigate('home', sectionId);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      onNavigate('home');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#131313]/95 border-b border-[#2A2A2A]/80 backdrop-blur-md fixed top-0 w-full z-50 transition-all">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-3.5 max-w-[1280px] mx-auto">
        {/* Brand Logo & Name */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity text-left focus:outline-none"
          id="brand-logo-btn"
        >
          <img
            src={ASSETS.logo}
            alt="Focus-Fade Logo"
            className="h-10 w-10 object-contain rounded"
          />
          <span className="font-serif text-xl sm:text-2xl font-bold text-[#E5E2E1] uppercase tracking-widest hidden sm:inline-block">
            FOCUS-FADE
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center" id="desktop-nav">
          <button
            onClick={() => handleNavClick('services')}
            className={`font-sans text-xs uppercase tracking-widest font-semibold transition-colors duration-200 pb-1 ${
              currentView === 'home'
                ? 'text-[#D32F2F] border-b-2 border-[#D32F2F]'
                : 'text-[#C4C7C7] hover:text-[#D32F2F]'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className="font-sans text-xs uppercase tracking-widest font-semibold text-[#C4C7C7] hover:text-[#D32F2F] transition-colors duration-200 pb-1"
          >
            Gallery
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="font-sans text-xs uppercase tracking-widest font-semibold text-[#C4C7C7] hover:text-[#D32F2F] transition-colors duration-200 pb-1"
          >
            About
          </button>
          
          {/* Quick Appointments Link */}
          {bookingCount > 0 && (
            <button
              onClick={() => onNavigate('appointments')}
              className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest font-semibold text-[#FFB4AB] hover:text-white transition-colors bg-[#1C1B1B] px-3 py-1.5 border border-[#353534]"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>Bookings ({bookingCount})</span>
            </button>
          )}
        </nav>

        {/* Right CTA / Book Now */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('booking')}
            id="header-book-btn"
            className="bg-[#D32F2F] text-white font-sans text-xs uppercase tracking-widest font-semibold py-3 px-6 rounded-none hover:bg-[#8B0000] hover:brightness-110 transition-all duration-300 shadow-md shadow-[#D32F2F]/20 cursor-pointer"
          >
            Book Now
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#E5E2E1] p-2 hover:text-[#D32F2F] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131313] border-b border-[#2A2A2A] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('services')}
            className="text-left font-sans text-sm uppercase tracking-widest font-semibold text-[#E5E2E1] hover:text-[#D32F2F] py-2 border-b border-[#20201F]"
          >
            Services Menu
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className="text-left font-sans text-sm uppercase tracking-widest font-semibold text-[#E5E2E1] hover:text-[#D32F2F] py-2 border-b border-[#20201F]"
          >
            Our Work & Gallery
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="text-left font-sans text-sm uppercase tracking-widest font-semibold text-[#E5E2E1] hover:text-[#D32F2F] py-2 border-b border-[#20201F]"
          >
            The Lounge (About)
          </button>
          <button
            onClick={() => {
              onNavigate('booking');
              setMobileMenuOpen(false);
            }}
            className="text-left font-sans text-sm uppercase tracking-widest font-semibold text-[#D32F2F] py-2 flex items-center justify-between"
          >
            <span>Full Booking Studio</span>
            <span>→</span>
          </button>
          {bookingCount > 0 && (
            <button
              onClick={() => {
                onNavigate('appointments');
                setMobileMenuOpen(false);
              }}
              className="text-left font-sans text-sm uppercase tracking-widest font-semibold text-[#C4C7C7] hover:text-white py-2 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-[#D32F2F]" />
              <span>My Scheduled Appointments ({bookingCount})</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
