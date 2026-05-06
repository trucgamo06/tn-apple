import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { Product } from '../constants';
import { fetchProducts } from '../services/api';
import { Link, useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Plus, Check } from 'lucide-react';

interface ProductSectionProps {
  forcedCategory?: string;
}

export default function ProductSection({ forcedCategory }: ProductSectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const category = forcedCategory || searchParams.get('category');
  const query = searchParams.get('q');

  useEffect(() => {
    setLoading(true);
    fetchProducts().then(data => {
      let filtered = data;
      if (category) {
        filtered = filtered.filter(p => p.type === category);
      }
      if (query) {
        const lowerQuery = query.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(lowerQuery) || 
          p.description.toLowerCase().includes(lowerQuery)
        );
      }
      setProducts(filtered);
      setLoading(false);
    });
  }, [category, query]);

  if (loading) {
    return (
      <div className="py-24 text-center bg-zinc-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }

  return (
    <section className="py-24 px-4 bg-zinc-950" id="products">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-16 text-center">
          {query ? `Kết quả tìm kiếm cho "${query}"` : 
           category === 'iphone' ? 'iPhone Mới Nhất' : 
           category === 'accessory' ? 'Phụ Kiện Chính Hãng' : 
           'Sản phẩm tại TN APPLE'}
        </h2>
        
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Không tìm thấy sản phẩm nào phù hợp.</p>
            <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block font-medium">Xem tất cả sản phẩm</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={idx} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number; key?: string }) {
  const { addToCart, setIsCartOpen } = useAppContext();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center bg-zinc-900 rounded-[2.5rem] p-6 text-center group cursor-pointer hover:bg-zinc-800/80 transition-all relative"
    >
      <Link to={`/product/${product.id}`} className="w-full flex flex-col items-center">
        <div className="h-48 mb-6 flex items-center justify-center p-2">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="flex gap-2 mb-3">
          {product.category === 'pro' && (
            <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">Mới</span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-6 px-2 line-clamp-2 min-h-[2rem]">
          {product.description}
        </p>
        
        <p className="text-xl font-bold mb-6 text-white">{product.price}đ</p>
        
        <div className="mt-auto flex flex-col gap-3 w-full">
          <div className="flex gap-2 w-full">
            <button 
              onClick={handleBuyNow}
              className="flex-1 bg-amber-500 hover:bg-amber-400 text-black rounded-full py-3 text-xs font-bold transition-all active:scale-95 shadow-lg"
            >
              Thanh toán
            </button>
            <button 
              onClick={handleAddToCart}
              title="Thêm vào giỏ hàng"
              className={`p-3 rounded-full border border-amber-500/30 transition-all active:scale-90 ${added ? 'bg-green-600 border-green-600' : 'hover:bg-amber-500/10'}`}
            >
              {added ? <Check size={18} className="text-white" /> : <Plus size={18} className="text-amber-500" />}
            </button>
          </div>
          <span className="text-amber-500 hover:underline text-xs font-semibold">Tìm hiểu thêm &rsaquo;</span>
        </div>
      </Link>
    </motion.div>
  );
}
