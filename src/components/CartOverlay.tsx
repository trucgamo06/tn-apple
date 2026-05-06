import { motion, AnimatePresence } from 'motion/react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, clearCart } = useAppContext();

  const total = cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/\./g, '')) * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} />
                <h2 className="text-xl font-bold">Giỏ hàng của bạn</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 overscroll-contain scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="bg-zinc-800 p-6 rounded-full">
                    <ShoppingBag size={48} className="text-gray-600" />
                  </div>
                  <p className="text-gray-400">Giỏ hàng đang trống.</p>
                  <button 
                    onClick={onClose}
                    className="text-amber-500 font-medium hover:underline"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>
              ) : (
                <div className="pb-12 space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-20 h-20 bg-black rounded-xl overflow-hidden flex-shrink-0 p-2 border border-white/5">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <Link to={`/product/${item.id}`} onClick={onClose}>
                            <h3 className="font-bold hover:text-amber-500 transition-colors uppercase text-sm tracking-tight">{item.name}</h3>
                          </Link>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-500 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.description}</p>
                        <div className="flex justify-between items-end mt-2">
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                             <span>SL:</span>
                             <span className="text-white font-medium">{item.quantity}</span>
                          </div>
                          <span className="font-bold text-white">{item.price}đ</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-zinc-900/50 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-400">Tổng cộng</span>
                  <span className="font-bold text-2xl text-amber-500">{total.toLocaleString('vi-VN')}đ</span>
                </div>
                <button 
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-amber-500/10"
                >
                  Thanh toán ngay
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={clearCart}
                  className="w-full text-gray-500 text-xs hover:text-white transition-colors"
                >
                  Xóa toàn bộ giỏ hàng
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
