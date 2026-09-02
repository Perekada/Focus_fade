import React, { useState } from 'react';
import { VIP_SERVICES, SERVICES_MENU, BARBERS, AVAILABLE_TIME_SLOTS } from '../data/barbershopData';
import { ServiceItem, BarberItem, BookingData } from '../types';
import { ChevronLeft, ChevronRight, Users, ArrowRight, Check, Sparkles, Scissors } from 'lucide-react';

interface BookingStudioProps {
  onBookingConfirmed: (booking: BookingData) => void;
  onBackToHome: () => void;
  initialServiceId?: string;
}

export const BookingStudio: React.FC<BookingStudioProps> = ({
  onBookingConfirmed,
  onBackToHome,
  initialServiceId,
}) => {
  // Combine VIP & Standard services so user can pick either tier
  const allServices = [...VIP_SERVICES, ...SERVICES_MENU.filter(s => !VIP_SERVICES.some(v => v.name.toLowerCase() === s.name.toLowerCase()))];

  const defaultService = allServices.find((s) => s.id === initialServiceId) || VIP_SERVICES[0];

  const [selectedService, setSelectedService] = useState<ServiceItem>(defaultService);
  const [selectedBarber, setSelectedBarber] = useState<BarberItem>(BARBERS[0]);
  
  // Date State
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date(2024, 10, 1)); // November 2024 as in mock, or dynamic
  const [selectedDay, setSelectedDay] = useState<number>(6); // Day 6 as highlighted in screenshot
  const [selectedTime, setSelectedTime] = useState<string>('11:30 AM');

  // Contact State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Month navigation
  const prevMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1));
  };
  const nextMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1));
  };

  const monthName = currentMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  const year = currentMonthDate.getFullYear();
  const monthIndex = currentMonthDate.getMonth();

  // Generate calendar days
  const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, monthIndex, 0).getDate();

  const prevMonthDays = Array.from({ length: firstDayOfWeek }, (_, i) => daysInPrevMonth - firstDayOfWeek + i + 1);
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Please provide your full name for the booking.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('Please provide a contact phone number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    const formattedDateString = `${monthName} ${selectedDay}, ${year}`;

    const newBooking: BookingData = {
      id: 'FF-' + Math.floor(100000 + Math.random() * 900000),
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      servicePrice: selectedService.price,
      barberId: selectedBarber.id,
      barberName: selectedBarber.name,
      date: formattedDateString,
      time: selectedTime,
      fullName: fullName.trim(),
      email: email.trim() || `${fullName.toLowerCase().replace(/\s+/g, '')}@guest.focusfade.com`,
      phone: phone.trim(),
      notes: notes.trim(),
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onBookingConfirmed(newBooking);
    }, 500);
  };

  return (
    <main className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-10 md:py-20 animate-in fade-in duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="text-xs uppercase tracking-widest text-[#8E9192] hover:text-[#D32F2F] flex items-center gap-1.5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </button>
          <span className="text-xs uppercase tracking-widest text-[#D32F2F] font-semibold bg-[#1C1B1B] px-3 py-1 border border-[#2A2A2A]">
            Direct Reservation
          </span>
        </div>

        {/* Page Title & Subtitle */}
        <div className="mb-10 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#E5E2E1] uppercase tracking-tight mb-3">
            Secure Your Session
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#C4C7C7] max-w-xl mx-auto">
            Experience precision grooming. Select your service, choose your master barber, and reserve your time.
          </p>
        </div>

        {/* Master Booking Form Container */}
        <div className="bg-[#20201F] rounded-none border border-[#2A2A2A] overflow-hidden shadow-2xl p-6 sm:p-8 md:p-10 relative">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1B1B]/60 to-transparent pointer-events-none" />

          {errorMessage && (
            <div className="relative z-20 mb-6 p-4 bg-[#93000A]/30 border border-[#FFB4AB]/50 text-[#FFB4AB] text-xs">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleConfirm} className="relative z-10 space-y-12">
            {/* STEP 1: Select Service */}
            <section id="step-service">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A2A29] border border-[#353534] text-[#D32F2F] font-sans font-bold text-sm">
                  1
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#E5E2E1]">Select Service</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {VIP_SERVICES.map((service) => {
                  const isSelected = selectedService.id === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`relative flex items-center justify-between p-4 bg-[#131313] border transition-all cursor-pointer group ${
                        isSelected
                          ? 'border-[#D32F2F] shadow-md shadow-[#D32F2F]/10'
                          : 'border-[#2A2A2A] hover:border-[#444748]'
                      }`}
                      role="radio"
                      aria-checked={isSelected}
                    >
                      {/* Active Indicator line on left and bottom */}
                      {isSelected && (
                        <>
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D32F2F]" />
                          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D32F2F]" />
                        </>
                      )}

                      <div className="flex flex-col ml-2">
                        <span
                          className={`font-sans text-sm font-semibold tracking-wider transition-colors ${
                            isSelected ? 'text-[#D32F2F]' : 'text-[#E5E2E1] group-hover:text-white'
                          }`}
                        >
                          {service.name}
                        </span>
                        <span className="font-sans text-xs text-[#8E9192] mt-0.5">
                          {service.subtitle || service.duration}
                        </span>
                      </div>

                      <span className="font-sans text-sm font-bold text-[#E5E2E1]">
                        {service.formattedPrice}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Toggle to view standard salon services */}
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-[#8E9192]">
                <span>Looking for standard salon services?</span>
                <div className="flex flex-wrap gap-2">
                  {SERVICES_MENU.slice(0, 3).map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setSelectedService(item)}
                      className={`px-2 py-1 border transition-colors ${
                        selectedService.id === item.id
                          ? 'border-[#D32F2F] text-[#D32F2F] bg-[#131313]'
                          : 'border-[#2A2A2A] text-[#C4C7C7] hover:border-[#8E9192]'
                      }`}
                    >
                      {item.name} ({item.formattedPrice})
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* STEP 2: Barber Selection */}
            <section id="step-barber">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A2A29] border border-[#353534] text-[#D32F2F] font-sans font-bold text-sm">
                  2
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#E5E2E1]">Choose Master</h2>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                {BARBERS.map((barber) => {
                  const isSelected = selectedBarber.id === barber.id;
                  return (
                    <div
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber)}
                      className={`relative flex-shrink-0 w-36 flex flex-col items-center p-4 bg-[#131313] border transition-all cursor-pointer group snap-start ${
                        isSelected
                          ? 'border-[#D32F2F] shadow-md shadow-[#D32F2F]/10'
                          : 'border-[#2A2A2A] hover:border-[#444748]'
                      }`}
                      role="radio"
                      aria-checked={isSelected}
                    >
                      {isSelected && (
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D32F2F]" />
                      )}

                      {/* Avatar Circle */}
                      <div
                        className={`w-16 h-16 rounded-full overflow-hidden mb-3 border-2 transition-all ${
                          isSelected ? 'border-[#D32F2F]' : 'border-transparent group-hover:border-[#444748]'
                        }`}
                      >
                        {barber.avatarUrl ? (
                          <img
                            src={barber.avatarUrl}
                            alt={barber.name}
                            className={`w-full h-full object-cover transition-all duration-300 ${
                              isSelected ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                            }`}
                          />
                        ) : (
                          <div className="w-full h-full bg-[#353534] flex items-center justify-center">
                            <Users className="w-7 h-7 text-[#C4C7C7]" />
                          </div>
                        )}
                      </div>

                      <span className="font-sans text-sm font-semibold text-[#E5E2E1] text-center">
                        {barber.name}
                      </span>
                      <span
                        className={`font-sans text-xs mt-0.5 ${
                          barber.role === 'Master' ? 'text-[#D32F2F]' : 'text-[#8E9192]'
                        }`}
                      >
                        {barber.role}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-[#8E9192] mt-2 italic">
                {selectedBarber.bio}
              </p>
            </section>

            {/* STEP 3: Date & Time */}
            <section id="step-datetime">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A2A29] border border-[#353534] text-[#D32F2F] font-sans font-bold text-sm">
                  3
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#E5E2E1]">Date & Time</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Minimalist Date Picker */}
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-[#C4C7C7] mb-3 font-semibold">
                    Select Date
                  </h3>
                  <div className="bg-[#131313] border border-[#2A2A2A] p-4">
                    {/* Month Controls */}
                    <div className="flex justify-between items-center mb-4">
                      <button
                        type="button"
                        onClick={prevMonth}
                        className="text-[#E5E2E1] hover:text-[#D32F2F] p-1 transition-colors"
                        aria-label="Previous Month"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="font-sans text-sm font-semibold tracking-wider text-[#E5E2E1]">
                        {monthName}
                      </span>
                      <button
                        type="button"
                        onClick={nextMonth}
                        className="text-[#E5E2E1] hover:text-[#D32F2F] p-1 transition-colors"
                        aria-label="Next Month"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Day Headers */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((dayChar, i) => (
                        <span key={i} className="text-xs text-[#8E9192] font-semibold">
                          {dayChar}
                        </span>
                      ))}
                    </div>

                    {/* Day Numbers */}
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {/* Previous month padding days */}
                      {prevMonthDays.map((d) => (
                        <div key={`prev-${d}`} className="p-2 text-[#444748] opacity-40 select-none">
                          {d}
                        </div>
                      ))}

                      {/* Current month selectable days */}
                      {currentMonthDays.map((dayNum) => {
                        const isDaySelected = selectedDay === dayNum;
                        return (
                          <div
                            key={`curr-${dayNum}`}
                            onClick={() => setSelectedDay(dayNum)}
                            className={`p-2 transition-all cursor-pointer font-medium ${
                              isDaySelected
                                ? 'bg-[#D32F2F] text-white font-bold shadow-md shadow-[#D32F2F]/30'
                                : 'text-[#E5E2E1] hover:bg-[#20201F] hover:text-[#D32F2F]'
                            }`}
                          >
                            {dayNum}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Available Times */}
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-[#C4C7C7] mb-3 font-semibold">
                    Available Times
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {AVAILABLE_TIME_SLOTS.map((slot) => {
                      const isSelected = selectedTime === slot.time;
                      if (!slot.available) {
                        return (
                          <div
                            key={slot.time}
                            className="bg-[#131313] border border-[#2A2A2A] text-center p-3 opacity-40 cursor-not-allowed select-none"
                          >
                            <span className="font-sans text-xs text-[#8E9192] line-through block">
                              {slot.time}
                            </span>
                            <span className="text-[10px] text-[#FFB4AB] block">Booked</span>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={slot.time}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`relative block bg-[#131313] border text-center p-3 cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#D32F2F] shadow-sm shadow-[#D32F2F]/20'
                              : 'border-[#2A2A2A] hover:border-[#8E9192]'
                          }`}
                        >
                          <span
                            className={`font-sans text-xs font-semibold tracking-wider ${
                              isSelected ? 'text-[#D32F2F]' : 'text-[#E5E2E1]'
                            }`}
                          >
                            {slot.time}
                          </span>
                          {isSelected && (
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D32F2F]" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Selected Summary Badge */}
                  <div className="mt-4 p-3 bg-[#131313] border border-[#2A2A2A] flex items-center justify-between text-xs text-[#C4C7C7]">
                    <span>Chosen Slot:</span>
                    <span className="font-semibold text-[#FFB4AB]">
                      {monthName} {selectedDay}, {year} @ {selectedTime}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* STEP 4: Contact Details */}
            <section id="step-details">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2A2A29] border border-[#353534] text-[#D32F2F] font-sans font-bold text-sm">
                  4
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#E5E2E1]">Your Details</h2>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#C4C7C7] mb-2 font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-[#444748] px-0 py-2.5 text-[#E5E2E1] focus:ring-0 focus:border-b-2 focus:border-[#D32F2F] transition-colors placeholder:text-[#444748] text-base"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block font-sans text-xs uppercase tracking-widest text-[#C4C7C7] mb-2 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-[#444748] px-0 py-2.5 text-[#E5E2E1] focus:ring-0 focus:border-b-2 focus:border-[#D32F2F] transition-colors placeholder:text-[#444748] text-base"
                    />
                  </div>

                  <div className="relative">
                    <label className="block font-sans text-xs uppercase tracking-widest text-[#C4C7C7] mb-2 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0800 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-[#444748] px-0 py-2.5 text-[#E5E2E1] focus:ring-0 focus:border-b-2 focus:border-[#D32F2F] transition-colors placeholder:text-[#444748] text-base"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#C4C7C7] mb-2 font-semibold">
                    Special Cut Request or Styling Note (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Skin taper on sides, leave length on top, beard oil finish"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-[#444748] px-0 py-2 text-[#E5E2E1] focus:ring-0 focus:border-b-2 focus:border-[#D32F2F] transition-colors placeholder:text-[#444748] text-sm"
                  />
                </div>
              </div>
            </section>

            {/* Bottom Final Checkout Action Bar */}
            <div className="pt-8 border-t border-[#353534] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="font-sans text-xs uppercase tracking-wider text-[#8E9192]">
                  Total Due in Studio
                </p>
                <p className="font-serif text-3xl font-bold text-[#E5E2E1] mt-0.5">
                  {selectedService.formattedPrice}
                </p>
                <p className="text-[11px] text-[#8E9192] mt-0.5">
                  Includes {selectedService.name} with {selectedBarber.name}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                id="confirm-booking-btn"
                className="w-full md:w-auto bg-[#D32F2F] hover:bg-[#8B0000] text-white font-sans text-xs uppercase tracking-widest font-semibold px-10 py-4 rounded-none transition-all duration-300 shadow-lg shadow-[#D32F2F]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Securing Slot...</span>
                ) : (
                  <>
                    <span>Confirm Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
