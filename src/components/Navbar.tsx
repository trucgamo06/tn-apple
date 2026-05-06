import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, Smartphone, LogOut, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import CartOverlay from './CartOverlay';

export default function Navbar() {
  const { user, logout, cart, searchQuery, setSearchQuery, isCartOpen, setIsCartOpen } = useAppContext();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navLinks = [
    { name: 'Cửa hàng', path: '/' },
    { name: 'iPhone', path: '/iphone' },
    { name: 'Phụ kiện', path: '/accessories' },
    { name: 'Hỗ trợ', path: '#' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass h-12 flex items-center justify-center px-4">
        <div className="max-w-5xl w-full flex items-center justify-between text-white/80 text-[12px] font-medium">
          <Link to="/" className="cursor-pointer text-white flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="bg-amber-500 text-black p-1 rounded-md"
            >
              <Smartphone size={16} strokeWidth={3} />
            </motion.div>
            <span className="font-bold text-[14px] tracking-tight group-hover:text-amber-500 transition-colors">TN APPLE</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-white/70">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="hover:text-amber-500 transition-colors cursor-pointer text-xs font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-amber-500 transition-colors focus:outline-none"
            >
              <Search size={16} />
            </button>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative hover:text-amber-500 transition-colors focus:outline-none"
            >
              <ShoppingBag size={16} />
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-[9px] text-black font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>

            {user && (
              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <span className="hidden sm:inline text-xs truncate max-w-[80px]">{user.name}</span>
                <button 
                  onClick={logout}
                  className="hover:text-red-500 transition-colors"
                  title="Đăng xuất"
                >
                  <LogOut size={16} />
                </button>
              </div>
            )}

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:text-amber-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-12 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-amber-500 transition-colors flex items-center justify-between py-2 border-b border-white/5"
                >
                  {link.name}
                  <span className="text-gray-600">&rsaquo;</span>
                </Link>
              ))}
              {user && (
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-gray-400">Tài khoản: {user.name}</span>
                  <button onClick={logout} className="text-red-500 font-bold">Đăng xuất</button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl pt-2 px-4"
          >
            <div className="max-w-3xl mx-auto py-12">
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <X size={32} />
                </button>
              </div>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={32} />
                <input 
                  autoFocus
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm tại TN APPLE"
                  className="w-full bg-zinc-900/50 border-none rounded-3xl py-6 pl-20 pr-8 text-3xl font-semibold text-white focus:outline-none focus:ring-0"
                />
              </form>
              <div className="mt-12 text-gray-500 text-lg">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-600">Gợi ý tìm kiếm</p>
                <div className="flex flex-wrap gap-4 underline-offset-4 decoration-gray-700">
                  <span className="hover:text-blue-500 cursor-pointer" onClick={() => { setSearchQuery('iPhone 16'); setIsSearchOpen(false); navigate('/?q=iPhone 16'); }}>iPhone 16 Pro</span>
                  <span className="hover:text-blue-500 cursor-pointer" onClick={() => { setSearchQuery('MagSafe'); setIsSearchOpen(false); navigate('/?q=MagSafe'); }}>Phụ kiện MagSafe</span>
                  <span className="hover:text-blue-500 cursor-pointer" onClick={() => { setSearchQuery('Titan'); setIsSearchOpen(false); navigate('/?q=Titan'); }}>iPhone Titan</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartOverlay isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
