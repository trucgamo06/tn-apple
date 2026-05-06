import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { motion } from 'motion/react';
import { Smartphone, Zap, Camera, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      
      {/* Dynamic Feature Bento Grid */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-zinc-900 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="z-10">
              <h3 className="text-3xl font-bold mb-4">Chip A18 Pro</h3>
              <p className="text-gray-400 max-w-sm">Mạnh mẽ hơn. Thông minh hơn. Một bước nhảy vọt về hiệu năng đồ họa.</p>
            </div>
            <div className="absolute right-0 bottom-0 p-8 text-amber-500 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
              <Zap size={180} strokeWidth={1} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-900 rounded-[2.5rem] p-10 flex flex-col items-center text-center justify-center border border-white/5"
          >
            <Camera size={48} className="text-amber-500 mb-6" />
            <h3 className="text-xl font-bold">Điều khiển Camera</h3>
            <p className="text-gray-500 text-sm mt-2">Nút mới hoàn toàn giúp chụp ảnh tức thì.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 rounded-[2.5rem] p-10 flex flex-col items-center text-center justify-center border border-white/5"
          >
            <ShieldCheck size={48} className="text-green-500 mb-6" />
            <h3 className="text-xl font-bold">Titan bền bỉ</h3>
            <p className="text-gray-500 text-sm mt-2">Dòng Titan mạnh mẽ với trọng lượng nhẹ hơn.</p>
          </motion.div>
        </div>
      </section>
      
      <section className="bg-zinc-100 text-black py-16 px-4 overflow-hidden rounded-[4rem] mx-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight">iPhone 16</h2>
              <p className="text-xl md:text-2xl text-zinc-600 mt-4 font-medium">Hello, Apple Intelligence.</p>
              <div className="flex gap-4 mt-8">
                <button className="bg-black text-white rounded-full px-8 py-3 transition-all font-bold hover:scale-105 active:scale-95 shadow-xl">Mua ngay</button>
                <button className="text-amber-600 hover:underline font-bold text-lg">Tìm hiểu thêm &rsaquo;</button>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1727280053733-4082d6b38c22?auto=format&fit=crop&q=80&w=800"
              alt="iPhone 16"
              className="w-full h-auto object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <div className="py-12" id="products">
        <ProductSection />
      </div>
    </div>
  );
}
