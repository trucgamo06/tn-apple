import React from 'react';
import ProductSection from '../components/ProductSection';
import { motion } from 'motion/react';

export default function AccessoryPage() {
  return (
    <div className="bg-black min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">Phụ kiện</h1>
          <p className="text-gray-400 text-lg">Tất cả phụ kiện chính hãng cho iPhone của bạn.</p>
        </motion.div>
        
        <ProductSection forcedCategory="accessory" />
      </div>
    </div>
  );
}
