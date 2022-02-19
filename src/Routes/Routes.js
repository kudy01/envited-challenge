import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import CreatePage from "../components/CreatePage/CreatePage";
import EventPage from "../components/EventPage/EventPage";

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
        <Route path="/event/:eventId">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
