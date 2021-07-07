import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        
      </Router>
      <Footer />
    </div>
  );
}
export default App;
