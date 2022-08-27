import React, { useState } from "react";
import { Link } from "react-router-dom";
import estates from "../../Assets/estates.jpg";
import "../../index.css";

const Body = () => {
  const [buyland, setBuyland] = useState(0);
  const options = [{ name: "Buy to Sell" }, { name: "Buy to own" }];
  return (
    <React.Fragment>
      <div className="md:flex flex-col pt-10 px-40 hidden">
        <h1 className="text-left font-bold text-3xl">How it works</h1>
        <p className="text-left mt-8">
          Ox-Invest is a funding platform for real estate and business
          partnership, giving partners the opportunity to partner in
          return-yielding commercial projects and earn up to 75% returns in just
          24 months and 45% in 16 months. In the past 12 months, the Ox-Invest
          team has acquired $67M of real estate under management, on average,
          with each transaction generating a net return of between 40% - 90%.
          Unveil cutting-edge partnership strategies and business models that
          increase returns. However, you can speed up your financial growth by
          partnering with us in high-yielding asset classes and sectors like
          real estate, dredging, oil & gas, and many more. Ox-Invest is a
          profitable package with a low-risk and high returns.
        </p>
        <div className="md:flex flex-row mt-10">
          <ul className="flex flex-row gap-8 text-white font-bold">
            {options.map((items, i) => (
              <li
                className={
                  buyland === i
                    ? "bg-violet-900 px-8 py-2 rounded"
                    : "text-violet-900 px-8 py-2"
                }
                onClick={() => setBuyland(i)}
              >
                {items.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex flex-row mt-10 mb-10">
          <img src={estates} alt="estates" className="est rounded-xl" />
          <div className="ml-16">
            <div hidden={buyland !== 0}>
              <h1 className="text-left font-bold text-3xl">Buy to Sell</h1>
              <p className="text-left mt-10 text-gray-500">
                Landflip offers a flexible payment scheme that is ideal for
                partners who want to spread their money into smaller amounts
                over time. How it works: You select a package amount (for
                example: ₦100,000), and then set a payment plan, to sum up the
                ₦100,000 before it can be used for partnership. To get started,
                the payment plan can be as low as ₦1,000.
              </p>
            </div>
            <div hidden={buyland !== 1}>
              <h1 className="text-left font-bold text-3xl">Buy to Own</h1>
              <p className="text-left mt-10 text-gray-500">
                Landflip offers a flexible payment scheme that is ideal for
                partners who want to spread their money into smaller amounts
                over time. How it works: You select a package amount (for
                example: ₦100,000), and then set a payment plan, to sum up the
                ₦100,000 before it can be used for partnership. To get started,
                the payment plan can be as low as ₦1,000.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:flex flex-col">
          <button className="bg-violet-900 hover:bg-black mx-auto px-12 py-3 rounded text-white font-bold">
            <a
              href="https://dashboard.landflip.ng/"
              target="_blank"
              rel="noreferrer"
            >
              View available lands
            </a>
          </button>
          <button className="mt-5 text-violet-900 border-2 hover:bg-black hover:text-white font-bold px-8 py-3 mx-auto rounded">
            <a
              href="https://dashboard.landflip.ng/"
              target="_blank"
              rel="noreferrer"
            >
              View available lands
            </a>
          </button>
          <p className="mt-4 mb-10">
            Already have an account?{" "}
            <a
              href="https://dashboard.landflip.ng/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-violet-900"
            >
              Login and continue to earn!
            </a>
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-8 mx-auto">
            <div className="text-left wsel rounded-lg bg-violet-100 px-2 py-10 mb-10">
              <h1 className="text-2xl font-bold">Sell Land</h1>
              <h2 className="mt-4">
                Own standard plots or units of land and we will help you resell
                when it appreciates.
              </h2>
            </div>
            <div className="text-left wsel rounded-lg bg-violet-100 px-2 py-10 mb-10">
              <h1 className="text-2xl font-bold">Buy units</h1>
              <h2 className="mt-4">
                Customers can buy units of land at a fixed price of ₦5,000,
                ₦10,000, etc.
              </h2>
            </div>
          </div>
          <div className="flex flex-row gap-8 mx-auto">
            <div className="text-left wsel rounded-lg bg-violet-100 px-2 py-10 mb-10">
              <h1 className="text-2xl font-bold">Earn High Returns</h1>
              <h2 className="mt-4">
                Earn high returns from the resell of lands at specified date.
              </h2>
            </div>
            <div className="text-left wsel rounded-lg bg-violet-100 px-2 py-10 mb-10">
              <h1 className="text-2xl font-bold">Flexible Maturity</h1>
              <h2 className="mt-4">
                All lands bought for resell can be within 6 to 12, 8 to 14, or
                12 to 16 months
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-violet-500 h-72 px-10 md:flex hidden">
        <h1 className="pt-10 text-3xl font-bold">
          Do You Have Questions? <br></br>Need More Details About Our Products?
        </h1>
        <Link to="/faqs">
          <button className="mt-20 bg-white font-bold px-10 py-4 rounded-full">
            Find out more
          </button>
        </Link>
      </div>
      {/* Mobile verison */}
      <div className="md:hidden lg:hidden flex flex-col pt-10 px-4">
        <h1 className="text-left font-bold text-3xl">How it works</h1>
        <p className="text-left mt-8">
          Ox-Invest is a funding platform for real estate and business
          partnership, giving partners the opportunity to partner in
          return-yielding commercial projects and earn up to 75% returns in just
          24 months and 45% in 16 months. In the past 12 months, the Ox-Invest
          team has acquired $67M of real estate under management, on average,
          with each transaction generating a net return of between 40% - 90%.
          Unveil cutting-edge partnership strategies and business models that
          increase returns. However, you can speed up your financial growth by
          partnering with us in high-yielding asset classes and sectors like
          real estate, dredging, oil & gas, and many more. Ox-Invest is a
          profitable package with a low-risk and high returns.
        </p>
        <div className="md:flex flex-row mt-10">
          <ul className="flex flex-row gap-8 text-white font-bold">
            {options.map((items, i) => (
              <li
                className={
                  buyland === i
                    ? "bg-violet-900 px-8 py-2 rounded"
                    : "text-violet-900 px-8 py-2"
                }
                onClick={() => setBuyland(i)}
              >
                {items.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex flex-row mt-10 mb-10">
          <img src={estates} alt="estates" className="est rounded-xl" />
          <div className="">
            <div hidden={buyland !== 0}>
              <h1 className="text-left font-bold text-3xl mt-4">Buy to Sell</h1>
              <p className="text-left mt-10 text-gray-500">
                Landflip offers a flexible payment scheme that is ideal for
                partners who want to spread their money into smaller amounts
                over time. How it works: You select a package amount (for
                example: ₦100,000), and then set a payment plan, to sum up the
                ₦100,000 before it can be used for partnership. To get started,
                the payment plan can be as low as ₦1,000.
              </p>
            </div>
            <div hidden={buyland !== 1} className="mt-4">
              <h1 className="text-left font-bold text-3xl">Buy to Own</h1>
              <p className="text-left mt-10 text-gray-500">
                Landflip offers a flexible payment scheme that is ideal for
                partners who want to spread their money into smaller amounts
                over time. How it works: You select a package amount (for
                example: ₦100,000), and then set a payment plan, to sum up the
                ₦100,000 before it can be used for partnership. To get started,
                the payment plan can be as low as ₦1,000.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:flex flex-col">
          <button className="bg-violet-900 hover:bg-black mx-auto px-12 py-3 rounded text-white font-bold">
            <a
              href="https://dashboard.landflip.ng/"
              target="_blank"
              rel="noreferrer"
            >
              View available lands
            </a>
          </button>
          <button className="mt-5 text-violet-900 border-2 hover:bg-black hover:text-white font-bold px-8 py-3 mx-auto rounded">
            <a
              href="https://dashboard.landflip.ng/"
              target="_blank"
              rel="noreferrer"
            >
              View available lands
            </a>
          </button>
          <p className="mt-4 mb-10">
            Already have an account?{" "}
            <a
              href="https://dashboard.landflip.ng/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-violet-900"
            >
              Login and continue to earn!
            </a>
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mx-auto">
            <div className="text-left wsel rounded-lg bg-violet-100 px-2 py-10 mb-10">
              <h1 className="text-2xl font-bold">Sell Land</h1>
              <h2 className="mt-4">
                Own standard plots or units of land and we will help you resell
                when it appreciates.
              </h2>
            </div>
            <div className="text-left wsel rounded-lg bg-violet-100 px-2 py-10 mb-10">
              <h1 className="text-2xl font-bold">Buy units</h1>
              <h2 className="mt-4">
                Customers can buy units of land at a fixed price of ₦5,000,
                ₦10,000, etc.
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-8 mx-auto">
            <div className="text-left wsel rounded-lg bg-violet-100 px-2 py-10 mb-10">
              <h1 className="text-2xl font-bold">Earn High Returns</h1>
              <h2 className="mt-4">
                Earn high returns from the resell of lands at specified date.
              </h2>
            </div>
            <div className="text-left wsel rounded-lg bg-violet-100 px-2 py-10 mb-10">
              <h1 className="text-2xl font-bold">Flexible Maturity</h1>
              <h2 className="mt-4">
                All lands bought for resell can be within 6 to 12, 8 to 14, or
                12 to 16 months
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-violet-500 pb-10 md:hidden lg:hidden px-10">
        <h1 className="pt-10 text-3xl font-bold">
          Do You Have Questions? <br></br>Need More Details About Our Products?
        </h1>
        <Link to="/faqs">
          <button className="mt-20 bg-white font-bold px-10 py-4 rounded-full">
            Find out more
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Body;
