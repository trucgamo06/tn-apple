import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../constants';
import { fetchProductById } from '../services/api';
import { motion } from 'motion/react';
import { ChevronLeft, Cpu, Camera, Monitor, Smartphone, ShoppingBag, Check } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { addToCart, setIsCartOpen } = useAppContext();

  useEffect(() => {
    if (id) {
      fetchProductById(id).then(data => {
        setProduct(data || null);
        setLoading(false);
        window.scrollTo(0, 0);
      });
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product);
      setIsCartOpen(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h1>
        <Link to="/" className="text-blue-500 hover:underline">Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ChevronLeft size={20} />
          <span>Quay lại</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center md:sticky md:top-32"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-[600px] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="text-orange-500 font-semibold mb-2 block uppercase tracking-widest text-sm">Mới</span>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-balance">{product.name}</h1>
              <p className="text-2xl text-gray-400 mb-6 font-medium">{product.price}đ</p>
              <p className="text-lg text-gray-300 leading-relaxed">{product.longDescription}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {product.specs.chip && (
                 <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-amber-500">
                      <Cpu size={24} />
                      <span className="font-semibold text-white">Chip</span>
                    </div>
                    <p className="text-gray-400 text-sm">{product.specs.chip}</p>
                 </div>
               )}
               {product.specs.display && (
                 <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-amber-500">
                      <Monitor size={24} />
                      <span className="font-semibold text-white">Màn hình</span>
                    </div>
                    <p className="text-gray-400 text-sm">{product.specs.display}</p>
                 </div>
               )}
               {product.specs.camera && (
                 <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5 sm:col-span-2">
                    <div className="flex items-center gap-3 mb-3 text-amber-500">
                      <Camera size={24} />
                      <span className="font-semibold text-white">Camera</span>
                    </div>
                    <p className="text-gray-400 text-sm">{product.specs.camera}</p>
                 </div>
               )}
               {product.specs.compatibility && (
                 <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5 sm:col-span-2">
                    <div className="flex items-center gap-3 mb-3 text-amber-500">
                      <Smartphone size={24} />
                      <span className="font-semibold text-white">Tương thích</span>
                    </div>
                    <p className="text-gray-400 text-sm">{product.specs.compatibility}</p>
                 </div>
               )}
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={handleBuyNow}
                className="w-full bg-amber-500 hover:bg-amber-400 text-black rounded-full py-4 text-lg font-bold transition-all active:scale-[0.98] shadow-xl shadow-amber-500/10"
              >
                Thanh toán ngay
              </button>
              <button 
                onClick={handleAddToCart}
                className={`w-full ${added ? 'bg-green-600' : 'bg-zinc-800 hover:bg-zinc-700'} text-white rounded-full py-4 text-lg font-semibold transition-all flex items-center justify-center gap-2 active:scale-[0.98]`}
              >
                {added ? (
                  <>
                    <Check size={24} />
                    <span>Đã thêm</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={24} />
                    <span>Thêm vào giỏ</span>
                  </>
                )}
              </button>
              <p className="text-center text-sm text-gray-500 sm:col-span-2">Miễn phí giao hàng và nhận hàng tại cửa hàng.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
