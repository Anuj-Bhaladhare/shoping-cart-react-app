import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../logo.png";

const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (
    <div className="bg-blue-600 ">
      <div className="flex flex-row justify-between max-w-[65rem] mx-auto">
        <NavLink to="/">
          <img
            src={Logo}
            alt="logo"
            className="h-[5rem]"
          />
        </NavLink>

        <div className="flex items-center gap-5">
          <NavLink to="/">
            <p className="text-green-500 font-bold text-[1.5rem] hover:text-white">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="">
               <FaCartArrowDown className="text-white font-bold text-[1.5rem]"/>
               {
                cart.length > 0 &&
                <span>
                  {cart.length}
                </span>
               }
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
