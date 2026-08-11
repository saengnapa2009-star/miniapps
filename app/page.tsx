import Image from "next/image";
import Link from "next/link";

// สมมติข้อมูลสินค้าสำหรับแสดงผล
const FEATURED_PERFUMES = [
  {
    id: "1",
    name: "Velvet Midnight",
    category: "Woody & Amber",
    notes: "Bergamot • Cedarwood • Vanilla",
    price: 490,
    size: "10 ml / 0.34 fl.oz",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Soleil de Rose",
    category: "Floral & Fresh",
    notes: "Damask Rose • Peony • Musk",
    price: 450,
    size: "10 ml / 0.34 fl.oz",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    badge: "New",
  },
  {
    id: "3",
    name: "Citrus Horizon",
    category: "Citrus & Aromatic",
    notes: "Mandarin • Basil • Vetiver",
    price: 420,
    size: "10 ml / 0.34 fl.oz",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
    badge: null,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-serif tracking-widest uppercase font-semibold">
            AURA <span className="text-xs font-sans tracking-normal font-normal text-amber-700 dark:text-amber-400">POCKET</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="#collection" className="transition-colors hover:text-amber-700 dark:hover:text-amber-400">
              คอลเลกชัน
            </Link>
            <Link href="#scent-finder" className="transition-colors hover:text-amber-700 dark:hover:text-amber-400">
              ค้นหากลิ่นที่ใช่
            </Link>
            <Link href="#about" className="transition-colors hover:text-amber-700 dark:hover:text-amber-400">
              เกี่ยวกับเรา
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="rounded-full p-2 hover:bg-stone-200/50 dark:hover:bg-zinc-800"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button
              aria-label="Cart"
              className="relative rounded-full p-2 hover:bg-stone-200/50 dark:hover:bg-zinc-800"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.25 10.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Nd12 10.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
              </svg>
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 2. Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 lg:py-32">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
            <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
              <span className="mb-3 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold tracking-wider text-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
                PORTABLE LUXURY FRAGRANCE
              </span>
              <h1 className="font-serif text-4xl font-light tracking-tight text-stone-900 dark:text-white sm:text-6xl">
                เสน่ห์ความหอมพกพา <br />
                <span className="font-italic text-amber-700 dark:text-amber-400">ติดทนตลอดวัน</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-stone-600 dark:text-zinc-400">
                น้ำหอมเกรด Extrait de Parfum ในขนาด 10ml ดีไซน์เรียบหรู ป้องกันการรั่วซึม เหมาะสำหรับพกในกระเป๋าเดินทางหรือกระเป๋าสะพายใบโปรดของคุณ
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#collection"
                  className="rounded-full bg-stone-900 px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-stone-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                >
                  เลือกชมกลิ่นทั้งหมด
                </Link>
                <Link
                  href="#scent-finder"
                  className="rounded-full border border-stone-300 px-8 py-3.5 text-sm font-medium transition-colors hover:bg-stone-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
                >
                  แบบทดสอบค้นหากลิ่น
                </Link>
              </div>
            </div>

            {/* Hero Image / Visual showcase */}
            <div className="relative h-[380px] w-full max-w-md overflow-hidden rounded-2xl bg-stone-200 shadow-2xl sm:h-[480px] dark:bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop"
                alt="Aura Pocket Perfume Bottle"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/80 p-4 backdrop-blur-md dark:bg-zinc-900/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  Pocket Edition
                </p>
                <p className="text-sm font-medium text-stone-900 dark:text-zinc-100">
                  10 ml • พกพาง่าย ผ่านมาตรฐานนำขึ้นเครื่องบิน (TSA Approved)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Value Proposition Highlights */}
        <section className="border-y border-stone-200 bg-stone-100/50 py-12 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                ✨
              </div>
              <div>
                <h3 className="font-semibold">ความเข้มข้นสูงสุด (Extrait)</h3>
                <p className="mt-1 text-sm text-stone-600 dark:text-zinc-400">
                  หัวน้ำหอมนำเข้าจากฝรั่งเศส ติดทนยาวนาน 8-12 ชั่วโมง
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                👜
              </div>
              <div>
                <h3 className="font-semibold">Compact & Leak-Proof</h3>
                <p className="mt-1 text-sm text-stone-600 dark:text-zinc-400">
                  ขวดแก้วหนาพิเศษพร้อมหัวสเปรย์แรงดันสูง ไม่รั่วซึมในกระเป๋า
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                🌿
              </div>
              <div>
                <h3 className="font-semibold">Cruelty-Free & Safe</h3>
                <p className="mt-1 text-sm text-stone-600 dark:text-zinc-400">
                  ปราศจากสารพาราเบน ไม่ทดลองกับสัตว์ ปลอดภัยต่อผิวสัมผัส
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Product Catalog Grid */}
        <section id="collection" className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                OUR COLLECTION
              </span>
              <h2 className="mt-1 font-serif text-3xl font-light text-stone-900 dark:text-white">
                น้ำหอมขนาดพกพายอดนิยม
              </h2>
            </div>
            <Link
              href="#all"
              className="text-sm font-medium text-amber-700 underline underline-offset-4 hover:text-amber-800 dark:text-amber-400"
            >
              ดูทั้งหมด ({FEATURED_PERFUMES.length}) →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PERFUMES.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-stone-200/80 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                {/* Badge */}
                {item.badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-stone-900 px-3 py-1 text-[10px] font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
                    {item.badge}
                  </span>
                )}

                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden bg-stone-100 dark:bg-zinc-800">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-zinc-400">
                      <span>{item.category}</span>
                      <span>★ {item.rating}</span>
                    </div>
                    <h3 className="mt-1 font-serif text-xl font-medium text-stone-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-stone-500 dark:text-zinc-400">
                      <strong>Notes:</strong> {item.notes}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4 dark:border-zinc-800">
                    <div>
                      <span className="text-xs text-stone-400">{item.size}</span>
                      <p className="text-lg font-semibold text-stone-900 dark:text-white">
                        ฿{item.price.toLocaleString()}
                      </p>
                    </div>
                    <button className="rounded-full bg-amber-700 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500">
                      + เพิ่มลงตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Scent Quiz CTA Banner */}
        <section id="scent-finder" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-stone-900 px-8 py-16 text-center text-white dark:bg-zinc-900 lg:px-16">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-serif text-3xl font-light sm:text-4xl">
                ไม่แน่ใจว่ากลิ่นไหนเหมาะกับคุณ?
              </h2>
              <p className="mt-4 text-sm text-stone-300">
                ตอบคำถามสั้นๆ 3 ข้อ เพื่อให้ระบบช่วยจับคู่กลิ่นน้ำหอมที่สะท้อนสไตล์และตัวตนของคุณได้สมบูรณ์แบบที่สุด
              </p>
              <button className="mt-8 rounded-full bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-amber-500">
                เริ่มทำแบบทดสอบกลิ่น (1 นาที)
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-100 py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row text-xs text-stone-500 dark:text-zinc-500">
          <p>© 2026 AURA POCKET PERFUME. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:underline">นโยบายความเป็นส่วนตัว</Link>
            <Link href="#" className="hover:underline">เงื่อนไขการบริการ</Link>
            <Link href="#" className="hover:underline">ติดต่อเรา</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
