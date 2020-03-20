/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../layouts/login";
import Register from "../layouts/register";
import ProtectedRoutes from "../layouts/protectedRoutes";
import NoMatch from "../layouts/noMatch";
import Navbar from "../layouts/navbar";
const Routes = () => {
  return (
    <div>
      <Route path="/" component={Navbar} />
      <Switch>
        <Route  path="/home" render={() => <ProtectedRoutes />} />
        <Route  path="/register" render={() => <Register />} />
        <Route  path="/login" render={() => <Login />} />
        <Route  component={NoMatch} />
      </Switch>
    </div>
  );
};
export default Routes;
