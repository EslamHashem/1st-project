import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Click from "./Pages/Click"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/click" component={Click} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
