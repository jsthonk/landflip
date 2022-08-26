import React from "react";
import Faq from "../Components/faqsComponents/faqs";
import Head from "../Components/faqsComponents/head";
import Hero from "../Components/faqsComponents/hero";
import Footer from "../Components/HomeComponents/Footer";

const Faqs = () => {
  return (
    <div className="w-full pt-20">
      <Head />
      <Faq />
      <Hero />
      <Footer />
    </div>
  );
};

export default Faqs;
