/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAdmin } from "../redux/action/authActions";

const Navbar = props => {
  const { isAuth, adminLogout } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <Link to="/home" className="btn btn-primary">
          Teacher's Directory
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
            <li className="mx-4 nav-item active my-2">
              <Link to="/register" className="btn btn-primary col-sm-12">
                Register
              </Link>
            </li>

            <li className="mx-4 nav-item active my-2">
              {isAuth ? (
                <button
                  type="button"
                  className="btn btn-warning col-sm-12"
                  onClick={adminLogout}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-primary col-sm-12">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    adminLogout: () => dispatch(logoutAdmin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
