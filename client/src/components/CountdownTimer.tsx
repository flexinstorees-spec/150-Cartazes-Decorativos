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
      <div className="flex items-center gap-2 bg-red-50/50 text-red-600/90 text-sm font-medium px-4 py-1.5 rounded-full border border-red-100/50">
        <Clock className="w-4 h-4 animate-pulse text-red-500" />
        <span>Oferta expira em:</span>
        <div className="flex items-center font-bold tabular-nums tracking-tight">
          <span>{String(minutes).padStart(2, '0')}</span>
          <span className="animate-pulse mx-0.5">:</span>
          <span>{String(seconds).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}
