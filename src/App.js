import React from "react";
import Layout from "components/layout";
import { Switch, Route } from "react-router-dom";
import InputBascula from "./views/input-bascula/";
import Dashboard from "./views/dashboard";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/input-bascula" component={InputBascula} />
    </Switch>
  </Layout>
);

export default App;
