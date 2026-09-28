import { createContext, useContext, useState, type ReactNode } from 'react';
import { BookingModal } from './components/BookingModal';

const BookingContext = createContext<() => void>(() => {});

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <BookingContext.Provider value={() => setOpen(true)}>
      {children}
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </BookingContext.Provider>
  );
}