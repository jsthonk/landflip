import "../App.css";
import BuyLand from "../Components/BuyLand";
import Help from "../Components/Help";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import Process from "../Components/Process";
import Profiting from "../Components/Profiting";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Profiting />
      <BuyLand />
      <Process />
      <Help />
    </div>
  );
}

export default HomePage;
