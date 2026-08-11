import Image from "next/image";

const products = [
  {
    name: "Chanel Luxury Perfume",
    price: "1,990 บาท",
    image: "/images/perfume1.jpg",
  },
  {
    name: "Premium Rose Perfume",
    price: "1,490 บาท",
    image: "/images/perfume2.jpg",
  },
  {
    name: "Classic Fashion Bag",
    price: "2,590 บาท",
    image: "/images/bag1.jpg",
  },
  {
    name: "Elegant Mini Bag",
    price: "1,990 บาท",
    image: "/images/bag2.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff8f6]">

      {/* Header */}
      <header className="flex justify-between items-center px-10 py-5 bg-white shadow">
        <h1 className="text-3xl font-bold text-pink-600">
          LUXE SHOP
        </h1>

        <nav className="space-x-6">
          <a>หน้าแรก</a>
          <a>น้ำหอม</a>
          <a>กระเป๋า</a>
          <a>โปรโมชั่น</a>
        </nav>
      </header>


      {/* Banner */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-16 items-center">

        <div>
          <h2 className="text-6xl font-bold">
            Luxury Perfume
            <br />
            & Fashion Bag
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            ร้านค้าออนไลน์จำหน่ายน้ำหอมและกระเป๋า
            ดีไซน์หรู คุณภาพพรีเมียม
          </p>

          <button className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-full">
            เลือกซื้อสินค้า
          </button>
        </div>


        <div className="relative h-[450px] rounded-3xl overflow-hidden">

          <Image
            src="/images/hero.jpg"
            alt="สินค้าแฟชั่น"
            fill
            className="object-cover"
          />

        </div>

      </section>



      {/* Product */}
      <section className="px-10 py-10">

        <h2 className="text-4xl font-bold text-center mb-10">
          สินค้าแนะนำ
        </h2>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item)=>(
            
            <div
              key={item.name}
              className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden"
            >

              <div className="relative h-72">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

              </div>


              <div className="p-5">

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>


                <p className="text-pink-600 text-xl mt-3 font-bold">
                  {item.price}
                </p>


                <button
                  className="mt-5 w-full bg-black text-white py-3 rounded-full hover:bg-pink-600"
                >
                  เพิ่มลงตะกร้า
                </button>


              </div>

            </div>

          ))}

        </div>

      </section>



      {/* Footer */}
      <footer className="bg-black text-white text-center py-8 mt-10">

        <h2 className="text-2xl font-bold">
          LUXE SHOP
        </h2>

        <p>
          Perfume & Bag Online Store
        </p>

      </footer>


    </main>
  );
}
