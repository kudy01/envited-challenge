import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/create"></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
