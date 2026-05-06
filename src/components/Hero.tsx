import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#000]">
      <div className="z-10 text-center px-4 mt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-2"
        >
          iPhone 16 Pro
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Titan. Pro. Mạnh mẽ hơn bao giờ hết.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="flex gap-4 mb-8">
            <button className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-3 transition-all font-bold shadow-lg shadow-amber-500/10">Mua ngay</button>
            <button className="text-amber-500 hover:underline font-bold text-lg">Tìm hiểu thêm &rsaquo;</button>
          </div>
          
          <div className="max-w-4xl w-full px-4">
            <img 
              src="https://images.unsplash.com/photo-1727188315183-05708899806e?auto=format&fit=crop&q=80&w=1200" 
              alt="iPhone 16 Pro Max Hero"
              className="w-full h-auto object-cover rounded-t-3xl shadow-2xl shadow-amber-500/5 border-t border-x border-white/5"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
    </section>
  );
}
