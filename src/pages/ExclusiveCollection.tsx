import React from 'react';
import { motion } from 'framer-motion';

const watches = [
  { id: 1, name: "Rolex Cosmograph", price: "$89,999", image: "https://images.unsplash.com/photo-1627039711188-b3f2a115a1f3?auto=format&fit=crop&q=80&w=800", description: "Limited Edition of 100" },
  { id: 2, name: "AP Concept", price: "$125,999", image: "https://images.unsplash.com/photo-1626264146558-517db4c8c6fb?auto=format&fit=crop&q=80&w=800", description: "Tourbillon Masterpiece" },
  { id: 3, name: "Cartier Tank", price: "$45,999", image: "https://images.unsplash.com/photo-1629581678313-36cf745a9af9?auto=format&fit=crop&q=80&w=800", description: "Centennial Edition" },
  { id: 4, name: "Hublot Unico", price: "$79,999", image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800", description: "Sapphire Crystal" },
  { id: 5, name: "Patek Philippe Nautilus", price: "$210,000", image: "https://images.unsplash.com/photo-1603290931251-dca547db95aa?auto=format&fit=crop&q=80&w=800", description: "Ultra Rare Edition" },
  { id: 6, name: "Omega Speedmaster", price: "$12,999", image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a2?auto=format&fit=crop&q=80&w=800", description: "Moonwatch Professional" },
  { id: 7, name: "Richard Mille RM 11-03", price: "$450,000", image: "https://images.unsplash.com/photo-1598300039839-29b8bb3adf4d?auto=format&fit=crop&q=80&w=800", description: "Sapphire Case" },
  { id: 8, name: "Breitling Navitimer", price: "$7,899", image: "https://images.unsplash.com/photo-1577094083423-b7c92850ef40?auto=format&fit=crop&q=80&w=800", description: "Classic Pilot Watch" },
  { id: 9, name: "Tag Heuer Monaco", price: "$6,499", image: "https://images.unsplash.com/photo-1565744465117-b4d939d7e99d?auto=format&fit=crop&q=80&w=800", description: "Racing Legend" },
  { id: 10, name: "Seiko Prospex", price: "$999", image: "https://images.unsplash.com/photo-1566429605089-0b47ff7152c2?auto=format&fit=crop&q=80&w=800", description: "Diver's 200m" },
  { id: 11, name: "Grand Seiko Snowflake", price: "$5,499", image: "https://images.unsplash.com/photo-1586381604913-f8d88fe4dd31?auto=format&fit=crop&q=80&w=800", description: "Spring Drive Movement" },
  { id: 12, name: "Zenith Defy", price: "$14,999", image: "https://images.unsplash.com/photo-1598300058567-67a9a5c051b1?auto=format&fit=crop&q=80&w=800", description: "Extreme Skeleton" }
];

const ExclusiveCollection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Sleek Header Section */}
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
            Exclusive <span className="text-white">Collection</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg max-w-2xl mx-auto text-gray-300"
          >
            Limited edition timepieces for elite collectors
          </motion.p>
        </div>
      </div>

      {/* Collection Navigation */}
      <div className="bg-black py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Rare Pieces</h2>
            <div className="flex space-x-4">
              <button className="text-sm text-gray-400 hover:text-white transition-colors">All</button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">Limited</button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">Rare</button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">Ultra Rare</button>
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

export default ExclusiveCollection;