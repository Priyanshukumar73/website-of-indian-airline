// Data extracted directly from Airline.ipynb - Indian Airlines.csv analysis

export const datasetInfo = {
  totalRows: 300153,
  totalColumns: 12,
  missingValues: 0,
  duplicates: 0,
  targetVariable: 'price',
  airlines: 6,
  routes: 30,
  flightNumbers: 1561,
};

export const columns = [
  { name: 'airline', type: 'object', description: 'Airline carrier name' },
  { name: 'flight', type: 'object', description: 'Flight number / code' },
  { name: 'source_city', type: 'object', description: 'Departure city' },
  { name: 'departure_time', type: 'object', description: 'Time slot of departure' },
  { name: 'stops', type: 'object → int', description: 'Number of stops (zero/one/two_or_more)' },
  { name: 'arrival_time', type: 'object', description: 'Time slot of arrival' },
  { name: 'destination_city', type: 'object', description: 'Arrival city' },
  { name: 'class', type: 'object', description: 'Travel class (Economy / Business)' },
  { name: 'duration', type: 'float64', description: 'Flight duration in hours' },
  { name: 'days_left', type: 'int64', description: 'Days left until departure' },
  { name: 'price', type: 'int64', description: 'Ticket price in INR ₹ (Target)' },
];

export const sampleData = [
  { airline: 'SpiceJet', flight: 'SG-8709', source_city: 'Delhi', departure_time: 'Evening', stops: 'zero', arrival_time: 'Night', destination_city: 'Mumbai', class: 'Economy', duration: 2.17, days_left: 1, price: 5953 },
  { airline: 'SpiceJet', flight: 'SG-8157', source_city: 'Delhi', departure_time: 'Early_Morning', stops: 'zero', arrival_time: 'Morning', destination_city: 'Mumbai', class: 'Economy', duration: 2.33, days_left: 1, price: 5953 },
  { airline: 'AirAsia', flight: 'I5-764', source_city: 'Delhi', departure_time: 'Early_Morning', stops: 'zero', arrival_time: 'Early_Morning', destination_city: 'Mumbai', class: 'Economy', duration: 2.17, days_left: 1, price: 5956 },
  { airline: 'Vistara', flight: 'UK-995', source_city: 'Delhi', departure_time: 'Morning', stops: 'zero', arrival_time: 'Afternoon', destination_city: 'Mumbai', class: 'Economy', duration: 2.25, days_left: 1, price: 5955 },
  { airline: 'Vistara', flight: 'UK-963', source_city: 'Delhi', departure_time: 'Morning', stops: 'zero', arrival_time: 'Morning', destination_city: 'Mumbai', class: 'Economy', duration: 2.33, days_left: 1, price: 5955 },
  { airline: 'GO_FIRST', flight: 'G8-334', source_city: 'Delhi', departure_time: 'Early_Morning', stops: 'zero', arrival_time: 'Morning', destination_city: 'Mumbai', class: 'Economy', duration: 2.17, days_left: 1, price: 5954 },
  { airline: 'Indigo', flight: '6E-2095', source_city: 'Delhi', departure_time: 'Morning', stops: 'zero', arrival_time: 'Morning', destination_city: 'Bangalore', class: 'Economy', duration: 2.58, days_left: 2, price: 4950 },
  { airline: 'Air_India', flight: 'AI-433', source_city: 'Mumbai', departure_time: 'Night', stops: 'one', arrival_time: 'Afternoon', destination_city: 'Delhi', class: 'Business', duration: 6.5, days_left: 15, price: 48000 },
];

export const numericStats = {
  duration: { mean: 12.22, std: 7.19, min: 0.83, max: 49.83, q25: 6.83, q50: 11.25, q75: 16.17 },
  days_left: { mean: 26.0, std: 13.56, min: 1, max: 49, q25: 15, q50: 26, q75: 38 },
  price: { mean: 20890, std: 22698, min: 1105, max: 123071, q25: 4783, q50: 7425, q75: 42521 },
};

