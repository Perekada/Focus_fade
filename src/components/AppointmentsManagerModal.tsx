import React from 'react';
import { BookingData } from '../types';
import { Calendar, Clock, User, Scissors, Trash2, X, PlusCircle } from 'lucide-react';

interface AppointmentsManagerModalProps {
  bookings: BookingData[];
  onClose: () => void;
  onCancelBooking: (id: string) => void;
  onNewBooking: () => void;
}

export const AppointmentsManagerModal: React.FC<AppointmentsManagerModalProps> = ({
  bookings,
  onClose,
  onCancelBooking,
  onNewBooking,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-[#131313] border border-[#2A2A2A] w-full max-w-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#E5E2E1] uppercase tracking-tight">
              My Appointments
            </h3>
            <p className="text-xs text-[#8E9192] mt-0.5">
              Review and manage your scheduled sessions.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#8E9192] hover:text-white p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bookings List */}
        <div className="flex-grow overflow-y-auto py-4 space-y-4 my-2">
          {bookings.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-[#2A2A2A] bg-[#0E0E0E] p-8">
              <Calendar className="w-10 h-10 text-[#444748] mx-auto mb-3" />
              <p className="text-sm text-[#C4C7C7]">No active appointments scheduled.</p>
              <p className="text-xs text-[#8E9192] mt-1 mb-4">
                Choose a service and reserve your master barber today.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNewBooking();
                }}
                className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#8B0000] transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          ) : (
            bookings.map((b) => (
              <div
                key={b.id || Math.random()}
                className="bg-[#0E0E0E] border border-[#262626] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D32F2F]/60 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#FFB4AB] bg-[#1C1B1B] px-2 py-0.5 border border-[#353534]">
                      {b.id}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5">
                      {b.status}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#E5E2E1]">
                    {b.serviceName}
                  </h4>

                  <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-[#8E9192]">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#D32F2F]" />
                      {b.barberName}
                    </span>
                    <span className="flex items-center gap-1 text-[#C4C7C7]">
                      <Clock className="w-3.5 h-3.5 text-[#D32F2F]" />
                      {b.date} @ {b.time}
                    </span>
                  </div>

                  <div className="text-xs text-[#8E9192]">
                    Guest: <span className="text-[#E5E2E1]">{b.fullName}</span> ({b.phone})
                  </div>
                </div>

                <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-3 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#1F1F1F]">
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-[#8E9192] block">Studio Fee</span>
                    <span className="font-serif text-base font-bold text-[#E5E2E1]">
                      ₦{b.servicePrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => b.id && onCancelBooking(b.id)}
                    className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#FFB4AB] hover:text-red-400 bg-[#93000A]/20 hover:bg-[#93000A]/40 px-2.5 py-1 border border-[#93000A]/50 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#222222] flex justify-between items-center">
          <button
            onClick={() => {
              onClose();
              onNewBooking();
            }}
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#D32F2F] hover:text-white"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Schedule Another Session</span>
          </button>

          <button
            onClick={onClose}
            className="bg-[#1C1B1B] hover:bg-[#2A2A29] text-[#E5E2E1] border border-[#353534] px-5 py-2 text-xs uppercase tracking-widest font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
