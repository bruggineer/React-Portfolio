import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App(projects) {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/bio" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
