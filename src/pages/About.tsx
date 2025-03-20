import React from 'react';
import { motion } from 'framer-motion';
import { Watch, Award, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Watch,
    title: "Exceptional Craftsmanship",
    description: "Each timepiece is meticulously crafted by master watchmakers with decades of experience."
  },
  {
    icon: Award,
    title: "Certified Authenticity",
    description: "All our watches come with official certification and comprehensive documentation."
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "We stand behind our products with an industry-leading warranty and service guarantee."
  },
  {
    icon: Clock,
    title: "Heritage Since 1990",
    description: "Over three decades of excellence in luxury timepiece retail and service."
  }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About LuxWatch</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Since 1990, we've been curating the finest timepieces from the world's most prestigious watchmakers.
            Our commitment to excellence and authenticity has made us a trusted name in luxury watches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-black rounded-lg shadow-lg border border-gray-800"
            >
              <feature.icon className="h-12 w-12 text-white-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?auto=format&fit=crop&q=80&w=800"
              alt="Watchmaker"
              className="rounded-lg shadow-lg border border-gray-800"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment to Excellence</h2>
            <p className="text-gray-400 mb-6">
              At LuxWatch, we believe that a timepiece is more than just an accessory—it's a statement of
              personal style, a mark of achievement, and a legacy to be passed down through generations.
            </p>
            <p className="text-gray-400">
              Our expert team of horologists and luxury watch specialists ensures that every timepiece
              in our collection meets the highest standards of quality and authenticity. We work directly
              with the world's most prestigious watchmakers to bring you exclusive collections and limited
              editions that can't be found anywhere else.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
