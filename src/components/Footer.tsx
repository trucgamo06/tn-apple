import { Smartphone, Facebook, Youtube, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-[12px] text-gray-500 space-y-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-12 items-start">
          <div className="space-y-6 flex-1">
            <div className="flex items-center gap-2">
               <div className="bg-amber-500 text-black p-1.5 rounded-lg">
                  <Smartphone size={20} strokeWidth={3} />
               </div>
               <span className="text-xl font-bold text-white tracking-tighter">TN APPLE</span>
            </div>
            <p className="max-w-md text-sm leading-6">Hệ thống bán lẻ các sản phẩm Apple chính hãng tại Việt Nam. Uy tín, chất lượng và trải nghiệm người dùng là ưu tiên hàng đầu của chúng tôi.</p>
          </div>

          <div className="flex flex-col gap-8 w-full md:w-auto">
            {/* Social Stats Section */}
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="bg-[#3b5998] p-1.5 rounded-full text-white">
                  <Facebook size={20} fill="currentColor" />
                </div>
                <span className="text-blue-400 font-semibold group-hover:underline">3886.8k Fan</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="bg-[#ff0000] p-1.5 rounded-full text-white">
                  <Youtube size={20} fill="currentColor" />
                </div>
                <span className="text-blue-400 font-semibold group-hover:underline">876k Đăng ký</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="bg-[#0068ff] w-8 h-8 rounded-full flex items-center justify-center text-[8px] font-black text-white italic">
                  Zalo
                </div>
                <span className="text-blue-400 font-semibold group-hover:underline">Zalo TN APPLE</span>
              </div>
            </div>

            {/* Certification Badges */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/5 p-2 rounded-lg flex items-center gap-2 border border-white/5">
                <div className="bg-blue-500 text-white p-0.5 rounded-full">
                  <ShieldCheck size={16} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[8px] font-bold text-gray-300 uppercase">Đã thông báo</span>
                  <span className="text-[7px] text-gray-400 uppercase tracking-tighter">Bộ Công Thương</span>
                </div>
              </div>
              
              <div className="bg-white/5 p-2 rounded-lg flex items-center gap-2 border border-white/5">
                <div className="bg-[#cd3333] w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white">
                  ★
                </div>
                <span className="text-[8px] font-bold text-gray-300 uppercase">Hàng Chính Hãng</span>
              </div>

              <div className="bg-zinc-800 flex rounded overflow-hidden h-8 border border-white/10">
                <div className="bg-gray-500 text-white flex items-center px-2 text-[10px] font-bold">DMCA</div>
                <div className="bg-black text-white flex items-center px-2 text-[10px] font-bold uppercase">Protected</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p>1. iPhone 16 Pro Max có khả năng chống tia nước, chống nước và chống bụi trong điều kiện phòng thí nghiệm được kiểm soát theo tiêu chuẩn IEC 60529.</p>
          <p>Giá niêm yết trên website đã bao gồm thuế GTGT (8% hoặc 10% tùy loại sản phẩm).</p>
        </div>
        
        <div className="border-b border-white/10 pb-4">
          <p>Xem thêm các cách để mua hàng: Tìm <span className="text-amber-500 underline">Apple Store</span> hoặc <span className="text-amber-500 underline">nhà bán lẻ</span> gần bạn. Hoặc gọi số 1800-1192.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-4 pt-4">
          <p>Bản quyền © 2026 TN APPLE. Bảo lưu mọi quyền.</p>
          <div className="flex flex-wrap gap-4 underline-offset-2">
            <span className="hover:underline cursor-pointer transition-all">Chính Sách Bảo Mật</span>
            <span className="hover:underline cursor-pointer transition-all">Điều Khoản Sử Dụng</span>
            <span className="hover:underline cursor-pointer transition-all">Bán Hàng và Hoàn Tiền</span>
          </div>
          <p className="text-right">Việt Nam</p>
        </div>
      </div>
    </footer>
  );
}
