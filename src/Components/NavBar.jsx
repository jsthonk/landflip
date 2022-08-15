import React from "react";
import logo from "../Assets/logo.png";
import { FaAngleRight } from "react-icons/fa";
import "../index.css";

const NavBar = () => {
  const navLinks = [
    { id: 2, name: "Land Location" },
    { id: 3, name: "Services" },
    { id: 4, name: "Testimonials" },
    { id: 5, name: "FAQs" },
  ];

  return (
    <div className="flex lg:fixed  shadow-lg justify-between items-center w-full h-16 text-black bg-white px-10 border-b-2 border-violet-800">
      <div>
        <img src={logo} alt="logo" className="h-10 hover:animate-pulse" />
      </div>
      <div className="mx-auto flex">
        <p className=" group p-4 flex flex-row items-center font-semibold">
          Featured
          <span className="ml-2 mt-1 group-hover:rotate-90">
            <FaAngleRight />
          </span>
          <span className="absolute hidden group-hover:visible w-52 -ml-16 bg-white shadow-md mt-40 rounded">
            <ul>
              <li className="px-2 border-b-2 py-2 cursor-pointer hover:bg-gray-100">
                Buy Land
              </li>
              <li className="px-2 py-2 hover:bg-gray-100 cursor-pointer">
                Flexi-Land
              </li>
            </ul>
          </span>
        </p>
        <ul className="flex flex-row p-4 -ml-5">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="mr-4 ml-4 font-semibold cursor-pointer"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row">
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
    </div>
  );
};

export default NavBar;
