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

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ฟังก์ชันเพิ่มสินค้าลงตะกร้า (เช็คว่ามีอยู่แล้วให้เพิ่มจำนวน)
  const addToCart = (food) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === food.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...food, quantity: 1 }];
    });
  };

  // ฟังก์ชันลบสินค้าออกจากตะกร้า
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // เลื่อนหน้าจอไปยัง Section ต่างๆ
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // คำนวณยอดรวมทั้งหมด
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // ฟังก์ชันชำระเงิน
  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert(`ชำระเงินสำเร็จ! ยอดรวม ${totalPrice} บาท\nขอบคุณที่อุดหนุนครับ 🎉`);
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-orange-50 relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow sticky top-0 z-40">
        <h1 
          onClick={() => scrollToSection("hero-section")}
          className="text-3xl font-bold text-orange-500 cursor-pointer"
        >
          🍔 Foodie
        </h1>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <button onClick={() => scrollToSection("hero-section")} className="hover:text-orange-500 transition">หน้าแรก</button>
          <button onClick={() => scrollToSection("menu-section")} className="hover:text-orange-500 transition">เมนูอาหาร</button>
          <button onClick={() => scrollToSection("promo-section")} className="hover:text-orange-500 transition">โปรโมชั่น</button>
          <button onClick={() => scrollToSection("contact-section")} className="hover:text-orange-500 transition">ติดต่อเรา</button>
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition flex items-center gap-2 shadow-md"
        >
          🛒 ตะกร้า
          {totalItems > 0 && (
            <span className="bg-white text-orange-500 rounded-full px-2 py-0.5 text-sm font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </nav>

      {/* Cart Modal (ป๊อปอัปตะกร้าสินค้า) */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-11/12 max-w-md p-6 shadow-2xl relative">
            <button 
              onClick={() => setIsCartOpen(false)}
              className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🛒 ตะกร้าของคุณ</h2>
            
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-10">ไม่มีสินค้าในตะกร้า</p>
            ) : (
              <div className="max-h-60 overflow-y-auto pr-2 mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-orange-50 p-3 rounded-xl mb-3">
                    <div>
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <p className="text-orange-500 text-sm">{item.price} บาท x {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:bg-red-100 px-3 py-1 rounded-lg transition"
                    >
                      ลบ
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-600">ยอดรวมทั้งหมด:</span>
                <span className="text-2xl font-bold text-orange-500">{totalPrice} บาท</span>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className={`w-full py-3 rounded-full font-bold text-white transition ${cart.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 shadow-md active:scale-95'}`}
              >
                ชำระเงินเลย
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero-section" className="grid md:grid-cols-2 gap-10 px-10 py-16 items-center min-h-[80vh]">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            อาหารอร่อย
            <br />
            <span className="text-orange-500">ส่งตรงถึงบ้านคุณ</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg max-w-md">
            สั่งอาหารออนไลน์ง่าย ๆ สดใหม่ทุกวัน พร้อมบริการจัดส่งรวดเร็วทันใจ เลือกเมนูโปรดของคุณได้เลย!
          </p>
          <button
            onClick={() => scrollToSection("menu-section")}
            className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition shadow-md hover:shadow-lg active:scale-95"
          >
            สั่งอาหารเลย
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
          alt="food banner"
          className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
        />
      </section>

      {/* Menu Section */}
      <section id="menu-section" className="px-10 pb-20 pt-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          🍽 เมนูยอดนิยม
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 p-5 flex flex-col group"
            >
              <div className="overflow-hidden rounded-2xl h-56 w-full">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 text-gray-800">
                {food.name}
              </h3>
              <p className="text-orange-500 font-bold mt-2 text-2xl">
                ฿{food.price}
              </p>
              <div className="mt-auto pt-4">
                <button
                  onClick={() => addToCart(food)}
                  className="w-full bg-orange-50 text-orange-600 font-bold py-3 rounded-full hover:bg-orange-500 hover:text-white transition active:scale-95"
                >
                  + เพิ่มลงตะกร้า
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section (Placeholder) */}
      <section id="promo-section" className="px-10 py-20 bg-orange-50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🔥 โปรโมชั่นพิเศษ</h2>
        <div className="bg-orange-500 text-white p-10 rounded-3xl max-w-4xl mx-auto shadow-lg">
          <h3 className="text-4xl font-bold mb-4">ลด 50% ทุกเมนู!</h3>
          <p className="text-lg mb-6">เมื่อสั่งอาหารครบ 500 บาทขึ้นไป (ใส่โค้ด: YUMMY50)</p>
          <button onClick={() => scrollToSection("menu-section")} className="bg-white text-orange-500 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            ดูเมนูเลย
          </button>
        </div>
      </section>

      {/* Contact Section (Placeholder) */}
      <section id="contact-section" className="px-10 py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">📞 ติดต่อเรา</h2>
        <p className="text-gray-600 mb-2">มีปัญหาการสั่งซื้อ หรือต้องการสอบถามข้อมูลเพิ่มเติม?</p>
        <p className="text-orange-500 font-bold text-xl">โทร: 02-XXX-XXXX</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-8">
        <p className="mb-2">🍔 Foodie Online Restaurant</p>
        <p className="text-sm">© 2026 All rights reserved.</p>
      </footer>
    </div>
  );
}
