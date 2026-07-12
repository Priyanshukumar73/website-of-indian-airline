import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dataset from './components/Dataset';
import DataCleaning from './components/DataCleaning';
import EDA from './components/EDA';
import MLModel from './components/MLModel';
import Results from './components/Results';
import { Insights, Conclusion } from './components/Insights';
import About from './components/About';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onDone={() => setLoading(false)} />
        ) : (
          <div key="app">
            <ScrollProgress />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>
              <Hero />
              <Dataset />
              <DataCleaning />
              <EDA />
              <MLModel />
              <Results />
              <Insights />
              <Conclusion />
              <About />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
