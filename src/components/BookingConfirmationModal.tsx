import React, { useState } from 'react';
import { BookingData } from '../types';
import { ASSETS } from '../data/barbershopData';
import { CheckCircle, Calendar, Clock, User, Scissors, MapPin, Copy, Check, Download, ArrowRight, X } from 'lucide-react';

interface BookingConfirmationModalProps {
  booking: BookingData;
  onClose: () => void;
  onViewAllBookings: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  booking,
  onClose,
  onViewAllBookings,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    if (booking.id) {
      navigator.clipboard.writeText(booking.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadTicket = () => {
    const ticketText = `FOCUS-FADE BARBERSHOP - BOOKING RECEIPT
--------------------------------------------
Reference: ${booking.id}
Client: ${booking.fullName}
Phone: ${booking.phone}
Email: ${booking.email}
Service: ${booking.serviceName}
Price: ₦${booking.servicePrice.toLocaleString()} (Pay in studio)
Master Barber: ${booking.barberName}
Date: ${booking.date}
Time: ${booking.time}
Studio Address: Alahun Osumba Street, Maza-Maza, Lagos
Status: ${booking.status}
--------------------------------------------
Thank you for choosing Focus-Fade. Precision in every cut.`;

    const blob = new Blob([ticketText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `FocusFade-${booking.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-[#131313] border border-[#2A2A2A] w-full max-w-lg shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8E9192] hover:text-white p-1 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="text-center pb-6 border-b border-[#222222]">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D32F2F]/15 border border-[#D32F2F] text-[#D32F2F] rounded-full mb-3">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#E5E2E1] uppercase tracking-tight">
            Session Reserved
          </h3>
          <p className="text-xs text-[#8E9192] mt-1">
            Your appointment has been secured at Focus-Fade Studio.
          </p>
        </div>

        {/* Booking Reference Bar */}
        <div className="my-5 p-3.5 bg-[#0E0E0E] border border-[#2A2A2A] flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#8E9192] block">
              Booking Reference
            </span>
            <span className="font-mono text-base font-bold text-[#FFB4AB]">
              {booking.id}
            </span>
          </div>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1 text-xs text-[#E5E2E1] hover:text-[#D32F2F] bg-[#1C1B1B] px-2.5 py-1.5 border border-[#353534] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Appointment Details Summary */}
        <div className="space-y-3.5 text-sm py-2">
          <div className="flex items-start justify-between border-b border-[#1C1B1B] pb-2.5">
            <span className="text-xs uppercase tracking-wider text-[#8E9192] flex items-center gap-1.5">
              <Scissors className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>Service</span>
            </span>
            <span className="font-semibold text-[#E5E2E1] text-right">
              {booking.serviceName}
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-[#1C1B1B] pb-2.5">
            <span className="text-xs uppercase tracking-wider text-[#8E9192] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>Master Barber</span>
            </span>
            <span className="font-semibold text-[#E5E2E1] text-right">
              {booking.barberName}
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-[#1C1B1B] pb-2.5">
            <span className="text-xs uppercase tracking-wider text-[#8E9192] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>Date & Time</span>
            </span>
            <span className="font-semibold text-[#FFB4AB] text-right">
              {booking.date} — {booking.time}
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-[#1C1B1B] pb-2.5">
            <span className="text-xs uppercase tracking-wider text-[#8E9192] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>Location</span>
            </span>
            <span className="text-xs text-[#C4C7C7] text-right">
              Alahun Osumba St, Maza-Maza, Lagos
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs uppercase tracking-wider text-[#8E9192]">
              Total Due in Studio
            </span>
            <span className="font-serif text-xl font-bold text-[#E5E2E1]">
              ₦{booking.servicePrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#222]">
          <button
            onClick={handleDownloadTicket}
            className="w-full flex items-center justify-center gap-2 bg-[#1C1B1B] hover:bg-[#2A2A29] text-[#E5E2E1] border border-[#353534] py-3 text-xs uppercase tracking-widest font-semibold transition-all"
          >
            <Download className="w-4 h-4 text-[#D32F2F]" />
            <span>Download Pass</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onViewAllBookings();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#8B0000] text-white py-3 text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
          >
            <span>My Bookings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-[#8E9192] text-center mt-4">
          Please arrive 5 minutes early. Complimentary espresso or drink provided on arrival.
        </p>
      </div>
    </div>
  );
};
