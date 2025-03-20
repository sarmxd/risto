import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Watch, Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blur increases as you scroll, but no background color
  const blurAmount = Math.min(scrollY / 20, 10); // Max blur at 200px scroll

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(255, 255, 255, 0)`, // Fully transparent
        backdropFilter: `blur(${blurAmount}px)`, // Dynamic blur effect
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-2">
            
            <span className="text-xl text-white font-family: 'Poppins' hover:text-white">risto</span>
          </Link>

          {/* Center: Navbar Links */}
          <div className="hidden md:flex justify-center items-center w-full space-x-8">
            <Link to="/new-collection" className="text-white hover:text-gray-400">
              New Collection
            </Link>
            <Link to="/exclusive-collection" className="text-white hover:text-gray-400">
              Exclusive
            </Link>
            <Link to="/mens" className="text-white hover:text-gray-400">
              Men's
            </Link>
            <Link to="/womens" className="text-white hover:text-gray-400">
              Women's
            </Link>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </div>

          {/* Right: Cart Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-white hover:text-gray-400 transition" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/new-collection"
                className="block px-3 py-2 text-white hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                New Collection
              </Link>
              <Link
                to="/exclusive-collection"
                className="block px-3 py-2 text-white hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Exclusive
              </Link>
              <Link
                to="/mens"
                className="block px-3 py-2 text-white hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Men's
              </Link>
              <Link
                to="/womens"
                className="block px-3 py-2 text-white hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Women's
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
