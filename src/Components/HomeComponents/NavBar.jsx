import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { FaAngleDown, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../index.css";

const NavBar = () => {
  const navLinks = [
    { id: 2, name: "Land Location", link: "/landlocations" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Testimonials", link: "/testimonials" },
    { id: 5, name: "FAQs" },
  ];

  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex lg:fixed  shadow-lg justify-between items-center w-full h-16 text-black bg-white px-10 border-b-2 border-violet-800">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 hover:animate-pulse" />
        </Link>
      </div>
      <div className="mx-auto md:flex hidden">
        <p
          className=" group p-4 flex flex-row items-center font-semibold"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Featured
          <span className="ml-2 mt-1">
            <FaAngleDown />
          </span>
        </p>
        <span
          className="absolute w-52 -ml-16 bg-white shadow-md mt-16 rounded"
          hidden={isOpen ? true : false}
        >
          <ul>
            <li className="px-2 border-b-2 py-2 cursor-pointer hover:bg-gray-100">
              Buy Land
            </li>
            <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
              Flexi-Land
            </li>
          </ul>
        </span>
        <ul className="flex-row p-4 -ml-5 md:flex hidden">
          {navLinks.map((link) => (
            <li
              to={link.link}
              key={link.id}
              className="mr-4 ml-4 font-semibold cursor-pointer"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex flex-row hidden">
        <button className="border-2 text-violet-900 border-violet-400 hover:border-violet-900 duration-500 rounded-full w-24 h-10">
          <a
            href="https://dashboard.landflip.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize my-auto sign"
          >
            sign in
          </a>
        </button>
        <button className=" ml-2 bg-violet-900 rounded-full w-36 h-10">
          <a
            href="https://dashboard.landflip.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize my-auto create text-white"
          >
            create account
          </a>
        </button>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 md:hidden lg:hidden"
      >
        {nav ? (
          <FaTimes size={20} className="text-violet-900" />
        ) : (
          <FaBars size={20} className="text-violet-900" />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col absolute top-0 right-0 w-64 h-screen bg-violet-200 md:hidden lg:hidden">
          <img src={logo} alt="logo" className="w-40 mt-12 mx-auto" />
          <li className="px-4 text-black cursor-pointer capitalize py-2 mt-10 font-semibold">
            Featured
          </li>
          {navLinks.map((links) => (
            <li
              key={links.id}
              className="px-4 text-black cursor-pointer capitalize py-2 font-semibold"
            >
              {links.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
