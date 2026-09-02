import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServiceMenu } from './components/ServiceMenu';
import { GallerySection } from './components/GallerySection';
import { LoungeSection } from './components/LoungeSection';
import { QuickBookingSection } from './components/QuickBookingSection';
import { BookingStudio } from './components/BookingStudio';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { AppointmentsManagerModal } from './components/AppointmentsManagerModal';
import { Footer } from './components/Footer';
import { ServiceItem, BookingData } from './types';

const INITIAL_SAMPLE_BOOKINGS: BookingData[] = [
  {
    id: 'FF-748291',
    serviceId: 'adult-trim-vip',
    serviceName: 'Adult Trim',
    servicePrice: 15000,
    barberId: 'marcus',
    barberName: 'Marcus (Master)',
    date: 'November 6, 2024',
    time: '11:30 AM',
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '0800 000 0000',
    createdAt: new Date().toISOString(),
    status: 'Confirmed',
  },
];

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'booking' | 'appointments'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  
  // Bookings list in state, loaded from local storage
  const [bookings, setBookings] = useState<BookingData[]>(() => {
    try {
      const saved = localStorage.getItem('focus_fade_bookings');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_SAMPLE_BOOKINGS;
  });

  // Active confirmation modal
  const [activeConfirmation, setActiveConfirmation] = useState<BookingData | null>(null);
  const [isAppointmentsModalOpen, setIsAppointmentsModalOpen] = useState(false);

  // Sync bookings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('focus_fade_bookings', JSON.stringify(bookings));
    } catch {
      // ignore
    }
  }, [bookings]);

  const handleNavigate = (view: 'home' | 'booking' | 'appointments', sectionId?: string) => {
    if (view === 'appointments') {
      setIsAppointmentsModalOpen(true);
      return;
    }

    setCurrentView(view);
    if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromMenu = (service: ServiceItem) => {
    setSelectedServiceId(service.id);
    setCurrentView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookStyle = (_styleName: string) => {
    setSelectedServiceId('adult-trim-vip');
    setCurrentView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingConfirmed = (newBooking: BookingData) => {
    setBookings((prev) => [newBooking, ...prev]);
    setActiveConfirmation(newBooking);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E2E1] flex flex-col selection:bg-[#D32F2F] selection:text-white">
      {/* Top Fixed Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        bookingCount={bookings.length}
      />

      {/* Main Content Area */}
      <div className="flex-grow pt-[64px]">
        {currentView === 'home' ? (
          <div>
            {/* Hero Section */}
            <HeroSection
              onBookClick={() => handleNavigate('booking')}
              onExploreMenu={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Service Menu Section */}
            <ServiceMenu onSelectService={handleSelectServiceFromMenu} />

            {/* Our Work / Gallery Section */}
            <GallerySection onBookStyle={handleBookStyle} />

            {/* The Lounge / About Section */}
            <LoungeSection />

            {/* Quick Request Appointment Form */}
            <QuickBookingSection
              onBookingSuccess={handleBookingConfirmed}
              preselectedServiceId={selectedServiceId}
            />
          </div>
        ) : (
          /* Dedicated Booking Studio Screen (Image 4 "Secure Your Session") */
          <BookingStudio
            initialServiceId={selectedServiceId}
            onBookingConfirmed={handleBookingConfirmed}
            onBackToHome={() => handleNavigate('home')}
          />
        )}
      </div>

      {/* Footer */}
      <Footer
        onNavigateHome={() => handleNavigate('home')}
        onNavigateBooking={() => handleNavigate('booking')}
      />

      {/* Confirmation Modal */}
      {activeConfirmation && (
        <BookingConfirmationModal
          booking={activeConfirmation}
          onClose={() => setActiveConfirmation(null)}
          onViewAllBookings={() => {
            setActiveConfirmation(null);
            setIsAppointmentsModalOpen(true);
          }}
        />
      )}

      {/* Appointments Manager Modal */}
      {isAppointmentsModalOpen && (
        <AppointmentsManagerModal
          bookings={bookings}
          onClose={() => setIsAppointmentsModalOpen(false)}
          onCancelBooking={handleCancelBooking}
          onNewBooking={() => {
            setIsAppointmentsModalOpen(false);
            setCurrentView('booking');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
}
