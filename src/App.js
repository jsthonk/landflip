import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Views/HomePage";
import LandLocations from "./Views/LandLocations";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/HomeComponents/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/landlocations">
              <LandLocations />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
