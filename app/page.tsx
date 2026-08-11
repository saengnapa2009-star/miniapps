import Image from "next/image";

const products = [
  {
    name: "Chanel No. 5",
    category: "น้ำหอม",
    price: "฿4,990",
    image: "/products/perfume.jpg",
  },
  {
    name: "Luxury Black Bag",
    category: "กระเป๋า",
    price: "฿2,590",
    image: "/products/bag.jpg",
  },
  {
    name: "Rose Elegant",
    category: "น้ำหอม",
    price: "฿1,890",
    image: "/products/perfume2.jpg",
  },
  {
    name: "Classic Leather Bag",
    category: "กระเป๋า",
    price: "฿3,290",
    image: "/products/bag2.jpg",
  },
  {
    name: "Golden Luxury",
    category: "น้ำหอม",
    price: "฿2,490",
    image: "/products/perfume3.jpg",
  },
  {
    name: "Mini Fashion Bag",
    category: "กระเป๋า",
    price: "฿1,990",
    image: "/products/bag3.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f6] text-[#292421]">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-[0.18em]"
          >
            LUMIÈRE
          </a>

          {/* Menu */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#" className="hover:text-[#a77b52]">
              หน้าแรก
            </a>

            <a href="#perfume" className="hover:text-[#a77b52]">
              น้ำหอม
            </a>

            <a href="#bags" className="hover:text-[#a77b52]">
              กระเป๋า
            </a>

            <a href="#products" className="hover:text-[#a77b52]">
              สินค้า
            </a>

            <a href="#about" className="hover:text-[#a77b52]">
              เกี่ยวกับเรา
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3">

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-[#f3eee9]"
              aria-label="ค้นหา"
            >
              🔍
            </button>

            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-[#f3eee9]"
              aria-label="ตะกร้า"
            >
              🛍️

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
                2
              </span>
            </button>

          </div>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-5 pt-6">

        <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#d8c8ba]">

          {/* ใช้รูปจาก public */}
          <Image
            src="/products/perfume3.jpg"
            alt="Luxury perfume"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Text */}
          <div className="relative z-10 flex min-h-[500px] max-w-xl flex-col justify-center px-8 text-white md:px-16">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80">
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

            <div className="mt-8 flex gap-3">

              <a
                href="#products"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#292421] hover:bg-[#eee7e0]"
              >
                ช้อปสินค้า
              </a>

              <a
                href="#categories"
                className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                ดูคอลเลกชัน
              </a>

            </div>
          </div>
        </div>
      </section>


      {/* ================= CATEGORY ================= */}
      <section
        id="categories"
        className="mx-auto max-w-7xl px-5 py-16"
      >

        <div className="mb-10 text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-[#a77b52]">
            Shop by Category
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            เลือกสิ่งที่ใช่สำหรับคุณ
          </h2>

        </div>


        <div className="grid gap-6 md:grid-cols-2">

          {/* น้ำหอม */}
          <a
            id="perfume"
            href="#products"
            className="group relative h-80 overflow-hidden rounded-3xl"
          >

            <Image
              src="/products/perfume.jpg"
              alt="น้ำหอม"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="50vw"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute bottom-8 left-8 text-white">

              <p className="text-sm tracking-widest">
                COLLECTION
              </p>

              <h3 className="mt-1 text-3xl font-semibold">
                น้ำหอม
              </h3>

              <p className="mt-2 text-sm">
                ค้นหากลิ่นที่เป็นตัวคุณ →
              </p>

            </div>
          </a>


          {/* กระเป๋า */}
          <a
            id="bags"
            href="#products"
            className="group relative h-80 overflow-hidden rounded-3xl"
          >

            <Image
              src="/products/bag.jpg"
              alt="กระเป๋าแฟชั่น"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="50vw"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute bottom-8 left-8 text-white">

              <p className="text-sm tracking-widest">
                COLLECTION
              </p>

              <h3 className="mt-1 text-3xl font-semibold">
                กระเป๋า
              </h3>

              <p className="mt-2 text-sm">
                ค้นหากระเป๋าใบโปรด →
              </p>

            </div>

          </a>

        </div>
      </section>


      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-5 pb-20"
      >

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


        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

          {products.map((product) => (

            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f2eee9]">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />

                {/* Category */}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium">
                  {product.category}
                </span>

                {/* Add button */}
                <button
                  aria-label={`เพิ่ม ${product.name} ลงตะกร้า`}
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-lg transition hover:scale-110"
                >
                  +
                </button>

              </div>


              {/* Product info */}
              <div className="p-4">

                <h3 className="truncate font-medium">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center justify-between">

                  <p className="font-semibold">
                    {product.price}
                  </p>

                  <span className="text-xs text-yellow-600">
                    ★ 4.9
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>
      </section>


      {/* ================= PROMOTION ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-20">

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

            <button className="mt-7 rounded-full bg-[#292421] px-7 py-3 text-sm font-semibold text-white hover:bg-black">
              สมัครสมาชิก
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer
        id="about"
        className="border-t border-black/5 bg-white"
      >

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3">

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

            <h4 className="font-semibold">
              บริการลูกค้า
            </h4>

            <div className="mt-4 space-y-3 text-sm text-black/60">
              <p>วิธีการสั่งซื้อ</p>
              <p>การจัดส่งสินค้า</p>
              <p>การคืนสินค้า</p>
              <p>ติดต่อเรา</p>
            </div>

          </div>


          <div>

            <h4 className="font-semibold">
              ติดตามเรา
            </h4>

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

    </main>
  );
}
