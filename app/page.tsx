import Image from "next/image";

const products = [
  {
    name: "Chanel No. 5",
    category: "น้ำหอม",
    price: "฿4,990",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxury Black Bag",
    category: "กระเป๋า",
    price: "฿2,590",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rose Elegant",
    category: "น้ำหอม",
    price: "฿1,890",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Classic Leather Bag",
    category: "กระเป๋า",
    price: "฿3,290",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f6] text-[#292421]">

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <div className="text-2xl font-bold tracking-[0.15em]">
            LUMIÈRE
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="transition hover:text-[#a77b52]">
              หน้าแรก
            </a>
            <a href="#perfume" className="transition hover:text-[#a77b52]">
              น้ำหอม
            </a>
            <a href="#bags" className="transition hover:text-[#a77b52]">
              กระเป๋า
            </a>
            <a href="#products" className="transition hover:text-[#a77b52]">
              สินค้า
            </a>
            <a href="#about" className="transition hover:text-[#a77b52]">
              เกี่ยวกับเรา
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="ค้นหา"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:bg-[#f3eee9]"
            >
              🔍
            </button>

            <button
              aria-label="ตะกร้าสินค้า"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:bg-[#f3eee9]"
            >
              🛍️
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#292421] text-[10px] text-white">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
        <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#e9dfd5]">

          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85"
            alt="Luxury fashion"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

          <div className="relative z-10 flex min-h-[500px] max-w-xl flex-col justify-center px-8 py-16 text-white md:px-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80">
              New Collection 2026
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Luxury
              <br />
              In Every Detail
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/85">
              เติมเต็มทุกวันของคุณด้วยน้ำหอมและกระเป๋าดีไซน์หรู
              คัดสรรสินค้าเพื่อคนที่ชื่นชอบความเรียบง่ายและมีสไตล์
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#292421] transition hover:bg-[#eee7e0]"
              >
                ช้อปสินค้า
              </a>

              <a
                href="#categories"
                className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                ดูคอลเลกชัน
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#a77b52]">
            Shop by Category
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            เลือกสิ่งที่ใช่สำหรับคุณ
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <a
            id="perfume"
            href="#products"
            className="group relative h-72 overflow-hidden rounded-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80"
              alt="น้ำหอม"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="50vw"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-sm tracking-widest">COLLECTION</p>
              <h3 className="mt-1 text-3xl font-semibold">น้ำหอม</h3>
              <p className="mt-2 text-sm">ค้นหากลิ่นที่เป็นตัวคุณ →</p>
            </div>
          </a>

          <a
            id="bags"
            href="#products"
            className="group relative h-72 overflow-hidden rounded-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=80"
              alt="กระเป๋าแฟชั่น"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="50vw"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-sm tracking-widest">COLLECTION</p>
              <h3 className="mt-1 text-3xl font-semibold">กระเป๋า</h3>
              <p className="mt-2 text-sm">ค้นหากระเป๋าใบโปรด →</p>
            </div>
          </a>

        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#a77b52]">
              Best Sellers
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              สินค้าแนะนำ
            </h2>
          </div>

          <button className="hidden text-sm font-medium underline underline-offset-4 sm:block">
            ดูสินค้าทั้งหมด
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f2eee9]">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium">
                  {product.category}
                </span>

                <button
                  aria-label={`เพิ่ม ${product.name} ลงตะกร้า`}
                  className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  +
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>

                <div className="mt-2 flex items-center justify-between">
                  <p className="font-semibold">{product.price}</p>

                  <span className="text-xs text-yellow-600">
                    ★ 4.9
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#d8c5b4] p-8 md:p-14">

          <div className="relative z-10 max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              Special Offer
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              ลดสูงสุด 20%
              <br />
              สำหรับสมาชิกใหม่
            </h2>

            <p className="mt-4 text-sm leading-6 text-black/65">
              สมัครสมาชิกวันนี้ รับส่วนลดสำหรับการสั่งซื้อครั้งแรก
              พร้อมสิทธิพิเศษและข่าวสารคอลเลกชันใหม่
            </p>

            <button className="mt-7 rounded-full bg-[#292421] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black">
              สมัครสมาชิก
            </button>
          </div>

          <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full bg-white/20" />
          <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-white/20" />
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 lg:px-8">

          <div>
            <h3 className="text-xl font-bold tracking-[0.15em]">
              LUMIÈRE
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-black/55">
              ร้านค้าออนไลน์สำหรับน้ำหอมและกระเป๋าแฟชั่น
              คัดสรรสินค้าคุณภาพเพื่อสร้างสไตล์ที่เป็นตัวคุณ
            </p>
          </div>

          <div>
            <h4 className="font-semibold">บริการลูกค้า</h4>

            <div className="mt-4 space-y-3 text-sm text-black/60">
              <p>วิธีการสั่งซื้อ</p>
              <p>การจัดส่งสินค้า</p>
              <p>การคืนสินค้า</p>
              <p>ติดต่อเรา</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">ติดตามเรา</h4>

            <div className="mt-4 flex gap-3">
              <button className="h-10 w-10 rounded-full bg-[#f3eee9]">
                IG
              </button>

              <button className="h-10 w-10 rounded-full bg-[#f3eee9]">
                FB
              </button>

              <button className="h-10 w-10 rounded-full bg-[#f3eee9]">
                TT
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-black/5 py-5 text-center text-xs text-black/40">
          © 2026 LUMIÈRE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