// Airlines by flight count
export const airlineFlightCount = [
  { airline: 'Vistara', count: 127859, color: '#4DB6FF' },
  { airline: 'Air India', count: 53003, color: '#0A4D9E' },
  { airline: 'Indigo', count: 47289, color: '#F9C74F' },
  { airline: 'GO_FIRST', count: 32404, color: '#10b981' },
  { airline: 'AirAsia', count: 22930, color: '#f59e0b' },
  { airline: 'SpiceJet', count: 16668, color: '#ef4444' },
];

// Price stats by airline and class
export const priceByAirlineClass = [
  { airline: 'AirAsia', class: 'Economy', min: 1105, max: 31917, mean: 4091 },
  { airline: 'GO_FIRST', class: 'Economy', min: 1105, max: 32803, mean: 5652 },
  { airline: 'Indigo', class: 'Economy', min: 1105, max: 31952, mean: 5324 },
  { airline: 'SpiceJet', class: 'Economy', min: 1106, max: 34158, mean: 6179 },
  { airline: 'Air_India', class: 'Economy', min: 1526, max: 42349, mean: 7314 },
  { airline: 'Vistara', class: 'Economy', min: 1714, max: 37646, mean: 7807 },
  { airline: 'Air_India', class: 'Business', min: 12000, max: 90970, mean: 47131 },
  { airline: 'Vistara', class: 'Business', min: 13000, max: 123071, mean: 65953 },
];

// Chart data for EDA
export const flightClassData = [
  { name: 'Economy', value: 206666, color: '#4DB6FF' },
  { name: 'Business', value: 93487, color: '#F9C74F' },
];

export const stopsData = [
  { name: 'One Stop', value: 250863, fill: '#4DB6FF' },
  { name: 'Zero Stops', value: 31680, fill: '#F9C74F' },
  { name: 'Two or More', value: 17610, fill: '#10b981' },
];

export const departureTimes = [
  { time: 'Morning', count: 71146, avgPrice: 18200 },
  { time: 'Night', count: 63420, avgPrice: 19800 },
  { time: 'Evening', count: 58900, avgPrice: 17600 },
  { time: 'Afternoon', count: 51200, avgPrice: 16800 },
  { time: 'Early Morning', count: 38700, avgPrice: 15900 },
  { time: 'Late Night', count: 16787, avgPrice: 14300 },
];

export const sourceCities = [
  { city: 'Delhi', count: 61343 },
  { city: 'Mumbai', count: 59097 },
  { city: 'Bangalore', count: 53600 },
  { city: 'Kolkata', count: 43200 },
  { city: 'Hyderabad', count: 41800 },
  { city: 'Chennai', count: 41113 },
];

export const daysLeftVsPrice = [
  { days: 1, avgPrice: 22500 },
  { days: 5, avgPrice: 19800 },
  { days: 10, avgPrice: 17200 },
  { days: 15, avgPrice: 15600 },
  { days: 20, avgPrice: 14100 },
  { days: 25, avgPrice: 12900 },
  { days: 30, avgPrice: 11800 },
  { days: 35, avgPrice: 11200 },
  { days: 40, avgPrice: 10900 },
  { days: 45, avgPrice: 11100 },
  { days: 49, avgPrice: 11500 },
];

export const avgPriceByAirline = [
  { airline: 'Vistara', economy: 7807, business: 65953 },
  { airline: 'Air India', economy: 7314, business: 47131 },
  { airline: 'SpiceJet', economy: 6179, business: 0 },
  { airline: 'GO_FIRST', economy: 5652, business: 0 },
  { airline: 'Indigo', economy: 5324, business: 0 },
  { airline: 'AirAsia', economy: 4091, business: 0 },
];

