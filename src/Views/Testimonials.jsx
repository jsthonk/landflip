import React from "react";
import Body from "../Components/TestimonialsComponents/body";
import Download from "../Components/TestimonialsComponents/download";
import Header from "../Components/TestimonialsComponents/header";
import Video from "../Components/TestimonialsComponents/video";
import Footer from "../Components/HomeComponents/Footer";

const Testimonials = () => {
  return (
    <div className="w-full pt-20 md:flex flex-col">
      <Header />
      <Body />
      <Video />
      <Download />
      <Footer />
    </div>
  );
};

export default Testimonials;
