import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { BookingProvider as Provider } from '../contexts/BookingContext';
import { useBooking } from '../contexts/BookingContext';
import BookingModal from './BookingModal';

function BookingModalWrapper() {
  const { isBookingModalOpen, closeBookingModal, openBookingModal } = useBooking();
  
  useEffect(() => {
    const handleOpenBooking = () => {
      openBookingModal();
    };
    
    window.addEventListener('openBookingModal', handleOpenBooking);
    
    return () => {
      window.removeEventListener('openBookingModal', handleOpenBooking);
    };
  }, [openBookingModal]);
  
  return <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  return (
    <Provider>
      {children}
      <BookingModalWrapper />
    </Provider>
  );
}
