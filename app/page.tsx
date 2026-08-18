"use client";

import React, { useState } from "react";

// อัปเดตข้อมูลเมนูพร้อมภาพประกอบจริงจาก Unsplash
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

// กำหนด Type สำหรับสินค้าในตะกร้า
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ฟังก์ชันเพิ่มสินค้าลงตะกร้า
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

  // ฟังก์ชันลบสินค้าออกจากตะกร้า
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // คำนวณยอดรวมทั้งหมด
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header (สไตล์สีส้มคล้ายแอปช้อปปิ้ง) */}
      <header className="bg-orange-500 text-white p-4 sticky top-0 z-50 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">FoodieShop</h1>
        <button 
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          🛒 ตะกร้าของฉัน
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
              {totalItems}
            </span>
          )}
        </button>
      </header>

      <main className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-6 mt-6">
        
        {/* โซนแสดงสินค้า */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <div key={food.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 flex flex-col">
              <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{food.name}</h2>
                <p className="text-orange-500 font-bold text-xl mt-2 mb-4">฿{food.price}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => addToCart(food)}
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 active:bg-orange-700 transition"
                  >
                    ใส่ตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* โซนตะกร้าสินค้า (แสดงด้านข้างในจอใหญ่ หรือซ่อน/โชว์ตามปุ่มกด) */}
        {isCartOpen && (
          <div className="w-full md:w-80 bg-white p-4 rounded-xl shadow-lg border border-gray-100 h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">สรุปคำสั่งซื้อ</h2>
            
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-4">ยังไม่มีสินค้าในตะกร้า</p>
            ) : (
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 line-clamp-1">{item.name}</p>
                      <p className="text-sm text-gray-500">฿{item.price} x {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-orange-500">฿{item.price * item.quantity}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-bold bg-red-100 px-2 py-1 rounded"
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-semibold">ยอดรวมทั้งสิ้น</span>
                <span className="text-2xl font-bold text-orange-600">฿{totalPrice}</span>
              </div>
              <button 
                disabled={cart.length === 0}
                className={`w-full py-3 rounded-lg font-bold text-white transition ${cart.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
              >
                ชำระเงินเลย
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
