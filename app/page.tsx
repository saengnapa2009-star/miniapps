"use client";

import React, { useState } from "react";

const foods = [
  {
    id: 1,
    name: "เบอร์เกอร์เนื้อพรีเมียม",
    price: 129,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "พิซซ่าชีสเยิ้ม",
    price: 199,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "ซูชิญี่ปุ่น",
    price: 159,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
  },
];

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const addToCart = (product: typeof foods[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleConfirmOrder = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsCheckoutOpen(false);
      setIsCartModalOpen(false);
      setCart([]);
    }, 2500);
  };

  return (
    <div className="min-h-screen relative font-sans bg-gray-50">
      
      {/* 1. แถบ Top Bar สีดำด้านบนสุด */}
      <div className="bg-black text-white text-xs md:text-sm py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center z-50 relative">
        <div className="flex gap-6 items-center mb-2 md:mb-0">
          <span className="flex items-center gap-2">
            <span className="text-red-500">✉</span> contact@foodieshop.com
          </span>
          <span className="flex items-center gap-2 text-red-500 font-bold">
            📞 <span className="text-white font-normal">+66 81 234 5678</span>
          </span>
        </div>
        <div className="flex gap-2">
          <a href="#" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">f</a>
          <a href="#" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">t</a>
          <a href="#" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">ig</a>
          <a href="#" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">yt</a>
        </div>
      </div>

      {/* 2. Navigation Bar */}
      <nav className="absolute top-10 w-full z-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-3xl md:text-4xl font-serif font-bold text-white tracking-widest mb-4 md:mb-0 drop-shadow-md">
          FOODIE<span className="text-red-600">SHOP</span>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-white text-sm font-semibold tracking-wide">
          <a href="#" className="hover:text-red-400 transition">ABOUT US</a>
          <a href="#" className="hover:text-red-400 transition">MENU ˅</a>
          <a href="#" className="hover:text-red-400 transition">PROMOTION</a>
          <a href="#" className="hover:text-red-400 transition">CATERING ˅</a>
          <a href="#" className="hover:text-red-400 transition">BLOG</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white flex items-center px-2 py-1 rounded-sm shadow-inner">
            <input 
              type="text" 
              placeholder="Search menu..." 
              className="outline-none text-gray-700 text-sm px-2 py-1 w-32 md:w-48 bg-transparent" 
            />
          </div>
          {/* ปุ่มตะกร้าด้านบนที่คลิกเปิด Modal ได้ */}
          <button 
            onClick={() => setIsCartModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md transition cursor-pointer"
          >
            🛒 ตะกร้าของฉัน ({totalItems})
          </button>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <div className="relative h-[85vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-xl tracking-tight">
            WE ARE <br/> DELICIOUS
          </h1>
          <div className="flex items-center mt-6">
            <div className="w-1.5 h-16 md:h-20 bg-red-600 mr-4 md:mr-6"></div>
            <p className="text-xl md:text-3xl text-gray-200 font-light drop-shadow-md">
              in Premium Ingredients & Taste <br/> for everyday meals
            </p>
          </div>
        </div>
      </div>

      {/* 4. ส่วนของร้านค้าและตะกร้า */}
      <main className="max-w-6xl mx-auto p-4 md:p-8 mt-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">เมนูแนะนำของเรา</h2>
          <p className="text-gray-500 mt-2">เลือกเมนูโปรดแล้วกดใส่ตะกร้าได้เลยจ้า</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* รายการสินค้า */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {foods.map((food) => (
              <div key={food.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100 flex flex-col">
                <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{food.name}</h3>
                  <p className="text-orange-500 font-bold text-xl mt-2 mb-4">฿{food.price}</p>
                  <div className="mt-auto">
                    <button
                      onClick={() => addToCart(food)}
                      className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-semibold hover:bg-orange-600 active:bg-orange-700 transition shadow cursor-pointer"
                    >
                      ใส่ตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* สรุปคำสั่งซื้อด้านข้าง */}
          <div className="w-full lg:w-80 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-fit">
            <h3 className="text-xl font-bold mb-4 border-b pb-3 text-gray-800">สรุปคำสั่งซื้อ</h3>
            
            {cart.length === 0 ? (
              <p className="text-gray-400 text-center py-8 text-sm">ยังไม่มีสินค้าในตะกร้า</p>
            ) : (
              <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex-1 pr-2">
                      <p className="text-sm font-semibold text-gray-800 line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-500">฿{item.price} x {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-orange-500 text-sm">฿{item.price * item.quantity}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-xs font-bold bg-red-100 hover:bg-red-200 px-2 py-1 rounded transition cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 font-semibold">ยอดรวมทั้งสิ้น</span>
                <span className="text-2xl font-bold text-orange-600">฿{totalPrice}</span>
              </div>
              <button 
                disabled={cart.length === 0}
                onClick={() => setIsCheckoutOpen(true)}
                className={`w-full py-3.5 rounded-xl font-bold text-white shadow-md transition ${cart.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 cursor-pointer'}`}
              >
                ชำระเงินเลย
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Modal หน้าต่างตะกร้าสินค้า (เมื่อคลิกปุ่ม "ตะกร้าของฉัน" ด้านบน) */}
      {isCartModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-xl font-bold text-gray-800">🛒 ตะกร้าสินค้าของคุณ</h3>
              <button 
                onClick={() => setIsCartModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-400 text-center py-10">ยังไม่มีสินค้าในตะกร้า</p>
            ) : (
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500">฿{item.price} x {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-orange-500">฿{item.price * item.quantity}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 bg-red-100 hover:bg-red-200 px-2 py-1 rounded text-xs font-bold transition cursor-pointer"
                      >
                        ลบ
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-gray-700">ยอดรวมทั้งสิ้น</span>
                <span className="text-2xl font-bold text-orange-600">฿{totalPrice}</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsCartModalOpen(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition cursor-pointer"
                >
                  เลือกซื้อต่อ
                </button>
                <button
                  disabled={cart.length === 0}
                  onClick={() => {
                    setIsCartModalOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className={`flex-1 py-3 rounded-xl font-bold text-white shadow-md transition ${cart.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 cursor-pointer'}`}
                >
                  ดำเนินการชำระเงิน
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal หน้าต่างชำระเงิน */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">สั่งซื้อสำเร็จ!</h3>
                <p className="text-gray-500">ขอบคุณที่ใช้บริการ FoodieShop จ้า</p>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">ยืนยันการชำระเงิน</h3>
                  <button 
                    onClick={() => setIsCheckoutOpen(false)}
                    className="text-gray-400 hover:text-gray-600 text-lg font-bold cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 mb-6 max-h-48 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name} (x{item.quantity})</span>
                      <span className="font-semibold text-gray-800">฿{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-xl mb-6 flex justify-between items-center">
                  <span className="font-semibold text-gray-700">ยอดชำระสุทธิ</span>
                  <span className="text-2xl font-bold text-orange-600">฿{totalPrice}</span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsCheckoutOpen(false)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition cursor-pointer"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={handleConfirmOrder}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold shadow-md transition cursor-pointer"
                  >
                    ยืนยันการโอนเงิน
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
