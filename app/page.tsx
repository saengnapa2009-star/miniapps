```tsx
"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Chanel Classic Perfume",
    category: "น้ำหอม",
    price: "฿3,990",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Luxury Rose Perfume",
    category: "น้ำหอม",
    price: "฿2,590",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Elegant Leather Bag",
    category: "กระเป๋า",
    price: "฿4,590",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Classic Women's Bag",
    category: "กระเป๋า",
    price: "฿3,290",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  const [category, setCategory] = useState("ทั้งหมด");

  const filteredProducts =
    category === "ทั้งหมด"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-zinc-900">

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold tracking-[0.25em]">
              LUMIÈRE
            </h1>
            <p className="text-[10px] tracking-[0.35em] text-zinc-500">
              PERFUME & BAG
            </p>
          </div>

          {/* Menu */}
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="hover:text-amber-700">
              หน้าแรก
            </a>
            <a href="#perfume" className="hover:text-amber-700">
              น้ำหอม
            </a>
            <a href="#bag" className="hover:text-amber-700">
              กระเป๋า
            </a>
            <a href="#promotion" className="hover:text-amber-700">
              โปรโมชั่น
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-xl hover:scale-110 transition">
              🔍
            </button>
            <button className="text-xl hover:scale-110 transition">
              ♡
            </button>
            <button className="text-xl hover:scale-110 transition">
              🛍️
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#e9e0d5]">

          <div className="grid min-h-[520px] items-center md:grid-cols-2">

            {/* Text */}
            <div className="z-10 px-8 py-16 md:px-16">
              <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-amber-800">
                NEW COLLECTION 2026
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
                Elegance
                <br />
                <span className="font-light italic">
                  in every detail.
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-zinc-600">
                ค้นพบคอลเลกชันน้ำหอมและกระเป๋าสุดหรู
                ที่ออกแบบมาเพื่อเติมเต็มสไตล์และความมั่นใจของคุณ
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
                >
                  ช้อปสินค้า
                </a>

                <a
                  href="#promotion"
                  className="rounded-full border border-black px-7 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
                >
                  ดูโปรโมชั่น
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[350px] md:h-full">
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85"
                alt="Luxury perfume"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Category */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber-700">
            SHOP BY CATEGORY
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            เลือกช้อปตามหมวดหมู่
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {/* Perfume */}
          <a
            href="#products"
            onClick={() => setCategory("น้ำหอม")}
            className="group relative h-72 overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=80"
              alt="Perfume"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-sm tracking-widest">COLLECTION</p>
              <h3 className="mt-1 text-3xl font-semibold">
                น้ำหอม
              </h3>
            </div>
          </a>

          {/* Bag */}
          <a
            href="#products"
            onClick={() => setCategory("กระเป๋า")}
            className="group relative h-72 overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury bag"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-sm tracking-widest">COLLECTION</p>
              <h3 className="mt-1 text-3xl font-semibold">
                กระเป๋า
              </h3>
            </div>
          </a>

        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-5 py-10"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-amber-700">
              OUR PRODUCTS
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              สินค้าแนะนำ
            </h2>
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            {["ทั้งหมด", "น้ำหอม", "กระเป๋า"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  category === item
                    ? "bg-black text-white"
                    : "bg-white hover:bg-zinc-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white"
            >

              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-zinc-100">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg shadow-sm">
                  ♡
                </button>

                <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-[10px] text-white">
                  NEW
                </span>
              </div>

              {/* Product Information */}
              <div className="p-4">

                <p className="text-xs text-zinc-500">
                  {product.category}
                </p>

                <h3 className="mt-1 line-clamp-1 font-medium">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between">

                  <p className="font-semibold">
                    {product.price}
                  </p>

                  <button className="rounded-full bg-zinc-900 px-3 py-2 text-xs text-white transition hover:bg-amber-700">
                    เพิ่มลงตะกร้า
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Promotion */}
      <section
        id="promotion"
        className="mx-auto max-w-7xl px-5 py-16"
      >
        <div className="overflow-hidden rounded-3xl bg-black text-white">

          <div className="grid items-center md:grid-cols-2">

            <div className="px-8 py-14 md:px-14">
              <p className="text-sm tracking-[0.3em] text-amber-400">
                SPECIAL OFFER
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                ลดสูงสุด 30%
              </h2>

              <p className="mt-4 leading-7 text-zinc-300">
                โปรโมชั่นพิเศษสำหรับลูกค้าใหม่
                เมื่อสั่งซื้อสินค้าครั้งแรก
              </p>

              <button className="mt-7 rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-zinc-200">
                ช้อปเลย
              </button>
            </div>

            <div className="h-80">
              <img
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury shopping"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 md:grid-cols-3">

          <div className="text-center">
            <div className="text-3xl">🚚</div>
            <h3 className="mt-3 font-semibold">
              จัดส่งรวดเร็ว
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              จัดส่งทั่วประเทศ
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl">✨</div>
            <h3 className="mt-3 font-semibold">
              สินค้าคุณภาพ
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              คัดสรรสินค้าอย่างพิถีพิถัน
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl">🔒</div>
            <h3 className="mt-3 font-semibold">
              ชำระเงินปลอดภัย
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              ระบบชำระเงินที่ปลอดภัย
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] px-5 py-12 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-bold tracking-[0.25em]">
              LUMIÈRE
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              ร้านค้าออนไลน์สำหรับน้ำหอมและกระเป๋า
              สไตล์เรียบหรู เหมาะสำหรับทุกโอกาส
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              เมนู
            </h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p>หน้าแรก</p>
              <p>น้ำหอม</p>
              <p>กระเป๋า</p>
              <p>โปรโมชั่น</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              ติดต่อเรา
            </h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p>📞 099-999-9999</p>
              <p>✉️ hello@lumiere.com</p>
              <p>📍 Sukhothai, Thailand</p>
            </div>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          © 2026 LUMIÈRE. All rights reserved.
        </div>

      </footer>

    </div>
  );
}
```
