import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App(projects) {

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/bio" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
