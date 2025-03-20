import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Your existing code...
  const featuredWatches = [
    {
      id: 1,
      name: "Eclipse Chrono",
      price: "$2,499",
      image: "https://media.istockphoto.com/id/904687164/photo/wrist-watch.jpg?s=612x612&w=0&k=20&c=GGdy4maGWpKt6L3A9f1o0gdU6jKH2PGFVthcRzDBHGg=",
      category: "Men's Collection"
    },
    {
      id: 2,
      name: "Titan Verge",
      price: "$3,999",
      image: "https://media.istockphoto.com/id/2157412971/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black-and.jpg?s=612x612&w=0&k=20&c=2Id2Yi9GyqzJGwfKUoU23kfOl63iTEwr-h0VeRWXM7k=",
      category: "Women's Collection"
    },
    {
      id: 3,
      name: "Obsidian Prime",
      price: "$1,999",
      image: "https://media.istockphoto.com/id/916407684/photo/watch.jpg?s=612x612&w=0&k=20&c=1qkF75fr-Wsb1Y5ShXnzFYNv8wZ7ST-xZ8CxSzPCXr4=",
      category: "Exclusive Collection"
    },
    {
      id: 4,
      name: "Aether TimeX",
      price: "$4,299",
      image: "https://media.istockphoto.com/id/1209888941/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-hand-watch.jpg?s=612x612&w=0&k=20&c=LuIpqv3RzBrbjSSToFP1xwxHFIkP05XW0rdp5BZ9TIo=",
      category: "Luxury Collection"
    },
    {
      id: 5,
      name: "AI Gen Watch 1",
      price: "$5,499",
      image: "https://media.istockphoto.com/id/2156771039/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=612x612&w=0&k=20&c=zLtGRpzBgXFiKYcEYbtIJB4-DIBVc095OC-5zU8Okus=",
      category: "AI Collection"
    },
    {
      id: 6,
      name: "AI Gen Watch 2",
      price: "$2,899",
      image: "https://media.istockphoto.com/id/961003406/vector/men-watch-with-metal-bracelet.jpg?s=612x612&w=0&k=20&c=beeacNFq6k5fxCDkxMKLcuTuhSae5duz5Hclj0yh5-c=",
      category: "AI Collection"
    },
    {
      id: 7,
      name: "AI Gen Watch 3",
      price: "$3,499",
      image: "https://media.istockphoto.com/id/1208843348/photo/luxury-watch-isolated-on-white-background-with-clipping-path-blue-watch-clean-watch-men-watch.jpg?s=612x612&w=0&k=20&c=FQzqyucgG1osYSZ2DgiZlg67_3e9Uvjeh23mpR70MPY=",
      category: "AI Collection"
    },
    {
      id: 8,
      name: "AI Gen Watch 4",
      price: "$4,799",
      image: "https://media.istockphoto.com/id/452155677/photo/watch.jpg?s=612x612&w=0&k=20&c=Z8Wf15XtKF_XjWv75ctCtvC1MDiNfMdxhQmXFCvQQx0=",
      category: "AI Collection"
    }
  ];

  // Best selling watch data
  const bestSellingWatch = {
    id: "bestseller-1",
    name: "Celestial Infinity",
    price: "$6,499",
    description: "Our masterpiece of precision engineering and timeless design. Hand-crafted with Swiss expertise and limited to only 100 pieces worldwide.",
    image: "https://media.istockphoto.com/id/1412248691/photo/luxury-watch-on-black-background.jpg?s=612x612&w=0&k=20&c=WQ-Csxu7KLGLZ0KXJO2RPqbkAI4yt7NXm5jL3JhscgU=",
    features: ["Swiss Movement", "Sapphire Crystal", "100m Water Resistant", "Limited Edition"]
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Adjusted height to be more consistent */}
      <div className="relative w-full h-[80vh] md:h-[85vh] lg:h-[90vh]">
        <div className="absolute inset-0 z-0 ">
          <img 
            src="https://www.patek.com/resources/img/wallpapers/2560x1440pxl/patekphilippe_5212A_001.jpg" 
            alt="Luxury Watch" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Timeless Elegance
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90 mx-auto">
              Discover our curated collection of luxury timepieces, where craftsmanship meets sophistication
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                to="/new-collection" 
                className="inline-flex items-center space-x-2 bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-black hover:text-white border border-white transition-colors duration-300 text-sm sm:text-base"
              >
                <span>Explore Collection</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Best Selling Watch Section - Modified for mobile layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-block relative"
            >
              Best Selling Timepiece
              <span className="block h-1 w-16 sm:w-24 bg-white mt-2 mx-auto"></span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center"
          >
            {/* Watch Image Side - No order class needed on mobile as it will naturally stack */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center md:order-1"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl w-full sm:w-3/4 md:w-4/5 max-w-md mx-auto">
                <img 
                  src={"https://i.pinimg.com/474x/60/ab/14/60ab1436915e6c287e48333afeec5621.jpg"} 
                  alt={bestSellingWatch.name} 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Most Popular
                </div>
              </div>
            </motion.div>
            
            {/* Watch Details Side - No order class needed on mobile */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white space-y-4 sm:space-y-6 mt-6 md:mt-0 md:order-2"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{bestSellingWatch.name}</h3>
              <p className="text-xl sm:text-2xl font-light text-white">{bestSellingWatch.price}</p>
              <p className="text-gray-300 text-base sm:text-lg">{bestSellingWatch.description}</p>
              
              <div className="pt-2 sm:pt-4">
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Signature Features</h4>
                <ul className="grid grid-cols-2 gap-2 sm:gap-3">
                  {bestSellingWatch.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 sm:pt-6">
                <Link to="/product/bestseller" className="inline-flex items-center space-x-2 bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white/80 transition-colors text-sm sm:text-base">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Watches Section - Adjusted to match best selling section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-block relative"
            >
              Featured Timepieces
              <span className="block h-1 w-16 sm:w-24 bg-white mt-2 mx-auto"></span>
            </motion.h2>
          </div>
          
          {/* First row - Featured watches */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
            {featuredWatches.slice(0, 4).map((watch) => (
              <motion.div 
                key={watch.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }} 
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={watch.image} 
                    alt={watch.name} 
                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="mt-3 md:mt-4 text-center">
                  <h3 className="text-sm md:text-base font-semibold text-white truncate">{watch.name}</h3>
                  <p className="text-xs text-gray-400">{watch.category}</p>
                  <p className="text-sm md:text-base text-white font-semibold mt-1">{watch.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Second row - Featured watches */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {featuredWatches.slice(4, 8).map((watch) => (
              <motion.div 
                key={watch.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={watch.image} 
                    alt={watch.name} 
                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="mt-3 md:mt-4 text-center">
                  <h3 className="text-sm md:text-base font-semibold text-white truncate">{watch.name}</h3>
                  <p className="text-xs text-gray-400">{watch.category}</p>
                  <p className="text-sm md:text-base text-white font-semibold mt-1">{watch.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-10 md:mt-12 lg:mt-14">
            <Link to="/ViewAllWatchesPage" className="inline-flex items-center space-x-2 border border-white text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
              <span>View All Watches</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;