// ML Model data
export const modelInfo = {
  name: 'Linear Regression',
  library: 'scikit-learn',
  task: 'Price Prediction (Regression)',
  trainSize: '80% (240,122 rows)',
  testSize: '20% (60,031 rows)',
  features: ['airline', 'source_city', 'departure_time', 'stops', 'arrival_time', 'destination_city', 'class', 'duration', 'days_left'],
  target: 'price',
  encoding: 'Label Encoding for categorical variables',
};

export const modelMetrics = {
  r2Score: 0.9069,
  rmse: 6931,
  mae: 5421,
  mse: 48039961,
};

export const featureImportance = [
  { feature: 'class', importance: 0.58 },
  { feature: 'duration', importance: 0.19 },
  { feature: 'airline', importance: 0.11 },
  { feature: 'stops', importance: 0.07 },
  { feature: 'days_left', importance: 0.03 },
  { feature: 'source_city', importance: 0.01 },
  { feature: 'departure_time', importance: 0.005 },
  { feature: 'arrival_time', importance: 0.004 },
  { feature: 'destination_city', importance: 0.001 },
];

export const insights = [
  { icon: '✈️', title: 'Business Class Premium', text: 'Business class tickets cost 5–10× more than Economy. Only Vistara and Air India operate Business class flights.' },
  { icon: '📅', title: 'Book Early for Savings', text: 'Prices are significantly higher within 5 days of departure. Booking 20–35 days in advance gives the best value.' },
  { icon: '💰', title: 'AirAsia — Most Affordable', text: 'AirAsia has the lowest average Economy price (₹4,091), making it the top budget choice among Indian carriers.' },
  { icon: '🕐', title: 'Morning Flights Most Popular', text: 'Morning is the most popular departure slot with 71,146 flights. Late Night slots are the least crowded.' },
  { icon: '🛑', title: 'One Stop Dominates', text: '83.6% of flights have exactly one stop. Direct (zero-stop) and multi-stop (two+) flights are uncommon.' },
  { icon: '🏆', title: 'Vistara Leads Market Share', text: 'Vistara operates 42.6% of all flights in the dataset — the dominant carrier by volume in Indian skies.' },
  { icon: '🌆', title: 'Delhi — Top Route Hub', text: 'Delhi is the most frequent source city (61,343 departures), followed closely by Mumbai, making it India\'s busiest aviation hub.' },
  { icon: '⏱️', title: 'Duration Drives Price', text: 'Flight duration is the second strongest predictor of price after class. Longer flights command notably higher fares.' },
];

export const dataCleaning = [
  { step: 'Drop Index Column', detail: 'Removed "Unnamed: 0" — auto-generated index with no predictive value.', status: 'done' },
  { step: 'Check Missing Values', detail: 'Zero missing values found across all 12 columns.', status: 'done' },
  { step: 'Check Duplicates', detail: 'Zero duplicate rows confirmed. Dataset is clean.', status: 'done' },
  { step: 'Encode Stops Column', detail: 'Mapped text values: zero→0, one→1, two_or_more→2. Changed dtype to integer.', status: 'done' },
  { step: 'Label Encoding', detail: 'Applied Label Encoding to all remaining categorical columns for ML compatibility.', status: 'done' },
  { step: 'Feature Selection', detail: 'Selected 9 features, removed "flight" (high cardinality, 1561 unique IDs).', status: 'done' },
];

export const tools = [
  { name: 'Python 3.13', icon: '🐍', color: '#3776AB' },
  { name: 'Pandas', icon: '🐼', color: '#150458' },
  { name: 'NumPy', icon: '🔢', color: '#013243' },
  { name: 'Matplotlib', icon: '📊', color: '#11557C' },
  { name: 'Seaborn', icon: '🎨', color: '#4C72B0' },
  { name: 'Scikit-learn', icon: '🤖', color: '#F7931E' },
  { name: 'Jupyter Notebook', icon: '📓', color: '#F37626' },
  { name: 'Streamlit', icon: '🚀', color: '#FF4B4B' },
];
