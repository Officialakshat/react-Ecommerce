import React from "react";

function Header() {
  return (
    <>
      <nav className="flex flex-col bg-slate-50 md:flex-row  justify-between px-4 py-4 md:px-10 space-y-3 items-start ">
        <div className="text-3xl font-semibold text-gray-600 ">
          <h1>UrbanMart</h1>
        </div>

        <div className="w-full md:w-auto ">
          <ul className="flex items-start md:space-x-5 text-slate-500  space-y-3 flex-col md:flex-row text-nowrap">
            <li className="border-b md:border-0 w-full">Home</li>
            <li className="border-b md:border-0 w-full">Services</li>
            <li className="border-b md:border-0 w-full">Products</li>
            <li className="border-b md:border-0 w-full">Best Deals</li>
            <li className="border-b md:border-0 w-full">Gallary</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
