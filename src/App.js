import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Cv } from "./components/Cv";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cv" component={Cv} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </>
  );
}
//https://crocjohndee.github.io/johnnybarendrecht/
//https://crocjohndee.github.io/https://github.com/crocJohnDee/johnnybarendrecht//
export default App;
