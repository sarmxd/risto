import React from 'react';
import { motion } from 'framer-motion';

const watches = [
  { id: 1, name: "Rolex Daytona", price: "$39,999", image: "https://images.unsplash.com/photo-1627039706585-e1c3c4c0b6ed?auto=format&fit=crop&q=80&w=800", description: "Limited Edition Chronograph" },
  { id: 2, name: "AP Royal Oak", price: "$45,999", image: "https://images.unsplash.com/photo-1693922874336-0f05d40cb471?auto=format&fit=crop&q=80&w=800", description: "Rose Gold Edition" },
  { id: 3, name: "Hublot Big Bang", price: "$28,999", image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&q=80&w=800", description: "Ceramic Edition" },
  { id: 4, name: "Cartier Santos", price: "$15,999", image: "https://images.unsplash.com/photo-1649949665254-c1e7c8a13a3f?auto=format&fit=crop&q=80&w=800", description: "2025 Collection" },
  { id: 5, name: "Omega Speedmaster", price: "$22,999", image: "https://images.unsplash.com/photo-1564221710302-1239c19d59b3?auto=format&fit=crop&q=80&w=800", description: "Moonwatch Edition" },
  { id: 6, name: "Tag Heuer Monaco", price: "$18,999", image: "https://images.unsplash.com/photo-1626687170914-0196e6b8dc87?auto=format&fit=crop&q=80&w=800", description: "Steve McQueen Special" },
  { id: 7, name: "Patek Philippe Nautilus", price: "$125,999", image: "https://images.unsplash.com/photo-1626264146558-517db4c8c6fb?auto=format&fit=crop&q=80&w=800", description: "Luxury Sports Watch" },
  { id: 8, name: "Richard Mille RM 11", price: "$250,999", image: "https://images.unsplash.com/photo-1633544288143-9f0189be36b1?auto=format&fit=crop&q=80&w=800", description: "Skeletonized Movement" },
  { id: 9, name: "Breitling Navitimer", price: "$19,999", image: "https://images.unsplash.com/photo-1603251541819-9f0e9f2d0e4d?auto=format&fit=crop&q=80&w=800", description: "Pilot's Chronograph" },
  { id: 10, name: "IWC Portugieser", price: "$21,499", image: "https://images.unsplash.com/photo-1627082966276-c05356f84c3d?auto=format&fit=crop&q=80&w=800", description: "Classic Dress Watch" },
  { id: 11, name: "Seiko Presage", price: "$1,999", image: "https://images.unsplash.com/photo-1627039727797-0cfdaa3118a9?auto=format&fit=crop&q=80&w=800", description: "Japanese Craftsmanship" },
  { id: 12, name: "Tudor Black Bay", price: "$5,999", image: "https://images.unsplash.com/photo-1627039693550-c19a644d4e27?auto=format&fit=crop&q=80&w=800", description: "Vintage-Inspired Diver" }
];

const NewCollection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Sleeker Banner Section */}
      <div 
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-2 tracking-tight"
          >
            Collection <span className="text-white">2025</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg max-w-2xl mx-auto text-gray-300"
          >
            Timeless elegance meets modern precision
          </motion.p>
        </div>
      </div>

      {/* Collection Navigation */}
      <div className="bg-black py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Our Masterpieces</h2>
            <div className="flex space-x-4">
              <button className="text-sm text-gray-400 hover:text-white transition-colors">All</button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">Chronographs</button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">Dress</button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">Sport</button>
            </div>
          </div>
        </div>
      </div>

      {/* Watch Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {watches.map((watch, index) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-black rounded-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <button className="m-3 bg-white text-black px-3 py-1 text-sm rounded font-medium hover:bg-black hover:text-white transition">
                    View
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-base font-medium mb-1">{watch.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-sm">{watch.price}</span>
                  <span className="text-xs text-gray-400">{watch.description}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      
    </motion.div>
  );
};

export default NewCollection;