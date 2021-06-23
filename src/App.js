import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

const Home = lazy(() => import('./views/Home'));
const Portfolio = lazy(() => import('./views/Portfolio'));
const Contact = lazy(() => import('./views/Contact'));


function App(projects) {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route path="/bio" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
