"use client";

import React, { useState } from "react";

const foods = [
  { id: 1, name: "เบอร์เกอร์เนื้อพรีเมียม", price: 129, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "พิซซ่าชีสเยิ้ม", price: 199, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "ซูชิญี่ปุ่น", price: 159, image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80" },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // กรองสินค้าตามคำค้นหา
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: any) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      return exist ? prev.map((i) => i.id === product.id ? {...i, quantity: i.quantity + 1} : i) : [...prev, {...product, quantity: 1}];
    });
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((i) => i.id !== id));
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleConfirmOrder = () => {
    setIsSuccess(true);
    setTimeout(() => { setIsSuccess(false); setIsCheckoutOpen(false); setIsCartModalOpen(false); setCart([]); }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="absolute top-10 w-full z-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-3xl md:text-4xl font-bold text-white tracking-widest">FOODIE<span className="text-red-600">SHOP</span></div>
        
        {/* เพิ่มระบบค้นหาที่นี่ */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="bg-white flex items-center px-3 py-1.5 rounded-lg shadow-inner">
            <input 
              type="text" 
              placeholder="ค้นหาเมนู..." 
              className="outline-none text-sm w-32 md:w-48 bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="text-gray-400">🔍</span>
          </div>
          <button 
            onClick={() => setIsCartModalOpen(true)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
          >
            🛒 ตะกร้า ({totalItems})
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[85vh] w-full bg-cover bg-center flex items-center px-6 md:px-24" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white">WE ARE <br/> DELICIOUS</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-8 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <div key={food.id} className="bg-white rounded-xl shadow-md overflow-hidden p-4">
                <img src={food.image} alt={food.name} className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-lg font-bold mt-3">{food.name}</h3>
                <p className="text-orange-500 font-bold text-xl">฿{food.price}</p>
                <button onClick={() => addToCart(food)} className="w-full bg-orange-500 text-white py-2 mt-3 rounded-lg hover:bg-orange-600 transition">ใส่ตะกร้า</button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">ไม่พบเมนูที่คุณค้นหา</p>
          )}
        </div>
      </main>

      {/* Modal และระบบอื่น ๆ คงเดิมไว้ตามโค้ดก่อนหน้าได้เลยจ้า */}
      {/* (เพื่อความสั้นกระชับ สามารถนำ Modal จากโค้ดก่อนมาใส่เพิ่มต่อท้ายได้เลยนะจ๊ะ) */}
    </div>
  );
}
