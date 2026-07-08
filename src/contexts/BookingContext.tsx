import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface BookingContextType {
  isBookingModalOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <BookingContext.Provider value={{ isBookingModalOpen, openBookingModal, closeBookingModal }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    console.error('useBooking must be used within a BookingProvider');
    // Retornar funciones dummy para evitar crashes
    return {
      isBookingModalOpen: false,
      openBookingModal: () => console.warn('BookingProvider not found'),
      closeBookingModal: () => console.warn('BookingProvider not found')
    };
  }
  return context;
}
