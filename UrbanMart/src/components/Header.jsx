import React from "react";

function Header() {
  return (
    <>
      <nav>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] bg-slate-50  justify-between px-4 py-4 md:px-10 space-y-3 lg:space-y-0 items-center border-b border-gray-300">
          {/* logo */}
          <div className="text-3xl font-semibold text-gray-600 ">
            <h1 className="text-[#C9B194] ">UrbanMart</h1>
          </div>

          {/* searchbar */}
          <div className="lg:flex hidden ">
            <div className=" w-full h-14  flex justify-center ">
              <input
                type="text "
                placeholder="Search.."
                className=" px-6 py-2 bg-slate-200 w-[60%] rounded-l-4xl outline-none"
              />
              <div className="bg-[#C9B194]  min-w-14 flex cursor-pointer justify-center items-center rounded-r-4xl">
                <i className="fa-solid fa-magnifying-glass text-slate-200"></i>
              </div>
            </div>
          </div>

          {/* anchor tags */}

          <div className="w-full lg:w-auto ">
            <ul className="flex items-start lg:items-center text-slate-500 space-y-4 lg:space-y-0  lg:space-x-3 flex-col lg:flex-row text-nowrap">
              {/* Log in And Sign in */}

              <li className=" w-full space-x-2 text-gray-50">
                <button className="py-2 px-4 hover:text-gray-200 hover:bg-gray-700 transition delay-100 bg-[#C9B194]  rounded-3xl">
                  Sign up
                </button>
                <button className="py-2 px-4 hover:text-gray-200 hover:bg-gray-700 transition delay-100 bg-[#C9B194]  rounded-3xl">
                  Log In
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom  */}
        <div className="bg-slate-100 py-3 px-6">
          <ul className="flex items-start lg:items-center text-slate-500 space-y-4 lg:space-y-0  lg:space-x-3 flex-col lg:flex-row text-nowrap">
            <li className="border-b  lg:border-0 w-full lg:w-auto">Home</li>
            <li className="border-b lg:border-0 w-full">Category</li>
            <li className="">
              <i className="fa-regular fa-heart text-xl text-[#C9B194] "></i>
            </li>
            <li className="">
              <i className="fa-solid fa-cart-shopping text-xl  text-[#C9B194]"></i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
