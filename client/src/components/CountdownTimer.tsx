import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const savedEndTime = localStorage.getItem('offerEndTime');
    
    if (savedEndTime) {
      const remaining = Math.max(0, Math.floor((parseInt(savedEndTime) - Date.now()) / 1000));
      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        const newEndTime = Date.now() + 15 * 60 * 1000;
        localStorage.setItem('offerEndTime', newEndTime.toString());
        setTimeLeft(15 * 60);
      }
    } else {
      const endTime = Date.now() + 15 * 60 * 1000;
      localStorage.setItem('offerEndTime', endTime.toString());
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex justify-center items-center mb-2 mt-4">
      <div 
        className="flex items-center gap-2.5 text-gray-900 px-6 py-2.5 rounded-full shadow-md border border-black/5 transform hover:scale-105 transition-transform"
        style={{ backgroundColor: '#f7e16a' }}
      >
        <Clock className="w-5 h-5 animate-pulse text-gray-900" />
        <span className="font-bold text-sm sm:text-base uppercase tracking-tight">Oferta expira em:</span>
        <div className="flex items-center font-black tabular-nums tracking-tighter text-lg sm:text-xl ml-1">
          <span>{String(minutes).padStart(2, '0')}</span>
          <span className="animate-pulse mx-0.5 relative -top-[1px]">:</span>
          <span>{String(seconds).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}
