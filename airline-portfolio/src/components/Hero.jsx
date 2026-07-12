import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiChevronDown } from 'react-icons/fi';
import { MdFlight } from 'react-icons/md';

const Cloud = ({ top, left, size, delay, duration }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ top, left, opacity: 0.12 }}
    animate={{ x: ['0%', '120vw'] }}
    transition={{ repeat: Infinity, duration, delay, ease: 'linear' }}
  >
    <svg width={size} height={size * 0.55} viewBox="0 0 200 110" fill="white">
      <ellipse cx="100" cy="75" rx="90" ry="35" />
      <ellipse cx="70" cy="60" rx="55" ry="45" />
      <ellipse cx="130" cy="65" rx="50" ry="38" />
    </svg>
  </motion.div>
);

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061826] via-[#0A2540] to-[#0a3d6e]" />

      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 2 }}
        />
      ))}

      {/* Clouds */}
      <Cloud top="15%" left="-30%" size={180} delay={0} duration={28} />
      <Cloud top="30%" left="-20%" size={120} delay={8} duration={35} />
      <Cloud top="20%" left="-10%" size={220} delay={15} duration={42} />
      <Cloud top="10%" left="-5%" size={150} delay={22} duration={30} />

      {/* Runway lines at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end pb-6">
        <div className="w-full runway-line opacity-40" />
      </div>

      {/* Horizon glow */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-[#4DB6FF]/10 rounded-full blur-3xl" />

      {/* Airplane */}
      <motion.div
        className="absolute text-white/20 text-[120px] pointer-events-none z-10"
        style={{ top: '18%', right: '-20%' }}
        animate={{ x: [0, -1100], y: [0, 60], rotate: [-5, -8] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'linear', repeatDelay: 4 }}
      >
        ✈
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4DB6FF]/30 bg-[#4DB6FF]/10 text-[#4DB6FF] text-sm font-medium">
              <MdFlight className="animate-pulse" />
              Data Science Portfolio Project
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Indian Airlines
            <br />
            <span className="text-gradient">Price Analysis</span>
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            A complete machine learning project on{' '}
            <span className="text-[#F9C74F] font-medium">300,153 Indian domestic flights</span>.
            Predicting ticket prices across 6 airlines, 6 cities, and multiple travel classes.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10"
          >
            {[
              { label: 'Flight Records', value: '300K+' },
              { label: 'Airlines', value: '6' },
              { label: 'Cities', value: '6' },
              { label: 'Model R² Score', value: '90.7%' },
            ].map(({ label, value }) => (
              <div key={label} className="glass-card p-3 text-center">
                <div className="text-2xl font-bold text-[#4DB6FF]">{value}</div>
                <div className="text-xs text-white/50 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll('dataset')}
              className="px-8 py-3 rounded-full font-semibold text-[#061826] gold-gradient shadow-lg shadow-[#F9C74F]/20 transition-all"
            >
              View Analysis ↓
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white border border-white/20 hover:border-[#4DB6FF]/50 hover:bg-white/5 transition-all"
            >
              <FiGithub /> GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.button
        onClick={() => handleScroll('dataset')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/40 hover:text-white/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <FiChevronDown size={28} />
      </motion.button>
    </section>
  );
}
