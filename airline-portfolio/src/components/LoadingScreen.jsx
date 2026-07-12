import { motion, AnimatePresence } from 'framer-motion';
import { MdFlight } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTimeout(onDone, 300); return 100; }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #061826 0%, #0A2540 100%)' }}
    >
      {/* Animated airplane */}
      <motion.div
        animate={{ x: [-60, 60], y: [10, -10] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.8, ease: 'easeInOut' }}
        className="text-6xl mb-8"
      >
        <MdFlight className="text-[#4DB6FF]" style={{ filter: 'drop-shadow(0 0 20px #4DB6FF80)' }} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white font-black text-2xl mb-1"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Airline<span className="text-[#F9C74F]">ML</span>
      </motion.h1>
      <p className="text-white/40 text-sm mb-8">Loading project data…</p>

      {/* Progress */}
      <div className="w-64 bg-white/10 rounded-full h-1.5 overflow-hidden">
        <motion.div
          className="h-1.5 rounded-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #0A4D9E, #4DB6FF)',
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <p className="text-white/30 text-xs mt-3">{progress}%</p>
    </motion.div>
  );
}
