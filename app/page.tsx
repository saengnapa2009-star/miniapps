"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen relative font-sans">
      
      {/* แถบ Top Bar สีดำด้านบนสุด */}
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
          {/* ไอคอนโซเชียลแบบจำลอง */}
          <a href="#" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition">f</a>
          <a href="#" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition">t</a>
          <a href="#" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition">ig</a>
          <a href="#" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition">yt</a>
        </div>
      </div>

      {/* Navigation Bar (แถบเมนูโปร่งแสงทับรูป) */}
      <nav className="absolute top-10 w-full z-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-4 bg-gradient-to-b from-black/80 to-transparent">
        {/* โลโก้ */}
        <div className="text-3xl md:text-4xl font-serif font-bold text-white tracking-widest mb-4 md:mb-0 drop-shadow-md">
          FOODIE<span className="text-red-600">SHOP</span>
        </div>

        {/* ลิงก์เมนู */}
        <div className="hidden lg:flex items-center gap-6 text-white text-sm font-semibold tracking-wide">
          <a href="#" className="hover:text-red-400 transition">ABOUT US</a>
          <a href="#" className="hover:text-red-400 transition">MENU ˅</a>
          <a href="#" className="hover:text-red-400 transition">PROMOTION</a>
          <a href="#" className="hover:text-red-400 transition">CATERING ˅</a>
          <a href="#" className="hover:text-red-400 transition">BLOG</a>
        </div>

        {/* ช่อง Search และปุ่ม Contact */}
        <div className="flex items-center gap-4">
          <div className="bg-white flex items-center px-2 py-1 rounded-sm shadow-inner">
            <input 
              type="text" 
              placeholder="Search menu..." 
              className="outline-none text-gray-700 text-sm px-2 py-1 w-32 md:w-48 bg-transparent" 
            />
          </div>
          <button className="bg-red-600 text-white px-6 py-2 font-bold hover:bg-red-700 transition shadow-md">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Section (พื้นหลังรูปอาหารเต็มจอ) */}
      <div className="relative h-screen w-full -mt-10 md:-mt-12">
        {/* รูปภาพพื้นหลัง */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        
        {/* เลเยอร์สีดำโปร่งแสงเพื่อให้ตัวหนังสืออ่านง่ายขึ้น */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* ข้อความขนาดใหญ่ด้านซ้าย (เหมือน WE ARE EXPERT) */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight drop-shadow-xl tracking-tight">
            WE ARE <br/> DELICIOUS
          </h1>
          <div className="flex items-center mt-6">
            {/* เส้นขีดสีแดงด้านหน้าข้อความ */}
            <div className="w-1.5 h-16 md:h-20 bg-red-600 mr-4 md:mr-6"></div>
            <p className="text-xl md:text-3xl text-gray-200 font-light drop-shadow-md">
              in Premium Ingredients & Taste <br/> for everyday meals
            </p>
          </div>
        </div>

        {/* ปุ่มแชทลอยตัวมุมขวาล่าง (เหมือนไอคอนแชทสีแดง) */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
          <div className="bg-white text-gray-800 text-sm font-semibold py-2 px-4 rounded-full shadow-lg hidden md:block">
            Contact us
          </div>
          <button className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition hover:scale-105">
            <span className="text-white text-2xl">💬</span>
          </button>
        </div>
      </div>

    </div>
  );
}
