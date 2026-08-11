"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Bloom Eau de Parfum",
    category: "น้ำหอม",
    price: "฿1,290",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Velvet Rose",
    category: "น้ำหอม",
    price: "฿1,590",
    image:
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Classic Mini Bag",
    category: "กระเป๋า",
    price: "฿1,890",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Luxury Shoulder Bag",
    category: "กระเป๋า",
    price: "฿2,490",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Home() {
  const [category, setCategory] = useState("ทั้งหมด");
  const [cart, setCart] = useState(0);

  const filteredProducts =
    category === "ทั้งหมด"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2d2723]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#eadfd3] bg-[#faf7f2]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold tracking-[0.2em]">
              LUMIÈRE
            </h1>
            <p className="text-[10px] tracking-[0.3em] text-[#9b8067]">
              PERFUME & BAG
            </p>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm hover:text-[#a47750]">
              หน้าแรก
            </a>
            <a href="#products" className="text-sm hover:text-[#a47750]">
              สินค้า
            </a>
            <a href="#about" className="text-sm hover:text-[#a47750]">
              เกี่ยวกับเรา
            </a>
            <a href="#contact" className="text-sm hover:text-[#a47750]">
              ติดต่อ
            </a>
          </nav>

          <button
            onClick={() => setCart(cart + 1)}
            className="relative rounded-full border border-[#d8c5b3] p-3 transition hover:bg-[#eee3d8]"
          >
            🛍️
            {cart > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8b6040] text-[10px] text-white">
                {cart}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-[#a47750]">
            NEW COLLECTION 2026
          </p>

          <h2 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            เติมเสน่ห์ให้ทุกวัน
            <br />
            <span className="text-[#9b8067]">ในแบบของคุณ</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#74675e]">
            คัดสรรน้ำหอมและกระเป๋าดีไซน์สวย
            สำหรับคนที่ต้องการสร้างสไตล์ที่เป็นตัวเอง
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-full bg-[#352b25] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#5a4638]"
            >
              เลือกซื้อสินค้า
            </a>

            <a
              href="#about"
              className="rounded-full border border-[#cdb9a6] px-7 py-3 text-sm font-medium transition hover:bg-[#eee3d8]"
            >
              ค้นพบแบรนด์
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury perfume"
            width={1200}
            height={900}
            className="h-[500px] w-full object-cover"
            priority
          />

          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur">
            <p className="text-xs tracking-widest text-[#92745b]">
              SIGNATURE SCENT
            </p>
            <p className="mt-1 font-semibold">Bloom Collection</p>
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className="border-y border-[#eadfd3] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-5 py-5">
          {["ทั้งหมด", "น้ำหอม", "กระเป๋า"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-6 py-2.5 text-sm transition ${
                category === item
                  ? "bg-[#352b25] text-white"
                  : "bg-[#f5eee8] text-[#66584e] hover:bg-[#eadfd3]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-[#a47750]">
              OUR PRODUCTS
            </p>
            <h3 className="mt-2 text-3xl font-semibold">
              สินค้าแนะนำ
            </h3>
          </div>

          <p className="hidden text-sm text-[#8a7b70] sm:block">
            คัดสรรมาเพื่อคุณ
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden bg-[#f3eee9]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button
                  onClick={() => setCart(cart + 1)}
                  className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg shadow-md transition hover:bg-[#352b25] hover:text-white"
                  aria-label={`เพิ่ม ${product.name} ลงตะกร้า`}
                >
                  +
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs tracking-wider text-[#a47750]">
                  {product.category}
                </p>

                <h4 className="mt-2 font-semibold">
                  {product.name}
                </h4>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-medium">{product.price}</span>

                  <button
                    onClick={() => setCart(cart + 1)}
                    className="text-xs font-medium text-[#8b6040] hover:underline"
                  >
                    เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROMOTION */}
      <section className="bg-[#352b25] px-5 py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#d9bfa7]">
              SPECIAL OFFER
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              ช้อปวันนี้ รับส่วนลดพิเศษ
            </h3>

            <p className="mt-3 text-sm text-[#d9cec3]">
              เมื่อสั่งซื้อสินค้าครบ ฿2,000 รับส่วนลดทันที 10%
            </p>
          </div>

          <a
            href="#products"
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#352b25] transition hover:bg-[#eadfd3]"
          >
            ช้อปเลย
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-4xl px-5 py-20 text-center"
      >
        <p className="text-xs tracking-[0.3em] text-[#a47750]">
          ABOUT LUMIÈRE
        </p>

        <h3 className="mt-3 text-3xl font-semibold">
          ความหอมและสไตล์ที่สะท้อนตัวคุณ
        </h3>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#74675e]">
          LUMIÈRE ตั้งใจคัดเลือกน้ำหอมและกระเป๋าที่สามารถนำไปใช้ได้
          ในทุกโอกาส ไม่ว่าจะเป็นวันทำงาน วันพิเศษ
          หรือวันที่อยากมอบความพิเศษให้กับตัวเอง
        </p>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-[#eadfd3] bg-[#f5eee8]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h4 className="font-bold tracking-[0.2em]">LUMIÈRE</h4>
            <p className="mt-1 text-xs text-[#87766a]">
              PERFUME & BAG
            </p>
          </div>

          <div className="text-sm text-[#74675e]">
            © 2026 Lumière. All rights reserved.
          </div>

          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-[#8b6040]">
              Instagram
            </a>
            <a href="#" className="hover:text-[#8b6040]">
              Facebook
            </a>
            <a href="#" className="hover:text-[#8b6040]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
