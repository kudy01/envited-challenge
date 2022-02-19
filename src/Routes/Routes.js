import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import CreatePage from "../components/CreatePage/CreatePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/create">
          <CreatePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
