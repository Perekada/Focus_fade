import React, { useState } from 'react';
import { SERVICES_MENU } from '../data/barbershopData';
import { BookingData } from '../types';
import { Calendar, ChevronDown, CheckCircle2 } from 'lucide-react';

interface QuickBookingSectionProps {
  onBookingSuccess: (booking: BookingData) => void;
  preselectedServiceId?: string;
}

export const QuickBookingSection: React.FC<QuickBookingSectionProps> = ({
  onBookingSuccess,
  preselectedServiceId,
}) => {
  const [serviceId, setServiceId] = useState(preselectedServiceId || 'adults');
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('morning');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedService = SERVICES_MENU.find((s) => s.id === serviceId) || SERVICES_MENU[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      setError('Please enter your contact phone number.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    const timeLabel =
      time === 'morning'
        ? 'Morning (9:00 AM - 12:00 PM)'
        : time === 'afternoon'
        ? 'Afternoon (12:00 PM - 4:00 PM)'
        : 'Evening (4:00 PM - 7:00 PM)';

    const newBooking: BookingData = {
      id: 'FF-' + Math.floor(100000 + Math.random() * 900000),
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      servicePrice: selectedService.price,
      barberId: 'any',
      barberName: 'First Available Master Barber',
      date,
      time: timeLabel,
      fullName: fullName.trim(),
      email: email.trim() || `${fullName.toLowerCase().replace(/\s+/g, '')}@guest.focusfade.com`,
      phone: phone.trim(),
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onBookingSuccess(newBooking);
      setFullName('');
      setPhone('');
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-24 bg-[#121212] relative" id="book">
      {/* Subtle top divider with crimson glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D32F2F]/40 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-8 md:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#E5E2E1] uppercase tracking-tight mb-3">
            Request an Appointment
          </h2>
          <p className="text-sm sm:text-base text-[#C4C7C7]">Select your service and preferred time.</p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0A0A0A] border border-[#20201F] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Top Crimson Bevel Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A1A1A] via-[#D32F2F] to-[#1A1A1A]" />

          {error && (
            <div className="mb-6 p-3 bg-[#93000A]/30 border border-[#FFB4AB]/40 text-[#FFB4AB] text-xs">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Selection */}
            <div className="col-span-1 md:col-span-2 relative group">
              <label className="block font-sans text-[12px] uppercase tracking-widest text-[#C4C7C7] mb-2 font-semibold">
                Service Required
              </label>
              <div className="relative">
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-[#E5E2E1] font-sans py-3 pr-10 focus:ring-0 focus:border-[#D32F2F] transition-colors appearance-none cursor-pointer text-base"
                >
                  {SERVICES_MENU.map((srv) => (
                    <option key={srv.id} value={srv.id} className="bg-[#121212] text-white py-2">
                      {srv.name} — {srv.formattedPrice}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 text-[#8E9192] absolute right-0 bottom-3 pointer-events-none group-focus-within:text-[#D32F2F]" />
              </div>
            </div>

            {/* Date */}
            <div className="relative group">
              <label className="block font-sans text-[12px] uppercase tracking-widest text-[#C4C7C7] mb-2 font-semibold">
                Preferred Date
              </label>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-[#E5E2E1] font-sans py-3 focus:ring-0 focus:border-[#D32F2F] transition-colors [color-scheme:dark] text-base cursor-pointer"
              />
            </div>

            {/* Time */}
            <div className="relative group">
              <label className="block font-sans text-[12px] uppercase tracking-widest text-[#C4C7C7] mb-2 font-semibold">
                Preferred Time Window
              </label>
              <div className="relative">
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-[#E5E2E1] font-sans py-3 pr-10 focus:ring-0 focus:border-[#D32F2F] transition-colors appearance-none cursor-pointer text-base"
                >
                  <option value="morning" className="bg-[#121212] text-white">
                    Morning (9AM - 12PM)
                  </option>
                  <option value="afternoon" className="bg-[#121212] text-white">
                    Afternoon (12PM - 4PM)
                  </option>
                  <option value="evening" className="bg-[#121212] text-white">
                    Evening (4PM - 7PM)
                  </option>
                </select>
                <ChevronDown className="w-5 h-5 text-[#8E9192] absolute right-0 bottom-3 pointer-events-none group-focus-within:text-[#D32F2F]" />
              </div>
            </div>

            {/* Full Name */}
            <div className="relative group">
              <label className="block font-sans text-[12px] uppercase tracking-widest text-[#C4C7C7] mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-[#E5E2E1] font-sans py-3 focus:ring-0 focus:border-[#D32F2F] transition-colors placeholder:text-[#444748] text-base"
              />
            </div>

            {/* Phone */}
            <div className="relative group">
              <label className="block font-sans text-[12px] uppercase tracking-widest text-[#C4C7C7] mb-2 font-semibold">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="0800 000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-[#E5E2E1] font-sans py-3 focus:ring-0 focus:border-[#D32F2F] transition-colors placeholder:text-[#444748] text-base"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D32F2F] text-white font-sans text-xs uppercase tracking-widest font-semibold py-4 rounded-none hover:bg-[#8B0000] hover:brightness-110 transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-[#D32F2F]/20 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Securing Time Slot...</span>
                ) : (
                  <>
                    <span>Request Booking</span>
                    <Calendar className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-[#8E9192] mt-4">
                Payment is not required until service is completed.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
