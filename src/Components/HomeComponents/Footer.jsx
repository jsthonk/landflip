import React from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-grey-100 h-full md:flex flex-col hidden w-full px-52">
        <div className="grid grid-cols-4 gap-10 pt-20">
          <div>
            <img src={logo} alt="logo" className="w-48" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-6">Featured</h1>
            <p className="mb-2">Buy Land</p>
            <p className="mb-2">Flexi-Land</p>
            <Link to="/landlocations">
              <p className="mb-2">Land Locations</p>
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-6">Company</h1>
            <Link to="/about">
              <p className="mb-2">About</p>
            </Link>
            <Link to="/services">
              <p className="mb-2">Services</p>
            </Link>
            <Link to="/testimonials">
              <p className="mb-2">Testimonials</p>
            </Link>
            <Link to="/faqs">
              <p className="mb-2">FAQs</p>
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold mb-6">Contact</h1>
            <p className="mb-2 flex flex-row gap-2 text-left">
              <FaLocationArrow className="my-auto w-8 -ml-8" />
              20C Akin Ogunlewe, Victoria Island, Lagos, Nigeria.
            </p>
            <p className="mb-4 flex flex-row">
              <IoMail className="my-auto w-8 -ml-9" />
              support@landflipng.com
            </p>
            <p className=" flex flex-row">
              <FaPhone className="my-auto w-8 -ml-9" />
              Land Locations
            </p>
            <div className="flex flex-row mt-6 gap-8">
              <h1 className="bg-violet-200 hover:bg-violet-900 hover:text-white rounded-full w-8 py-2 text-center">
                <FaFacebookF className="mx-auto" />
              </h1>
              <h1 className="bg-violet-200 hover:bg-violet-900 hover:text-white rounded-full w-8 py-2 text-center">
                <FaInstagram className="mx-auto" />
              </h1>
              <h1 className="bg-violet-200 hover:bg-violet-900 hover:text-white rounded-full w-8 py-2 text-center">
                <FaTwitter className="mx-auto" />
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-20 text-sm text-center text-gray-400">
          Landflip is a multi-asset platform, that provides the opportunity for
          high net worth individuals, corporate firms and low income earners,
          nationally and internationally, to partner in commercial real estate
          projects and acquire real estate and landed properties. Unlike other
          real estate firms, Landflip offers you the opportunity to own part of
          her business, while also earning returns as we earn. Landflip is
          powered by Safegate Microfinance Bank.
        </div>
        <div className="mt-10 mb-10 text-sm text-center font-bold">
          ©2022 Landflip
        </div>
      </div>
      {/* Mobile View*/}
      <div className="border-t-2 border-grey-100 w-full px-8 flex flex-col lg:hidden md:hidden">
        <div className=" mt-10">
          <img src={logo} alt="logo" className="w-52" />
        </div>
        <div className="flex flex-col mt-10 text-left">
          <h1 className="font-bold mb-6">Featured</h1>
          <p className="mb-2">Buy Land</p>
          <p className="mb-2">Flexi-Land</p>
          <p className="mb-2">Land Locations</p>
        </div>
        <div className="flex flex-col mt-10 text-left">
          <h1 className="font-bold mb-6">Company</h1>
          <p className="mb-2">About</p>
          <p className="mb-2">Services</p>
          <p className="mb-2">Testimonials</p>
          <p className="mb-2">FAQs</p>
        </div>
        <div className="flex flex-col mt-10 text-left">
          <h1 className="font-bold mb-6">Contact</h1>
          <p className="mb-2 flex flex-row gap-2 text-left px-6 ">
            <FaLocationArrow className="my-auto w-8 -ml-8" />
            20C Akin Ogunlewe, <br></br>Victoria Island, Lagos, Nigeria.
          </p>
          <p className="mb-4 flex flex-row gap-2 px-6">
            <IoMail className="my-auto w-8 -ml-9" />
            support@landflipng.com
          </p>
          <p className=" flex flex-row gap-2 px-6">
            <FaPhone className="my-auto w-8 -ml-9" />
            Land Locations
          </p>
          <div className="flex flex-row mt-6 gap-8">
            <h1 className="bg-violet-200 hover:bg-violet-900 hover:text-white rounded-full w-8 py-2 text-center">
              <FaFacebookF className="mx-auto" />
            </h1>
            <h1 className="bg-violet-200 hover:bg-violet-900 hover:text-white rounded-full w-8 py-2 text-center">
              <FaInstagram className="mx-auto" />
            </h1>
            <h1 className="bg-violet-200 hover:bg-violet-900 hover:text-white rounded-full w-8 py-2 text-center">
              <FaTwitter className="mx-auto" />
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-20 px-6 text-sm text-left md:hidden lg:hidden text-gray-400">
        Landflip is a multi-asset platform, that provides the opportunity for
        high net worth individuals, corporate firms and low income earners,
        nationally and internationally, to partner in commercial real estate
        projects and acquire real estate and landed properties. Unlike other
        real estate firms, Landflip offers you the opportunity to own part of
        her business, while also earning returns as we earn. Landflip is powered
        by Safegate Microfinance Bank.
      </div>
      <div className="mt-10 mb-10 text-sm text-center md:hidden lg:hidden font-bold">
        ©2022 Landflip
      </div>
    </React.Fragment>
  );
};

export default Footer;
