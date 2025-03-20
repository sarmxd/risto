import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-400">
            We're here to assist you with any questions about our luxury timepieces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black p-8 rounded-lg shadow-lg border border-black-600"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-black-600 bg-black text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-black-600 bg-black text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-black-600 bg-black text-white"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[{
              icon: <MapPin className="h-6 w-6 text-white" />, title: "Visit Our Boutique", details: ["123 Luxury Lane, Fashion District", "New York, NY 10001"]
            }, {
              icon: <Clock className="h-6 w-6 text-white" />, title: "Opening Hours", details: ["Monday - Saturday: 10:00 AM - 8:00 PM", "Sunday: 12:00 PM - 6:00 PM"]
            }, {
              icon: <Phone className="h-6 w-6 text-white" />, title: "Phone", details: ["+1 (555) 123-4567"]
            }, {
              icon: <Mail className="h-6 w-6 text-white" />, title: "Email", details: ["contact@luxwatch.com"]
            }].map((item, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg border border-black">
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-400">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
