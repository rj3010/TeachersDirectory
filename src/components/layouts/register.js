/** @format */

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerAdmin } from "../redux/action/authActions";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      mobile: ""
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

  signUp = async () => {
    const { username, name, email, password, mobile } = this.state;
    const { registerAdmin, isAuth } = this.props;
    await registerAdmin({
      username,
      name,
      mobile,
      email,
      password
    });
    if (isAuth) {
      this.props.history.push("/home");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9 col-md-6 col-lg-5 my-2">
            <div className="h1 text-center">REGISTRATION</div>
            <div className="form-group">
              <label htmlFor="pass">Name</label>
              <input
                className="form-control"
                id="name"
                type="name"
                name="name"
                placeholder="Enter Your Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="" htmlFor="username">
                Enter Username
              </label>
              <input
                className="form-control"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="" htmlFor="email">
                Email id
              </label>
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="abc@gmail.com"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label className="" htmlFor="pass">
                Password
              </label>
              <input
                className="form-control"
                id="pass"
                type="password"
                placeholder="trisha123"
                name="password"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label className="" htmlFor="pass">
                Mobile
              </label>
              <input
                className="form-control"
                id="mobile"
                type="mobile"
                name="mobile"
                placeholder="98XXXXXX88"
                onChange={this.handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.signUp}
            >
              Register
            </button>
            <Link to="/login" className="btn btn-success float-right">
              Already have account?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    registerAdmin: payload => dispatch(registerAdmin(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
