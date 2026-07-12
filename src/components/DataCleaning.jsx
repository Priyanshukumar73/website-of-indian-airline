import { motion } from 'framer-motion';
import { dataCleaning } from '../data/airlineData';
import { FiCheckCircle } from 'react-icons/fi';

export default function DataCleaning() {
  return (
    <section id="cleaning" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#4DB6FF] text-sm font-semibold tracking-widest uppercase">
            02 / Data Cleaning
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Cleaning & Preparation
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A notably clean dataset — zero missing values, zero duplicates. Minimal transformation
            was needed before model training.
          </p>
        </motion.div>

        {/* Key facts row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: '✅', title: 'No Missing Values', sub: '0 nulls across all 300,153 rows', color: '#10b981' },
            { icon: '🔁', title: 'No Duplicates', sub: 'Every record is unique', color: '#10b981' },
            { icon: '🔢', title: 'Stops Encoded', sub: 'Text → integer (0, 1, 2)', color: '#4DB6FF' },
          ].map(({ icon, title, sub, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div className="text-3xl">{icon}</div>
              <div>
                <div className="font-bold text-white">{title}</div>
                <div className="text-white/50 text-sm mt-0.5">{sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4DB6FF] to-[#0A4D9E] hidden sm:block" />

          <div className="space-y-6">
            {dataCleaning.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-6"
              >
                {/* Icon circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#061826] border-2 border-[#4DB6FF] flex items-center justify-center hidden sm:flex">
                  <FiCheckCircle className="text-[#4DB6FF]" size={20} />
                </div>

                <div className="glass-card p-5 flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#F9C74F] font-mono text-xs bg-[#F9C74F]/10 px-2 py-0.5 rounded">
                          STEP {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-bold text-white">{step.step}</span>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">{step.detail}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/20 flex-shrink-0">
                      ✓ Done
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Encoding explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 glass-card p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#F9C74F]">🔤</span> Label Encoding — Categorical Columns
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { col: 'airline', example: 'SpiceJet → 4, Vistara → 5' },
              { col: 'class', example: 'Economy → 0, Business → 1' },
              { col: 'stops', example: 'zero → 0, one → 1, two_or_more → 2' },
              { col: 'source_city', example: 'Delhi → 2, Mumbai → 4' },
              { col: 'destination_city', example: 'Mumbai → 4, Bangalore → 0' },
              { col: 'departure_time', example: 'Morning → 3, Evening → 1' },
              { col: 'arrival_time', example: 'Night → 4, Afternoon → 0' },
              { col: 'duration + days_left', example: 'Numeric — no encoding needed' },
            ].map(({ col, example }) => (
              <div key={col} className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="text-[#4DB6FF] font-mono text-xs font-semibold mb-1">{col}</div>
                <div className="text-white/45 text-xs">{example}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
