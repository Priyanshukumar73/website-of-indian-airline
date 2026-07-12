import { motion } from 'framer-motion';
import { modelInfo } from '../data/airlineData';

const steps = [
  { icon: '📋', label: 'Raw Dataset', sub: '300,153 rows × 12 cols', color: '#4DB6FF' },
  { icon: '🔧', label: 'Preprocessing', sub: 'Label encode, drop unused cols', color: '#0A4D9E' },
  { icon: '✂️', label: 'Train / Test Split', sub: '80% train / 20% test', color: '#4DB6FF' },
  { icon: '🤖', label: 'Linear Regression', sub: 'sklearn.LinearRegression', color: '#F9C74F' },
  { icon: '🎯', label: 'Prediction', sub: 'Predict flight prices', color: '#F9C74F' },
  { icon: '📊', label: 'Evaluation', sub: 'R², RMSE, MAE', color: '#10b981' },
];

export default function MLModel() {
  return (
    <section id="model" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#4DB6FF] text-sm font-semibold tracking-widest uppercase">
            04 / Machine Learning
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Model Building
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A Linear Regression model trained to predict flight ticket prices based on 9 features.
          </p>
        </motion.div>

        {/* ML Pipeline Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-10"
        >
          <h3 className="text-lg font-bold text-white mb-8 text-center">ML Pipeline</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0 flex-wrap">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col sm:flex-row items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex flex-col items-center p-4 rounded-xl w-36"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}30` }}
                >
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <div className="text-white font-semibold text-sm text-center">{step.label}</div>
                  <div className="text-white/40 text-xs text-center mt-1">{step.sub}</div>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.1 }}
                    className="text-[#4DB6FF] text-2xl sm:rotate-0 rotate-90 sm:mx-2 my-2 sm:my-0"
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Model details */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Model Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#F9C74F]">🤖</span> Model Configuration
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Algorithm', value: modelInfo.name },
                { label: 'Library', value: modelInfo.library },
                { label: 'Task Type', value: modelInfo.task },
                { label: 'Training Set', value: modelInfo.trainSize },
                { label: 'Test Set', value: modelInfo.testSize },
                { label: 'Encoding', value: modelInfo.encoding },
                { label: 'Target Variable', value: 'price (₹ INR)' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start gap-4 py-2 border-b border-white/5">
                  <span className="text-white/50 text-sm">{label}</span>
                  <span className="text-white text-sm font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#4DB6FF]">📐</span> Input Features (X)
            </h3>
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {modelInfo.features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0A4D9E]/20 border border-[#4DB6FF]/15"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4DB6FF] flex-shrink-0" />
                  <span className="text-white/75 text-sm font-mono">{f}</span>
                </motion.div>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-[#F9C74F]/10 border border-[#F9C74F]/25">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F9C74F]" />
                <span className="text-[#F9C74F] text-xs font-semibold uppercase tracking-wide">Target Variable (y)</span>
              </div>
              <span className="text-white font-bold text-lg font-mono">price</span>
              <span className="text-white/50 text-sm ml-2">— Ticket price in ₹ INR</span>
            </div>
          </motion.div>
        </div>

        {/* Code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 glass-card p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#4DB6FF]">💻</span> Training Code Snippet
          </h3>
          <pre className="text-sm leading-relaxed overflow-x-auto scrollbar-hide">
            <code>
              <span className="text-[#4DB6FF]">from</span>
              <span className="text-white"> sklearn.linear_model </span>
              <span className="text-[#4DB6FF]">import</span>
              <span className="text-white"> LinearRegression{'\n'}</span>
              <span className="text-[#4DB6FF]">from</span>
              <span className="text-white"> sklearn.model_selection </span>
              <span className="text-[#4DB6FF]">import</span>
              <span className="text-white"> train_test_split{'\n'}</span>
              <span className="text-[#4DB6FF]">from</span>
              <span className="text-white"> sklearn.preprocessing </span>
              <span className="text-[#4DB6FF]">import</span>
              <span className="text-white"> LabelEncoder{'\n\n'}</span>
              <span className="text-white/40"># Label encode categorical columns{'\n'}</span>
              <span className="text-white">le = LabelEncoder(){'\n'}</span>
              <span className="text-[#F9C74F]">for</span>
              <span className="text-white"> col </span>
              <span className="text-[#F9C74F]">in</span>
              <span className="text-white"> cat_cols:{'\n'}</span>
              <span className="text-white">    df[col] = le.fit_transform(df[col]){'\n\n'}</span>
              <span className="text-white/40"># Split features and target{'\n'}</span>
              <span className="text-white">X = df.drop(</span>
              <span className="text-[#10b981]">'price'</span>
              <span className="text-white">, axis=</span>
              <span className="text-[#4DB6FF]">1</span>
              <span className="text-white">){'\n'}</span>
              <span className="text-white">y = df[</span>
              <span className="text-[#10b981]">'price'</span>
              <span className="text-white">]{'\n\n'}</span>
              <span className="text-white/40"># Train/Test split 80:20{'\n'}</span>
              <span className="text-white">X_train, X_test, y_train, y_test = train_test_split({'\n'}</span>
              <span className="text-white">    X, y, test_size=</span>
              <span className="text-[#4DB6FF]">0.2</span>
              <span className="text-white">, random_state=</span>
              <span className="text-[#4DB6FF]">42</span>
              <span className="text-white">){'\n\n'}</span>
              <span className="text-white/40"># Fit Linear Regression{'\n'}</span>
              <span className="text-white">model = LinearRegression(){'\n'}</span>
              <span className="text-white">model.fit(X_train, y_train)</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
