import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import People from "./components/People";
import Planets from "./components/Planets"

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={People} />
      <Route exact path="/planets/:id/" component={Planets} />
    </Switch>
  </Fragment>
);

export default App;
