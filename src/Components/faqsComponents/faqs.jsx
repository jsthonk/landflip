import React, { useState } from "react";

const Faq = () => {
  const menu = [
    { name: "Landflip" },
    { name: "Landflip-Flex" },
    { name: "Ox-Invest" },
    { name: "Estate Locations" },
    { name: "Payment" },
    { name: "Mobile App" },
    { name: "Registration & Login" },
    { name: "Funding Wallet" },
    { name: "Partnership & Returns" },
    { name: "Withdrawals & Termination" },
    { name: "Safety & Security" },
  ];
  const [accordion, setAccordion] = useState(0);

  return (
    <div className="w-full pt-20 md:flex flex-row text-left px-40">
      <div className="flex flex-col">
        <ul>
          {menu.map((menu, i) => (
            <li key={i} className="mb-4 w-60">
              <a onClick={() => setAccordion(i)} className="cursor-pointer">
                <h1
                  className={
                    accordion === i
                      ? "bg-gray-100 px-4 w-52 mb-2 font-bold py-2 rounded-tr rounded-br border-l-4 border-violet-500"
                      : "bg-gray-200 px-4 w-52 mb-2 font-bold py-2 rounded-tr rounded-br"
                  }
                >
                  {menu.name}
                </h1>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Words */}
      <div className="px-40">
        <div hidden={accordion !== 0}>
          <p className="font-bold text-gray-800">
            Landflip offers a flexible payment scheme that is ideal for partners
            who want to spread their money into smaller amounts over time.
          </p>
        </div>
        <div hidden={accordion !== 1}>
          <h1 className="font-bold mb-2"> What is Landflip-Flex?</h1>{" "}
          Landflip-Flex is a flexible partnership. A customer can partner with
          us for as low as N1000, a customer can partner with us in any of our
          real estate products for a period and get returns at the end of the
          tenure.
          <h2 className="mt-8 font-bold mb-2">How does it work?</h2> The
          Landflip-Flex plan offers a flexible payment scheme that is ideal for
          partners who want to spread their money into small amounts over time.
          Here is how it works: You select a package amount (for example:
          N100,000), and then set a payment plan, to sum up the N100,000 before
          it can be used for partnership. To get started, the payment plan can
          be as low as N1,000.
        </div>
        <div hidden={accordion !== 2}>
          <h1 className="font-bold mb-2">What is Ox-Invest? </h1>Ox-Invest is a
          funding platform for real estate and business partnership, giving
          investors the opportunity to invest in return yielding commercial
          projects and earn up to 74% returns in just 24 months and 48% in 16
          months. <h2 className="mt-8 font-bold mb-2">How does it work?</h2>{" "}
          However, you can speed up your financial growth by partnering with us
          in high-yielding asset classes and sectors like real estate, dredging,
          oil & gas, and many more. Ox-invest is a profitable package with a
          low-risk and high returns. Oxford Landflip Plus – 78% in 24 months.
          Oxford Mortgagevest – 48% in 16 months. Oxford Landflip – 20% 8
          months, 40% in 13 months.
        </div>
        <div hidden={accordion !== 3}>
          <h1 className="font-bold mb-2"> Where are your estates located?</h1>
          We have estates located in different states and parts of those states.
        </div>
        <div hidden={accordion !== 4}>
          <h1 className="font-bold mb-2">How do I fund my wallet?</h1> Create an
          account or Login to your Landflip account. Once you are logged in, on
          your dashboard, click on fund wallet and choose any of the available
          options to fund your wallet. After funding your wallet, click on
          investment options menu and then click on available investments. Click
          on invest now, with your desired investment plan in mind, enter the
          amount you are funding and click submit.
        </div>
        <div hidden={accordion !== 5}>
          <h1 className="font-bold mb-2">Do you have a mobile app?</h1>
          Yes we do have a mobile app for Landflip.
          <h2 className="mb-2 font-bold mt-8">
            How can i download the mobile app?
          </h2>
          The mobile app is available ONLY on Android and iOS.
          <h3 className="mb-2 font-bold mt-8">Is our mobile app Secure?</h3>
          All transmissions, partnership and transactions on our website and
          applications is through an encrypted 256-bit HTTPS SSL connection.
        </div>
        <div hidden={accordion !== 6}>
          <h1 className="font-bold mb-2"> How do i register?</h1>
          To register, Click{" "}
          <a
            href="https://dashboard.Landflip.ng"
            className="text-violet-900 font-bold"
          >
            here
          </a>
          , supply your correct information and submit the form. A confirmation
          email will be sent to your inbox (Please you should also check spam or
          junk mail folder). Click on the email link sent to you to confirm
          account setup.
        </div>
        <div hidden={accordion !== 7}>
          <h1 className="font-bold mb-2">How do I fund my wallet?</h1>
          Create an account or Login to your Landflip account. Once you are
          logged in, on your dashboard, click on fund wallet and choose any of
          the available options to fund your wallet. After funding your wallet,
          click on investment options menu and then click on available
          investments. Click on invest now, with your choice investment plan in
          mind, enter the amount you are funding and click submit.
        </div>
        <div hidden={accordion !== 8}>
          <h1 className="font-bold mb-2">
            How can i partner after funding my wallet?
          </h1>
          After you have successfully funded your wallet, click on available
          partnership options and choose the option you prefer. Enter the amount
          to invest (Ensure you don't add a comma when writing this figure).
          Submit the form and wait for a response confirming the status of the
          investment. If successful, an email will be sent to you on the status
          of your partnership.
          <h1 className="mt-8 font-bold"> What is the returns like?</h1>{" "}
          Landflip Plus – 78% in 24 months Landflip – 20% 8 months, 40% in 13
          month
        </div>
        <div hidden={accordion !== 9}>
          <h1 className="font-bold mb-2">How do I withdraw my money?</h1>
          Withdrawing your money is quite simple and straightforward. <br></br>
          To initiate a withdrawal, kindly follow these steps: Login to the
          website. To reset your pin, click on the settings option the old pin
          will be sent to you once you confirm your email. If you have reset and
          changed your pin, skip to the withdrawal option on the dashboard,
          select the withdrawal option from the dashboard, input the necessary
          details and select the balance to be debited.
          <h1 className="mt-8 font-bold mb-2">When can I withdraw my money?</h1>
          You can only withdraw at the set maturity date. You can choose to
          withdraw some or all of your savings together with interests. You can
          decide to rollover the plan for another period or withdraw part or
          whole. Rolling over matured plans for another period makes it possible
          to enjoy compound returns.
        </div>
        <div hidden={accordion !== 10}>
          <h1 className="font-bold mb-2"> How safe is Landflip?</h1>
          We have taken extra measures to secure the platform from intruders.
          Landflip boasts of Secure Sockets Layer.
          <h2 className="font-bold mb-2 mt-8">What is OTP?</h2>
          The one time password is used for initiating transfers and withdrawals
          on your Landflip account.
          <h3 className="font-bold mb-2 mt-8">Does Landflip have an office?</h3>
          Yes we have an office. And you can contact us to find out more about
          partnership products or if you need to make any enquiry. Address: 20c
          Akin Ogunlewe, Victoria Island, Lagos. Contact Number: +234 803 858
          0994. Email: support@Landflipng.com.
          <h4 className="font-bold mb-2 mt-8">Are my card details safe?</h4>
          Card details are very safe. Your card details are extremely safe and
          are kept where they cannot be compromised.
          <h5 className="font-bold mb-2 mt-8">How secure is my money?</h5>
          All saved funds are managed by Safegate Microfinance Bank, a CBN
          licensed microfinance bank.
        </div>
      </div>
    </div>
  );
};

export default Faq;
