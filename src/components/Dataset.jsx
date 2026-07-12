import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { datasetInfo, columns, sampleData } from '../data/airlineData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const StatCard = ({ label, value, icon, color, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      custom={i}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="glass-card p-5 stat-card text-center"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className={`text-3xl font-bold mb-1`} style={{ color }}>
        {value}
      </div>
      <div className="text-white/50 text-sm">{label}</div>
    </motion.div>
  );
};

export default function Dataset() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="dataset" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#4DB6FF] text-sm font-semibold tracking-widest uppercase">
            01 / Dataset
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Indian Airlines Dataset
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Sourced from Kaggle — contains domestic flight data from 6 major Indian airlines
            across 6 metropolitan cities.
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard label="Total Records" value="300,153" icon="📋" color="#4DB6FF" i={0} />
          <StatCard label="Features" value="12" icon="📐" color="#F9C74F" i={1} />
          <StatCard label="Missing Values" value="0" icon="✅" color="#10b981" i={2} />
          <StatCard label="Duplicates" value="0" icon="🔍" color="#10b981" i={3} />
          <StatCard label="Airlines" value="6" icon="✈️" color="#4DB6FF" i={4} />
          <StatCard label="Cities" value="6" icon="🌆" color="#F9C74F" i={5} />
          <StatCard label="Flight Routes" value="1,561" icon="🗺️" color="#4DB6FF" i={6} />
          <StatCard label="Target: Price" value="₹ INR" icon="💰" color="#F9C74F" i={7} />
        </div>

        {/* Column Descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 mb-10"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#F9C74F]">📊</span> Feature Descriptions
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {columns.map((col) => (
              <div key={col.name} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#4DB6FF]/20 transition-all">
                <span className="text-[#4DB6FF] font-mono text-xs mt-0.5 bg-[#4DB6FF]/10 px-2 py-1 rounded whitespace-nowrap">
                  {col.type}
                </span>
                <div>
                  <div className="text-white font-medium text-sm">{col.name}</div>
                  <div className="text-white/40 text-xs mt-0.5">{col.description}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sample Data Table */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#F9C74F]">🔍</span> Dataset Preview
            <span className="text-sm text-white/40 font-normal">(first 8 rows)</span>
          </h3>
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-sm min-w-[900px]">
              <thead>
                <tr className="border-b border-white/10">
                  {['airline', 'flight', 'source_city', 'departure_time', 'stops', 'arrival_time', 'destination_city', 'class', 'duration', 'days_left', 'price'].map(col => (
                    <th key={col} className="text-left py-3 px-3 text-[#4DB6FF] text-xs font-semibold uppercase tracking-wide whitespace-nowrap">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 table-row">
                    <td className="py-2.5 px-3 text-white/80 font-medium">{row.airline}</td>
                    <td className="py-2.5 px-3 text-white/60 font-mono text-xs">{row.flight}</td>
                    <td className="py-2.5 px-3 text-white/60">{row.source_city}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded bg-[#0A4D9E]/40 text-[#4DB6FF] text-xs">{row.departure_time}</span>
                    </td>
                    <td className="py-2.5 px-3 text-white/60">{row.stops}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded bg-[#0A4D9E]/40 text-[#4DB6FF] text-xs">{row.arrival_time}</span>
                    </td>
                    <td className="py-2.5 px-3 text-white/60">{row.destination_city}</td>
                    <td className="py-2.5 px-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${row.class === 'Business' ? 'bg-[#F9C74F]/20 text-[#F9C74F]' : 'bg-white/10 text-white/60'}`}>
                        {row.class}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-white/60">{row.duration}h</td>
                    <td className="py-2.5 px-3 text-white/60">{row.days_left}</td>
                    <td className="py-2.5 px-3 text-[#F9C74F] font-bold">₹{row.price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
