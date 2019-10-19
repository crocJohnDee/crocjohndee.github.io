import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Test } from "./components/Test";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        <Route path="/test" component={Test} />
      </Switch>
    </>
  );
}
//https://crocjohndee.github.io/johnnybarendrecht/
//https://crocjohndee.github.io/https://github.com/crocJohnDee/johnnybarendrecht//
export default App;
