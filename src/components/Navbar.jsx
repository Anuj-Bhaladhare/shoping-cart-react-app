import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import Logo from "https://www.experte.com/assets/img/cover.png?text=Logo%20Maker";

const Navbar = () => {
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
            <FaCartArrowDown />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
