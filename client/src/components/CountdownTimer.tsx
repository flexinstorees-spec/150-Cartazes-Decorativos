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
    <div className="w-full max-w-xs mx-auto bg-orange-500 rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-2 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest bg-black/10 px-3 py-1 rounded-full">
          <Clock className="w-3.5 h-3.5 animate-pulse text-yellow-300" />
          <span>Oferta expira em:</span>
        </div>
        
        <div className="flex gap-3 items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-white text-orange-500 font-black text-3xl w-14 h-14 flex items-center justify-center rounded-xl shadow-inner border-b-[3px] border-gray-200">
              {String(minutes).padStart(2, '0')}
            </div>
            <span className="text-white/90 text-[10px] font-black mt-1.5 tracking-wider">MINUTOS</span>
          </div>
          
          <div className="text-white/90 font-black text-2xl pb-4 animate-pulse">
            :
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white text-orange-500 font-black text-3xl w-14 h-14 flex items-center justify-center rounded-xl shadow-inner border-b-[3px] border-gray-200">
              {String(seconds).padStart(2, '0')}
            </div>
            <span className="text-white/90 text-[10px] font-black mt-1.5 tracking-wider">SEGUNDOS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
