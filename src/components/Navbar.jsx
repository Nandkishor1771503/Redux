import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
function Navbar() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <div className="navBar w-[95%] h-[90vh] m-5 p-5 rounded-xl bg-heroImg bg-fixed bg-cover shadow-xl shadow-gray-700">
        <nav className="flex items-center justify-between">
          <h1 className="font-thin">E-COM</h1>
          {/* <i alt="logo"></i> */}
          <div>
            <Link to="/cart">
              <button className="rounded-full bg-white text-black shadow-2xl hover:shadow-white p-2">
                <div className="bg-black text-white rounded-full w-6 absolute opacity-90 top-[6%] right-[12.7%]">
                  {count}
                </div>
                <IoBagHandleOutline className="text-3xl" />
              </button>
            </Link>
            <button className="rounded-full bg-white text-black shadow-2xl hover:shadow-white">
              <h2>product</h2>
            </button>
            {/* <button className="rounded-full bg-white text-black shadow-2xl hover:shadow-white ">
              <h2>#OOTD</h2>
            </button> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
