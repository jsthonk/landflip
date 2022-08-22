import "../App.css";
import BuyLand from "../Components/HomeComponents/BuyLand";
import Footer from "../Components/HomeComponents/Footer";
import Help from "../Components/HomeComponents/Help";
import Hero from "../Components/HomeComponents/Hero";
import Process from "../Components/HomeComponents/Process";
import Profiting from "../Components/HomeComponents/Profiting";

function HomePage() {
  return (
    <div>
      <Hero />
      <Profiting />
      <BuyLand />
      <Process />
      <Help />
      <Footer />
    </div>
  );
}

export default HomePage;
