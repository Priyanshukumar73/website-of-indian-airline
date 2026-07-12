import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { MdFlight } from 'react-icons/md';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full blue-gradient flex items-center justify-center">
              <MdFlight className="text-white text-lg" />
            </div>
            <div>
              <div className="font-bold text-white">
                Airline<span className="text-[#F9C74F]">ML</span>
              </div>
              <div className="text-white/40 text-xs">Indian Airlines Price Analysis</div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FiGithub size={18} />, href: '#', label: 'GitHub' },
              { icon: <FiLinkedin size={18} />, href: '#', label: 'LinkedIn' },
              { icon: <FiMail size={18} />, href: 'mailto:#', label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-[#4DB6FF]/50 transition-all"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/50 hover:text-white hover:border-[#F9C74F]/40 text-sm transition-all"
          >
            <FiArrowUp size={14} /> Back to Top
          </motion.button>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center text-white/25 text-xs">
          Built with React · Vite · Tailwind CSS · Framer Motion · Recharts ·{' '}
          Data from Indian Airlines CSV (Kaggle) · © 2025
        </div>
      </div>
    </footer>
  );
}
