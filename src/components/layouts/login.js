/** @format */

import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginAdmin } from "../redux/action/authActions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    );
  };

  signIn = async () => {
    const { username, password } = this.state;
    const { signInAdmin } = this.props;
    await signInAdmin({ username, password });
  };

  render() {
    const { isAuth } = this.props;
    if (isAuth === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 col-md-6 col-lg-5">
            <div className="text-center">
              <div className="h1">SIGN IN</div>
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                id="username"
                name="username"
                placeholder="trisha"
                type="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                name="password"
                placeholder="trisha123"
                type="password"
                onChange={this.handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.signIn}
            >
              Log In
            </button>
            <Link to="/register" className="btn btn-warning float-right">
              Not Register Yet?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signInAdmin: payload => dispatch(loginAdmin(payload))
  };
};

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
