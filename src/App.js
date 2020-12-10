import React from "react";
import Recipemain from "./Recipemain.js";
import Login from "./Login.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Test from "./Test.js";
import About from "./About.js";
import Recipemaindt from "./Recipemaindt.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/recipe">
          <Test />
          <Recipemain />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recipedt">
          <Test />
          <Recipemaindt />  
        </Route>
      </Switch>
    </Router>
  );
}