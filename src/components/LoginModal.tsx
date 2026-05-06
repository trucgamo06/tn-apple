import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppContext } from '../context/AppContext';
import { Smartphone, X } from 'lucide-react';

export default function LoginModal() {
  const { user, login } = useAppContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      login(name, email);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-zinc-900 border border-white/10 p-8 rounded-[2.5rem] max-w-md w-full shadow-2xl"
      >
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-amber-500 text-black p-3 rounded-2xl mb-4">
            <Smartphone size={32} strokeWidth={3} />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Chào mừng tới TN APPLE</h2>
          <p className="text-gray-400 mt-2">Đăng nhập để bắt đầu trải nghiệm mua sắm tuyệt vời nhất.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Họ và tên</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nguyễn Văn A"
              className="w-full bg-zinc-800 border border-white/5 rounded-2xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full bg-zinc-800 border border-white/5 rounded-2xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-medium"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-amber-500 text-black font-bold py-4 rounded-2xl mt-4 hover:bg-amber-400 transition-colors active:scale-[0.98]"
          >
            Tiếp tục
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Bằng cách tiếp tục, bạn đồng ý với Điều khoản của TN APPLE.
        </p>
      </motion.div>
    </div>
  );
}
