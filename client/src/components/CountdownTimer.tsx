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
    <div className="w-full max-w-sm mx-auto bg-brand-red rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-2 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest bg-black/10 px-4 py-1.5 rounded-full">
          <Clock className="w-4 h-4 animate-pulse text-brand-yellow" />
          <span>Oferta expira em:</span>
        </div>
        
        <div className="flex gap-4 items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-white text-brand-red font-black text-5xl w-20 h-20 flex items-center justify-center rounded-2xl shadow-inner border-b-4 border-gray-200">
              {String(minutes).padStart(2, '0')}
            </div>
            <span className="text-white/90 text-xs font-black mt-2 tracking-wider">MINUTOS</span>
          </div>
          
          <div className="text-white/80 font-black text-4xl pb-6 animate-pulse">
            :
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white text-brand-red font-black text-5xl w-20 h-20 flex items-center justify-center rounded-2xl shadow-inner border-b-4 border-gray-200">
              {String(seconds).padStart(2, '0')}
            </div>
            <span className="text-white/90 text-xs font-black mt-2 tracking-wider">SEGUNDOS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
