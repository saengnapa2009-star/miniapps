"use client"; // จำเป็นต้องใส่เพื่อให้ใช้ useState และฟังก์ชันคลิกบน Next.js (App Router) ได้

import React, { useState } from "react";
import Image from "next/image";

const foods = [
  {
    id: 1,
    name: "เบอร์เกอร์เนื้อพรีเมียม",
    price: 129,
    image: "/food/burger.jpg",
  },
  {
    id: 2,
    name: "พิซซ่าชีสเยิ้ม",
    price: 199,
    image: "/food/pizza.jpg",
  },
  {
    id: 3,
    name: "ซูชิญี่ปุ่น",
    price: 159,
    image: "/food/sushi.jpg",
  },
];

export default function Home() {
  // สร้าง State สำหรับเก็บข้อมูลตะกร้าสินค้า
  const [cart, setCart] = useState([]);

  // ฟังก์ชันเพิ่มสินค้าลงตะกร้า
  const addToCart = (food) => {
    setCart([...cart, food]);
    alert(`เพิ่ม "${food.name}" ลงในตะกร้าเรียบร้อยแล้ว!`);
  };

  // ฟังก์ชันจำลองการกดเมนู
  const handleMenuClick = (menuName) => {
    alert(`กำลังไปที่หน้า: ${menuName}`);
  };

  // ฟังก์ชันเลื่อนหน้าจอไปที่ส่วนของเมนู
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ฟังก์ชันกดดูตะกร้า
  const viewCart = () => {
    if (cart.length === 0) {
      alert("ตะกร้าสินค้าของคุณยังว่างเปล่า");
    } else {
      const totalPrice = cart.reduce((total, item) => total + item.price, 0);
      alert(`คุณมีสินค้า ${cart.length} รายการในตะกร้า\nยอดรวม: ${totalPrice} บาท`);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-orange-500 cursor-pointer">
          🍔 Foodie
        </h1>

        <div className="flex gap-6 text-gray-700 font-medium">
          <button onClick={() => handleMenuClick("หน้าแรก")} className="hover:text-orange-500 transition">หน้าแรก</button>
          <button onClick={scrollToMenu} className="hover:text-orange-500 transition">เมนูอาหาร</button>
          <button onClick={() => handleMenuClick("โปรโมชั่น")} className="hover:text-orange-500 transition">โปรโมชั่น</button>
          <button onClick={() => handleMenuClick("ติดต่อเรา")} className="hover:text-orange-500 transition">ติดต่อเรา</button>
        </div>

        <button 
          onClick={viewCart}
          className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition flex items-center gap-2"
        >
          🛒 ตะกร้า 
          {cart.length > 0 && (
            <span className="bg-white text-orange-500 rounded-full px-2 py-0.5 text-sm font-bold">
              {cart.length}
            </span>
          )}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-16 items-center">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            อาหารอร่อย
            <br />
            ส่งตรงถึงบ้านคุณ
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            เปรมมี่ สั่งอาหารออนไลน์ง่าย ๆ 
            สดใหม่ทุกวัน พร้อมบริการจัดส่งรวดเร็ว
          </p>

          <button 
            onClick={scrollToMenu}
            className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition shadow-md hover:shadow-lg active:scale-95"
          >
            สั่งอาหารเลย
          </button>
        </div>

        <Image
          src="/food/banner.jpg"
          alt="food banner"
          width={600}
          height={400}
          className="rounded-3xl shadow-lg object-cover w-full h-auto"
        />
      </section>

      {/* Menu Section */}
      {/* เพิ่ม id="menu-section" เพื่อให้ปุ่มเลื่อนหน้าจอมาหาได้ถูกต้อง */}
      <section id="menu-section" className="px-10 pb-20 pt-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          🍽 เมนูยอดนิยม
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-5 flex flex-col"
            >
              <Image
                src={food.image}
                alt={food.name}
                width={350}
                height={250}
                className="rounded-2xl w-full h-56 object-cover"
              />

              <h3 className="text-xl font-bold mt-4 text-gray-800">
                {food.name}
              </h3>

              <p className="text-orange-500 font-bold mt-2 text-lg">
                {food.price} บาท
              </p>

              {/* ดันปุ่มไปอยู่ด้านล่างสุดเสมอ */}
              <div className="mt-auto pt-4">
                <button
                  onClick={() => addToCart(food)}
                  className="w-full bg-orange-100 text-orange-600 font-semibold py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition active:scale-95"
                >
                  เพิ่มลงตะกร้า
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© 2026 Foodie Online Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}
