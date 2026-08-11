import Image from "next/image";

const products = [
  {
    id: 1,
    name: "ÉLÉGANCE ROSE",
    category: "น้ำหอม",
    price: "฿1,290",
    image:
      "https://essenzi.com/images/detailed/46/mini-perfumes.webp",
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "MUSK BLOOM",
    category: "น้ำหอม",
    price: "฿990",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=900&auto=format&fit=crop",
    tag: "NEW",
  },
  {
    id: 3,
    name: "LUNA HANDBAG",
    category: "กระเป๋า",
    price: "฿1,590",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop",
    tag: "HOT",
  },
  {
    id: 4,
    name: "CLASSIC MINI BAG",
    category: "กระเป๋า",
    price: "฿1,290",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=900&auto=format&fit=crop",
    tag: "",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#24211f]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f5]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <div className="text-xl font-bold tracking-[0.25em]">
            LUMIÈRE
          </div>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#" className="hover:text-[#a67c52]">หน้าหลัก</a>
            <a href="#perfume" className="hover:text-[#a67c52]">น้ำหอม</a>
            <a href="#bags" className="hover:text-[#a67c52]">กระเป๋า</a>
            <a href="#promotion" className="hover:text-[#a67c52]">โปรโมชั่น</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-black/10 p-2 hover:bg-white">
              🔍
            </button>

            <button className="relative rounded-full border border-black/10 p-2 hover:bg-white">
              🛍️
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#24211f] text-[9px] text-white">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 md:grid-cols-2 lg:px-8 lg:py-16">

        <div>
          <p className="mb-4 text-sm tracking-[0.3em] text-[#a67c52]">
            LUXURY COLLECTION
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            กลิ่นหอม
            <br />
            <span className="font-serif italic font-normal">
              ที่เป็นตัวคุณ
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-black/55">
            คัดสรรน้ำหอมและกระเป๋าดีไซน์เรียบหรู
            สำหรับทุกวันพิเศษของคุณ
            พร้อมส่งตรงถึงบ้าน
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#perfume"
              className="rounded-full bg-[#24211f] px-7 py-3 text-sm text-white transition hover:bg-[#a67c52]"
            >
              ช้อปน้ำหอม
            </a>

            <a
              href="#bags"
              className="rounded-full border border-black/15 px-7 py-3 text-sm transition hover:bg-white"
            >
              ดูกระเป๋า
            </a>
          </div>

          <div className="mt-10 flex gap-8 text-xs text-black/50">
            <div>
              <b className="block text-lg text-black">100%</b>
              สินค้าคัดสรร
            </div>
            <div>
              <b className="block text-lg text-black">24H</b>
              จัดส่งรวดเร็ว
            </div>
            <div>
              <b className="block text-lg text-black">4.9/5</b>
              รีวิวลูกค้า
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#e9e0d7]">
          <Image
            src="https://essenzi.com/images/detailed/46/mini-perfumes.webp"
            alt="Luxury perfume collection"
            width={900}
            height={900}
            className="h-[480px] w-full object-cover md:h-[600px]"
            priority
          />

          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur">
            <p className="text-xs text-black/50">FEATURED COLLECTION</p>
            <p className="mt-1 font-medium">Luxury Fragrance</p>
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          {[
            ["🌸", "น้ำหอมผู้หญิง"],
            ["🖤", "น้ำหอมผู้ชาย"],
            ["👜", "กระเป๋าแฟชั่น"],
            ["🎁", "ของขวัญ"],
          ].map(([icon, title]) => (
            <div
              key={title}
              className="cursor-pointer border-r border-black/5 px-5 py-8 text-center transition hover:bg-[#faf8f5]"
            >
              <div className="text-2xl">{icon}</div>
              <p className="mt-3 text-sm font-medium">{title}</p>
            </div>
          ))}

        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="perfume"
        className="mx-auto max-w-7xl px-5 py-16 lg:px-8"
      >
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#a67c52]">
              OUR COLLECTION
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              สินค้าแนะนำ
            </h2>
          </div>

          <button className="hidden text-sm underline underline-offset-4 md:block">
            ดูสินค้าทั้งหมด →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#eee8e1]">

                {product.tag && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-[10px] font-medium">
                    {product.tag}
                  </span>
                )}

                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button className="absolute bottom-3 left-3 right-3 translate-y-3 rounded-full bg-[#24211f] py-3 text-xs text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  + เพิ่มลงตะกร้า
                </button>
              </div>

              <div className="pt-4">
                <p className="text-xs text-black/45">
                  {product.category}
                </p>

                <h3 className="mt-1 text-sm font-medium">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm font-semibold">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROMOTION */}
      <section
        id="promotion"
        className="mx-auto max-w-7xl px-5 pb-16 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-[#292522] px-6 py-14 text-white md:px-12">

          <div className="relative z-10 max-w-xl">
            <p className="text-xs tracking-[0.3em] text-[#d6b98c]">
              SPECIAL OFFER
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              ซื้อ 2 ชิ้น
              <br />
              <span className="font-serif italic font-normal">
                รับส่วนลดพิเศษ
              </span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-white/60">
              เลือกน้ำหอมหรือกระเป๋าที่คุณชื่นชอบ
              รับโปรโมชั่นพิเศษสำหรับออเดอร์แรก
            </p>

            <button className="mt-7 rounded-full bg-white px-7 py-3 text-sm text-[#292522] hover:bg-[#e8d9c7]">
              ช้อปเลย
            </button>
          </div>

          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#a67c52]/30 blur-3xl" />
          <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-[#d6b98c]/20 blur-3xl" />
        </div>
      </section>

      {/* BAG SECTION */}
      <section
        id="bags"
        className="border-t border-black/5 bg-white px-5 py-16"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs tracking-[0.3em] text-[#a67c52]">
            ACCESSORIES
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            กระเป๋าที่เข้ากับทุกลุค
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-black/50">
            ดีไซน์เรียบหรู ใช้งานได้ทุกวัน
            เพิ่มความโดดเด่นให้กับสไตล์ของคุณ
          </p>

          <button className="mt-6 rounded-full border border-black/15 px-7 py-3 text-sm hover:bg-[#faf8f5]">
            สำรวจคอลเลกชัน
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#24211f] px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

          <div>
            <h3 className="text-lg font-bold tracking-[0.25em]">
              LUMIÈRE
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
              Luxury perfume & fashion bags
              สำหรับคนที่ชื่นชอบความเรียบหรู
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium">เมนู</h4>
            <div className="mt-4 space-y-3 text-sm text-white/50">
              <p>หน้าหลัก</p>
              <p>น้ำหอม</p>
              <p>กระเป๋า</p>
              <p>โปรโมชั่น</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium">ติดต่อเรา</h4>
            <div className="mt-4 space-y-3 text-sm text-white/50">
              <p>LINE: @lumiere</p>
              <p>Instagram: @lumiere.shop</p>
              <p>Email: hello@lumiere.com</p>
            </div>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/30">
          © 2026 LUMIÈRE. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
