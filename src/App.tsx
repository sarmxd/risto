import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewCollection from './pages/NewCollection';
import ExclusiveCollection from './pages/ExclusiveCollection';
import MensWatches from './pages/MensWatches';
import WomensWatches from './pages/WomensWatches';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import Cart from './pages/Cart';
import ViewAllWatchesPage from './pages/ViewAllWatchesPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-black">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-collection" element={<NewCollection />} />
                <Route path="/exclusive-collection" element={<ExclusiveCollection />} />
                <Route path="/mens" element={<MensWatches />} />
                <Route path="/womens" element={<WomensWatches />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/ViewAllWatchesPage" element={<ViewAllWatchesPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;