export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  color: string;
  category: 'pro' | 'standard' | 'accessory';
  type: 'iphone' | 'accessory';
  specs: {
    chip?: string;
    camera?: string;
    display?: string;
    compatibility?: string;
    material?: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    description: 'Titan Sa Mạc. Chip A18 Pro mãnh mẽ. Hệ thống camera chuyên nghiệp.',
    longDescription: 'iPhone 16 Pro Max với thiết kế bằng titan tràn viền, màn hình lớn nhất từ trước đến nay, và thời lượng pin tốt nhất trên iPhone. chip A18 Pro mang đến hiệu năng gaming và xử lý video chuyên nghiệp.',
    price: '34.990.000',
    image: 'https://images.unsplash.com/photo-1727188315183-05708899806e?auto=format&fit=crop&q=80&w=800',
    color: 'Titan Sa Mạc',
    category: 'pro',
    type: 'iphone',
    specs: {
      chip: 'A18 Pro',
      camera: '48MP Fusion | 48MP Ultra Wide | 12MP 5x Telephoto',
      display: '6.9" Super Retina XDR'
    }
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    description: 'Sức mạnh Pro trong thiết kế nhỏ gọn hơn. Màn hình ProMotion 120Hz.',
    longDescription: 'Hiệu năng Pro đỉnh cao. Chip A18 Pro mãnh mẽ. Camera Control giúp bạn quay chụp chuyên nghiệp chỉ với một lần chạm.',
    price: '28.990.000',
    image: 'https://images.unsplash.com/photo-1727280053748-0382d6b38c22?auto=format&fit=crop&q=80&w=800',
    color: 'Titan Đen',
    category: 'pro',
    type: 'iphone',
    specs: {
      chip: 'A18 Pro',
      camera: '48MP Fusion | 48MP Ultra Wide | 12MP 5x Telephoto',
      display: '6.3" Super Retina XDR'
    }
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    description: 'Điều khiển Camera. Chip A18 cực nhanh. Nút Tác Vụ.',
    longDescription: 'Thế hệ iPhone hoàn toàn mới với Camera Control. Chip A18 mang lại bước nhảy vọt về hiệu năng và tiết kiệm pin.',
    price: '22.990.000',
    image: 'https://images.unsplash.com/photo-1727280053733-4082d6b38c22?auto=format&fit=crop&q=80&w=800',
    color: 'Xanh Lưu Ly',
    category: 'standard',
    type: 'iphone',
    specs: {
      chip: 'A18',
      camera: '48MP Fusion | 12MP Ultra Wide | 2x Telephoto',
      display: '6.1" Super Retina XDR'
    }
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    description: 'Màn hình lớn. Chip A18. Thời lượng pin cực khủng.',
    longDescription: 'iPhone 16 Plus mang đến màn hình 6.7 inch rộng rãi cùng với chip A18 thế hệ mới, Camera Control và thời lượng pin ấn tượng nhất từ trước đến nay trên dòng iPhone tiêu chuẩn.',
    price: '25.990.000',
    image: 'https://images.unsplash.com/photo-1727280053733-4082d6b38c22?auto=format&fit=crop&q=80&w=800',
    color: 'Hồng',
    category: 'standard',
    type: 'iphone',
    specs: {
      chip: 'A18',
      camera: '48MP Fusion | 12MP Ultra Wide | 2x Telephoto',
      display: '6.7" Super Retina XDR'
    }
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    description: 'Thiết kế Titan. Chip A17 Pro. Nút Tác Vụ.',
    longDescription: 'Mẫu iPhone đầu tiên sở hữu thiết kế bằng titan chuẩn hàng không vũ trụ, chip A17 Pro thay đổi cuộc chơi và hệ thống camera Pro linh hoạt nhất.',
    price: '24.990.000',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
    color: 'Titan Tự Nhiên',
    category: 'pro',
    type: 'iphone',
    specs: {
      chip: 'A17 Pro',
      camera: '48MP Main | 12MP Ultra Wide | 3x Telephoto',
      display: '6.1" Super Retina XDR'
    }
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    description: 'Dynamic Island. Camera chính 48MP. USB-C.',
    longDescription: 'iPhone 15 mang đến Dynamic Island, camera chính 48MP và thiết kế pha màu qua kính cực kỳ bền bỉ.',
    price: '19.790.000',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
    color: 'Xanh Dương',
    category: 'standard',
    type: 'iphone',
    specs: {
      chip: 'A16 Bionic',
      camera: '48MP Main | 12MP Ultra Wide',
      display: '6.1" Super Retina XDR'
    }
  },
  {
    id: 'magsafe-charger',
    name: 'Sạc MagSafe',
    description: 'Sạc không dây nhanh hơn và hít nam châm hoàn hảo.',
    longDescription: 'Sạc MagSafe giúp việc sạc không dây trở nên nhanh chóng. Các nam châm được căn chỉnh hoàn hảo sẽ gắn vào iPhone 12 trở lên của bạn để sạc không dây nhanh hơn lên đến 15W.',
    price: '1.290.000',
    image: 'https://images.unsplash.com/photo-1625766127286-9f4a01c8052a?auto=format&fit=crop&q=80&w=800',
    color: 'Trắng',
    category: 'accessory',
    type: 'accessory',
    specs: {
      compatibility: 'iPhone 12 trở lên',
      material: 'Nhôm, Silicone'
    }
  },
  {
    id: 'finewoven-case',
    name: 'Ốp Lưng MagSafe Vải Tinh Dệt',
    description: 'Mềm mại như da lộn, bền bỉ và bảo vệ tốt.',
    longDescription: 'Được làm từ vi sợi bền chắc, chất liệu vải tinh dệt mang lại cảm giác mềm mại như da lộn. Chất liệu này cũng được thiết kế chú trọng đến Trái Đất.',
    price: '1.690.000',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800',
    color: 'Xanh Thái Bình Dương',
    category: 'accessory',
    type: 'accessory',
    specs: {
      compatibility: 'iPhone 15 Series',
      material: 'Vải Tinh Dệt'
    }
  }
];
