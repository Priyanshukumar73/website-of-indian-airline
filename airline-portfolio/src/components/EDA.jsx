import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend,
} from 'recharts';
import {
  airlineFlightCount,
  flightClassData,
  stopsData,
  departureTimes,
  sourceCities,
  daysLeftVsPrice,
  avgPriceByAirline,
} from '../data/airlineData';

const CustomTooltip = ({ active, payload, label, prefix = '', suffix = '' }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="custom-tooltip text-white">
      {label && <p className="text-[#4DB6FF] font-semibold mb-1">{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || '#fff' }}>
          {p.name}: {prefix}{typeof p.value === 'number' ? p.value.toLocaleString() : p.value}{suffix}
        </p>
      ))}
    </div>
  );
};

const ChartCard = ({ title, subtitle, children, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.12, duration: 0.5 }}
    className="glass-card p-6"
  >
    <div className="mb-4">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      {subtitle && <p className="text-white/40 text-sm mt-0.5">{subtitle}</p>}
    </div>
    {children}
  </motion.div>
);

const COLORS = ['#4DB6FF', '#F9C74F', '#10b981', '#ef4444', '#a855f7', '#f59e0b'];

export default function EDA() {
  return (
    <section id="eda" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#4DB6FF] text-sm font-semibold tracking-widest uppercase">
            03 / Exploratory Data Analysis
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visual Exploration
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Interactive charts derived directly from the Jupyter Notebook analysis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Chart 1: Airlines by flight count */}
          <ChartCard
            title="Flights Operated by Airline"
            subtitle="Vistara dominates with 42.6% of all flights"
            i={0}
          >
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={airlineFlightCount} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="airline" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" name="Flights" radius={[6, 6, 0, 0]}>
                  {airlineFlightCount.map((e, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-white/40 text-xs mt-2">
              ✦ SpiceJet operates the fewest flights. Vistara & Air India lead the market.
            </p>
          </ChartCard>

          {/* Chart 2: Flight Class Distribution */}
          <ChartCard
            title="Travel Class Distribution"
            subtitle="Economy vs Business class split"
            i={1}
          >
            <div className="flex items-center gap-4">
              <ResponsiveContainer width="50%" height={220}>
                <PieChart>
                  <Pie
                    data={flightClassData}
                    cx="50%" cy="50%"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {flightClassData.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-4">
                {flightClassData.map((d) => (
                  <div key={d.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70">{d.name}</span>
                      <span className="font-bold" style={{ color: d.color }}>
                        {((d.value / 300153) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${(d.value / 300153) * 100}%`, backgroundColor: d.color }}
                      />
                    </div>
                    <div className="text-white/40 text-xs mt-0.5">{d.value.toLocaleString()} flights</div>
                  </div>
                ))}
                <p className="text-white/40 text-xs mt-3">
                  ✦ 68.9% of flights are Economy class. Business class is premium & rarer.
                </p>
              </div>
            </div>
          </ChartCard>

          {/* Chart 3: Stops distribution */}
          <ChartCard
            title="Number of Stops"
            subtitle="Most flights have exactly one stop (83.6%)"
            i={2}
          >
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={stopsData} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
                <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
                <YAxis type="category" dataKey="name" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} axisLine={false} tickLine={false} width={90} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name="Flights" radius={[0, 6, 6, 0]}>
                  {stopsData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Chart 4: Source cities */}
          <ChartCard
            title="Departures by Source City"
            subtitle="Delhi is India's top aviation hub"
            i={3}
          >
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={sourceCities} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="city" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" name="Departures" fill="#4DB6FF" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Chart 5: Price vs Days Left (full width) */}
        <ChartCard
          title="Days Until Departure vs. Average Price"
          subtitle="Price surges sharply in the last 5 days before departure"
          i={4}
        >
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={daysLeftVsPrice} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="days"
                tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                label={{ value: 'Days Before Departure', position: 'insideBottom', offset: -5, fill: 'rgba(255,255,255,0.3)', fontSize: 12 }}
              />
              <YAxis
                tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={v => `₹${(v/1000).toFixed(0)}K`}
              />
              <Tooltip content={<CustomTooltip prefix="₹" />} />
              <Line type="monotone" dataKey="avgPrice" name="Avg Price" stroke="#F9C74F" strokeWidth={2.5} dot={{ fill: '#F9C74F', r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-white/40 text-xs mt-2">
            ✦ Best prices found 20–35 days before departure. Last-minute booking is most expensive.
          </p>
        </ChartCard>

        {/* Chart 6: Avg price by airline and class */}
        <div className="mt-6">
          <ChartCard
            title="Average Ticket Price: Airline Brand vs. Flight Class"
            subtitle="Business class tickets are 5–10× more expensive than Economy"
            i={5}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={avgPriceByAirline} margin={{ top: 10, right: 20, bottom: 5, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="airline" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => v === 0 ? '' : `₹${(v/1000).toFixed(0)}K`} />
                <Tooltip content={<CustomTooltip prefix="₹" />} />
                <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                <Bar dataKey="economy" name="Economy" fill="#4DB6FF" radius={[4, 4, 0, 0]} />
                <Bar dataKey="business" name="Business" fill="#F9C74F" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-3 space-y-1">
              <p className="text-white/40 text-xs">✦ Vistara & Air India are the only airlines offering Business class in this dataset.</p>
              <p className="text-white/40 text-xs">✦ AirAsia has the lowest average Economy fare (₹4,091) — best budget option.</p>
            </div>
          </ChartCard>
        </div>

        {/* Chart 7: Departure time analysis */}
        <div className="mt-6">
          <ChartCard
            title="Departure Time Slots — Flight Count"
            subtitle="Morning is the most popular departure window"
            i={6}
          >
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={departureTimes} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="time" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" name="Flights" fill="#4DB6FF" radius={[6, 6, 0, 0]}>
                  {departureTimes.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </section>
  );
}
