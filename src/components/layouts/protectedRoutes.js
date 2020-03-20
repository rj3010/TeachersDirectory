/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../layouts/home";
import Edit from "../layouts/edit";

const ProtectedRoutes = props => {
  const { isAuth } = props;
  console.log(isAuth);
  return isAuth ? (
    <div>
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/home/edit/:id"  render={(props) => <Edit {...props}/>} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(ProtectedRoutes);
