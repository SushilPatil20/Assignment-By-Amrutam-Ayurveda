import React from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className=" bg-cream sticky top-0 z-20 w-full">
      <div className=" bg-cream flex items-center w-[88%] justify-between mx-auto h-24">
        <section className="flex items-center">
          <section className="-ml-5">
            <NavLink to={"/"}>
              <img src={Logo} alt="" />
            </NavLink>
          </section>
          <ul className="flex items-center text-charcoal gap-10 ml-10 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-forest font-bold cursor-pointer"
                  : "cursor-pointer hover:text-forest hover:font-600"
              }
            >
              <li>Home</li>
            </NavLink>
            <li className="cursor-pointer hover:text-forest hover:font-600">
              Find Doctors
            </li>
            <li className="cursor-pointer hover:text-forest hover:font-600">
              About Us
            </li>
            <NavLink
              to="/plans"
              className={({ isActive }) =>
                isActive
                  ? "text-forest font-bold cursor-pointer"
                  : "cursor-pointer hover:text-forest hover:font-600"
              }
            >
              <li>Plans</li>
            </NavLink>
          </ul>
        </section>
        <section className="hidden md:block">
          <button className="border border-charcoal mr-2 p-3 rounded-md w-28 h-14">
            Login
          </button>
          <button className="border border-forest bg-forest text-white p-3 rounded-md w-28 h-14">
            Sign-up
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
