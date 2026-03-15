import ProductDetails from "./ProductDetails";
import bgimg from "../assets/bg-e-comm.png";

function Home() {
  return (
    <>
      <div className="h-[80vh] ">
        <img
          className=" h-full  object-cover w-full"
          src={bgimg}
          alt="hero image"
        />
      </div>

      {/* Key Features */}

      <div className=" justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-slate-50 text-center py-5">
        <div>
          🚚
          <h3 className="font-semibold">Free Delivery</h3>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>

        <div>
          ⏰<h3 className="font-semibold">Support 24/7</h3>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>

        <div>
          🛡️
          <h3 className="font-semibold">100% Authentic</h3>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/*   Home Products  */}
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold py-3">Inspiration Collection</h2>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
        <img
          src="https://www.ikea.com/in/en/images/products/blidvaeder-table-lamp-off-white-ceramic-beige__1059594_pe849715_s5.jpg?f=xl"
          className="rounded-tl-[80px] rounded-br-[80px]"
        />
        <img
          src="https://luxebook.in/wp-content/uploads/2022/11/download.png"
          className="rounded-lg"
        />
        <img
          src="https://luxebook.in/wp-content/uploads/2022/11/MW75S2_Hero_800x800_61a84578-4026-4bc0-8724-c48ab6b36229_800x800.png"
          className="rounded-tr-[80px] rounded-bl-[80px]"
        />
      </div>

      {/* Products  */}
      <div>
        <ProductDetails />
      </div>
    </>
  );
}

export default Home;
