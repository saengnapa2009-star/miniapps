import Image from "next/image";

const products = [
  {
    name: "Gucci Bloom",
    category: "น้ำหอม",
    price: "฿4,990",
    image: "/products/gucci1.webp",
  },
  {
    name: "Gucci Bloom Floral",
    category: "น้ำหอม",
    price: "฿3,990",
    image: "/products/gucci2.jpg",
  },
  {
    name: "Gucci Bloom Eau de Toilette",
    category: "น้ำหอม",
    price: "฿4,290",
    image: "/products/gucci3.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f6]">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-[0.2em]">
            LUMIÈRE
          </h1>

          <nav className="hidden gap-8 md:flex">
            <a href="#">หน้าแรก</a>
            <a href="#products">น้ำหอม</a>
            <a href="#products">กระเป๋า</a>
            <a href="#products">สินค้า</a>
          </nav>

          <div className="flex gap-3">
            <button className="h-10 w-10 rounded-full border">
              🔍
            </button>

            <button className="h-10 w-10 rounded-full border">
              🛍️
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="relative h-[500px] overflow-hidden rounded-[30px]">

          <Image
            src="/products/gucci1.webp"
            alt="Gucci Bloom"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 flex h-full items-center px-10 text-white md:px-16">

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em]">
                Gucci Bloom Collection
              </p>

              <h2 className="text-5xl font-bold md:text-6xl">
                GUCCI
                <br />
                BLOOM
              </h2>

              <p className="mt-5 max-w-md">
                ค้นพบเสน่ห์แห่งกลิ่นหอมจาก Gucci Bloom
                น้ำหอมที่ถ่ายทอดความเป็นผู้หญิงและความหรูหรา
              </p>

              <button className="mt-7 rounded-full bg-white px-8 py-3 font-semibold text-black">
                ช้อปเลย
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Category */}
      <section className="mx-auto max-w-7xl px-5 py-12">

        <div className="mb-8 text-center">
          <p className="text-sm tracking-[0.25em] text-[#a77b52]">
            COLLECTION
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            เลือกสิ่งที่ใช่สำหรับคุณ
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Perfume */}
          <div className="relative h-72 overflow-hidden rounded-3xl">

            <Image
              src="/products/gucci2.jpg"
              alt="Gucci Bloom Perfume"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-7 left-7 text-white">
              <p>COLLECTION</p>

              <h3 className="text-3xl font-bold">
                น้ำหอม
              </h3>

              <p className="mt-2">
                ค้นหากลิ่นที่เป็นตัวคุณ →
              </p>
            </div>

          </div>

          {/* Gucci Bloom */}
          <div className="relative h-72 overflow-hidden rounded-3xl">

            <Image
              src="/products/gucci3.jpg"
              alt="Gucci Bloom"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute bottom-7 left-7 text-white">
              <p>NEW ARRIVAL</p>

              <h3 className="text-3xl font-bold">
                Gucci Bloom
              </h3>

              <p className="mt-2">
                คอลเลกชันใหม่ →
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-5 pb-20"
      >

        <div className="mb-8">
          <p className="text-sm tracking-[0.25em] text-[#a77b52]">
            BEST SELLERS
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            สินค้าแนะนำ
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              {/* รูปสินค้า */}
              <div className="relative aspect-[4/5] bg-[#eee]">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

              </div>

              {/* รายละเอียด */}
              <div className="p-4">

                <span className="text-xs text-[#a77b52]">
                  {product.category}
                </span>

                <h3 className="mt-1 font-semibold">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center justify-between">

                  <span className="font-bold">
                    {product.price}
                  </span>

                  <button className="rounded-full bg-black px-4 py-2 text-sm text-white">
                    เพิ่มลงตะกร้า
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-10 text-center">
        <h2 className="font-bold tracking-[0.2em]">
          LUMIÈRE
        </h2>

        <p className="mt-3 text-sm text-gray-500">
          Luxury Perfume & Fashion Bag
        </p>
      </footer>

    </main>
  );
}
