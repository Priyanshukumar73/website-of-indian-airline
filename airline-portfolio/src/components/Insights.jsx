import { motion } from 'framer-motion';
import { insights } from '../data/airlineData';

export function Insights() {
  return (
    <section id="insights" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#4DB6FF] text-sm font-semibold tracking-widest uppercase">
            06 / Key Insights
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            What We Discovered
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Eight business-ready findings extracted from 300K+ flight records.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-5 cursor-default group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {insight.icon}
              </div>
              <h3 className="text-white font-bold mb-2 text-sm leading-tight">{insight.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{insight.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Conclusion() {
  return (
    <section id="conclusion" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#4DB6FF] text-sm font-semibold tracking-widest uppercase">
            07 / Conclusion
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Project Summary
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#F9C74F]">📋</span> Final Takeaway
            </h3>
            <div className="text-white/60 text-sm leading-relaxed space-y-3">
              <p>
                This project successfully built a{' '}
                <span className="text-white font-semibold">Linear Regression model</span> to
                predict Indian domestic flight prices with a strong{' '}
                <span className="text-[#10b981] font-bold">R² of 90.7%</span>.
              </p>
              <p>
                The analysis of 300,153 flights across 6 airlines and 6 cities reveals that the Indian
                aviation market is sharply divided between <span className="text-white">low-cost carriers</span> (AirAsia, Indigo, GO_FIRST, SpiceJet)
                and <span className="text-white">full-service premium airlines</span> (Vistara and Air India).
              </p>
              <p>
                The most dominant pricing signals are{' '}
                <span className="text-[#F9C74F] font-semibold">flight class</span> (Economy vs Business — accounts for 58% of prediction) and{' '}
                <span className="text-[#F9C74F] font-semibold">flight duration</span> (19%). Together they explain 77% of all price variation.
              </p>
              <p>
                For passengers, the data recommends{' '}
                <span className="text-white">AirAsia for budget Economy travel</span> and
                booking <span className="text-white">20–35 days in advance</span> to secure the lowest fares.
              </p>
            </div>
          </motion.div>

          {/* Business Recs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4DB6FF]">💡</span> Recommendations
            </h3>
            <ul className="space-y-3">
              {[
                'Book 20–35 days before departure for best fares',
                'AirAsia is the top budget Economy choice',
                'Morning slots are most popular — book early',
                'One-stop flights dominate; non-stop is rare',
                'Business class adds 5–10× cost over Economy',
                'Duration is second strongest pricing driver',
              ].map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="text-[#10b981] mt-0.5">✓</span>
                  {rec}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Future Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 glass-card p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#F9C74F]">🚀</span> Future Improvements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: '🌲', title: 'Random Forest', desc: 'Ensemble method for improved accuracy and non-linear relationships' },
              { icon: '⚡', title: 'XGBoost / LightGBM', desc: 'Gradient boosting for potentially higher R² and lower RMSE' },
              { icon: '🔧', title: 'Hyperparameter Tuning', desc: 'GridSearchCV for automated model optimization' },
              { icon: '📱', title: 'Live Deployment', desc: 'Deploy as a Streamlit app for real-time price prediction' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#4DB6FF]/20 transition-all">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{title}</div>
                <div className="text-white/40 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
