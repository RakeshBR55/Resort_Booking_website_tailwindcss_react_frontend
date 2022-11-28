import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const token = localStorage.getItem("token");
  console.log(token)
  return (
    <div
      className="w-full h-[60px] bg-green-200
    "
    >
      <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#30e620] flex">Madhu home stay</h1>
        </div>
        <div className="hidden md:flex ">
          <ul className="flex text-black items-center p-3">
            <li>
              <Link to="/" className="p-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="p-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/Gallery" className="p-2">
                Gallery
              </Link>
            </li>
             {
                token? <Link to="/Gallery" className="p-2">
                User
              </Link>: <><Link to="/Signup" className="p-2">
                Sign Up
              </Link>
              <Link to='/login' className="p-2">
                Login
              </Link>
             </>
             }
          </ul>
        </div>

        {/* Hamburger menu */}

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? " w-full bg-black text-white absolute top-[60px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li>
              <Link to="/" className="p-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="p-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/Gallery" className="p-2">
                Gallery
              </Link>
            </li>
            <li>
             {
                token? `<Link to="/Gallery" className="p-2">
                User
              </Link>}`:` <Link to="/Signup" className="p-2">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/Login" className="p-2">
                Login
              </Link>`
             }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
