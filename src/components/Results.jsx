import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { modelMetrics, featureImportance } from '../data/airlineData';

function AnimatedNumber({ value, prefix = '', suffix = '', decimals = 0, duration = 1800 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{display.toFixed(decimals)}{suffix}
    </span>
  );
}

const MetricCard = ({ label, value, prefix, suffix, decimals, icon, color, note, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
    className="glass-card p-6 stat-card text-center"
  >
    <div className="text-3xl mb-3">{icon}</div>
    <div className="text-4xl font-black mb-1" style={{ color }}>
      <AnimatedNumber value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
    </div>
    <div className="text-white font-semibold text-sm mb-1">{label}</div>
    {note && <div className="text-white/40 text-xs">{note}</div>}
  </motion.div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="custom-tooltip text-white">
      <p className="text-[#4DB6FF] font-semibold mb-1">{label}</p>
      <p className="text-[#F9C74F]">Importance: {(payload[0].value * 100).toFixed(1)}%</p>
    </div>
  );
};

export default function Results() {
  return (
    <section id="results" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#4DB6FF] text-sm font-semibold tracking-widest uppercase">
            05 / Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Model Performance
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Linear Regression achieves a strong R² of 90.7%, explaining the vast majority of
            price variance in Indian domestic flights.
          </p>
        </motion.div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <MetricCard
            label="R² Score"
            value={90.69}
            suffix="%"
            decimals={1}
            icon="🎯"
            color="#10b981"
            note="Variance explained"
            i={0}
          />
          <MetricCard
            label="RMSE"
            value={6931}
            prefix="₹"
            decimals={0}
            icon="📉"
            color="#4DB6FF"
            note="Root Mean Squared Error"
            i={1}
          />
          <MetricCard
            label="MAE"
            value={5421}
            prefix="₹"
            decimals={0}
            icon="📏"
            color="#4DB6FF"
            note="Mean Absolute Error"
            i={2}
          />
          <MetricCard
            label="MSE"
            value={48.0}
            suffix="M"
            decimals={1}
            icon="📐"
            color="#a855f7"
            note="Mean Squared Error (×10⁶)"
            i={3}
          />
        </div>

        {/* R² Score visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span className="text-[#F9C74F]">🎯</span> R² Score — Goodness of Fit
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/60">Model Accuracy</span>
                <span className="text-[#10b981] font-bold">90.69%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '90.69%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-4 rounded-full relative overflow-hidden"
                  style={{ background: 'linear-gradient(90deg, #0A4D9E, #10b981)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </motion.div>
              </div>
              <div className="flex justify-between text-xs text-white/30 mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
            <div className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: 'conic-gradient(#10b981 0deg 326deg, rgba(255,255,255,0.08) 326deg 360deg)' }}>
              <div className="w-16 h-16 rounded-full bg-[#061826] flex items-center justify-center">
                <span className="text-[#10b981] font-black text-sm">90.7%</span>
              </div>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-4">
            An R² of 0.907 means the model explains 90.7% of the variation in flight prices.
            This is excellent for a real-world regression task with diverse airlines and routes.
          </p>
        </motion.div>

        {/* Feature Importance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <span className="text-[#4DB6FF]">⭐</span> Feature Importance
            <span className="text-sm text-white/40 font-normal">(contribution to price prediction)</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              {featureImportance.map((f, i) => (
                <motion.div
                  key={f.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70 font-mono">{f.feature}</span>
                    <span className="text-[#F9C74F] font-semibold">{(f.importance * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${f.importance * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 + 0.2, duration: 0.8 }}
                      className="h-2 rounded-full"
                      style={{ background: i < 2 ? '#F9C74F' : i < 4 ? '#4DB6FF' : '#10b981' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={featureImportance} layout="vertical" margin={{ left: 10, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
                <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v*100).toFixed(0)}%`} />
                <YAxis type="category" dataKey="feature" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} axisLine={false} tickLine={false} width={100} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="importance" name="Importance" radius={[0, 4, 4, 0]}>
                  {featureImportance.map((_, i) => (
                    <Cell key={i} fill={i < 2 ? '#F9C74F' : i < 4 ? '#4DB6FF' : '#10b981'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-[#F9C74F]/10 border border-[#F9C74F]/20">
            <p className="text-[#F9C74F] text-sm font-semibold mb-1">🏆 Top Predictors</p>
            <p className="text-white/60 text-sm">
              <strong className="text-white">class</strong> (58%) and{' '}
              <strong className="text-white">duration</strong> (19%) together explain 77% of price variation.
              Business vs Economy class distinction is by far the strongest pricing signal in the data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
