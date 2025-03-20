import React from 'react';
import { Link } from 'react-router-dom';
import { Watch, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-sm">

        {/* Brand & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
           
            <span className="text-lg font-semibold">risto.</span>
          </div>
          <p className="text-gray-400">Timeless elegance, crafted with precision since 1990.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/new-collection" className="hover:text-gray-400">New Collection</Link></li>
            <li><Link to="/exclusive-collection" className="hover:text-gray-400">Exclusive</Link></li>
            <li><Link to="/mens" className="hover:text-gray-400">Men's Watches</Link></li>
            <li><Link to="/womens" className="hover:text-gray-400">Women's Watches</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-md font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 hover:text-gray-400">
              <MapPin className="h-5 w-5" /><span>Gulistan-e-jauhar</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-400">
              <Phone className="h-5 w-5" /><span>(+92)3313103442</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-400">
              <Mail className="h-5 w-5" /><span>abbasisarmad11@gmail.com</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-400"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-400"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Developed by sarmad.
      </div>
    </footer>
  );
};

export default Footer;
