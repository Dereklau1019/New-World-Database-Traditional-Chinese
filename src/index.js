import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import HomePage from "views/Home/Home";
//import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Admin} />
      <Route path="/Home" component={HomePage} />
      <Redirect from="/" to="/Home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
