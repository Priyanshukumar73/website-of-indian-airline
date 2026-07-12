import { motion } from 'framer-motion';
import { tools } from '../data/airlineData';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#4DB6FF] text-sm font-semibold tracking-widest uppercase">
            08 / About
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            About This Project
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#F9C74F]">🎯</span> Project Objective
            </h3>
            <div className="text-white/60 text-sm leading-relaxed space-y-3">
              <p>
                Build a machine learning model that predicts Indian domestic flight ticket prices
                based on airline, route, class, timing, and other key features.
              </p>
              <p>
                The project covers the full data science pipeline: data exploration,
                cleaning, feature engineering, model training, and evaluation —
                derived from a real-world Kaggle dataset of 300,153 flight records.
              </p>
              <p>
                Secondary goal: generate actionable business insights for both travelers
                (cost optimization) and airlines (pricing strategy).
              </p>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4DB6FF]">🛠️</span> Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#4DB6FF]/20 transition-all"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="text-white/75 text-sm font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dataset Credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-[#F9C74F]">📦</span> Dataset
          </h3>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <div className="text-white font-semibold">Indian Airlines CSV</div>
              <div className="text-white/50 text-sm mt-0.5">
                300,153 rows · 12 columns · 6 airlines · 6 cities · Economy & Business class
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { label: 'Kaggle', href: '#', icon: '📊' },
                { label: 'Notebook', href: '#', icon: '📓' },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-[#4DB6FF]/50 transition-all text-sm"
                >
                  <span>{icon}</span> {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 text-center"
        >
          <h3 className="text-lg font-bold text-white mb-2">Connect & Collaborate</h3>
          <p className="text-white/50 text-sm mb-5">Open to data science opportunities and collaborations.</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: <FiGithub size={20} />, label: 'GitHub', href: '#', color: '#4DB6FF' },
              { icon: <FiLinkedin size={20} />, label: 'LinkedIn', href: '#', color: '#0077B5' },
              { icon: <FiMail size={20} />, label: 'Email', href: 'mailto:#', color: '#F9C74F' },
            ].map(({ icon, label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl glass-card hover:border-white/20 transition-all"
                style={{ color }}
              >
                {icon}
                <span className="text-xs text-white/60">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
