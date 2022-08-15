import "./App.css";
import BuyLand from "./Components/BuyLand";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Process from "./Components/Process";
import Profiting from "./Components/Profiting";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Profiting />
      <BuyLand />
      <Process />
    </div>
  );
}

export default App;
