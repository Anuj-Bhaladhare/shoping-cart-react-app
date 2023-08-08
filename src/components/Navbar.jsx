import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <img
            src="https://www.experte.com/assets/img/cover.png?text=Logo%20Maker"
            alt="logo"
            className="h-[5rem]"
          />
        </NavLink>

        <div className="flex">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
               <FaCartArrowDown />
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
