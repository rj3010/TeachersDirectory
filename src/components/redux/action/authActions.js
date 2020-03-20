/** @format */
import axios from "axios";
import {
  LOGIN_ADMIN_REQUEST,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAILURE,
  REGISTER_ADMIN_REQUEST,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_FAILURE,
  LOGOUT_ADMIN
  // LOGOUT_ADMIN_REQUEST,
  // LOGOUT_ADMIN_SUCCESS,
  // LOGOUT_ADMIN_FAILURE
} from "./actionTypes";

export const loginAdminRequest = () => ({
  type: LOGIN_ADMIN_REQUEST
});

export const loginAdminSuccess = payload => ({
  type: LOGIN_ADMIN_SUCCESS,
  payload
});

export const loginAdminFailure = payload => ({
  type: LOGIN_ADMIN_FAILURE,
  error: payload
});

export const registerAdminRequest = () => ({
  type: REGISTER_ADMIN_REQUEST
});

export const registerAdminSuccess = payload => ({
  type: REGISTER_ADMIN_SUCCESS,
  payload
});

export const registerAdminFailure = payload => ({
  type: REGISTER_ADMIN_FAILURE,
  error: payload
});

// export const logoutAdminRequest = payload => ({
//   type: LOGOUT_ADMIN_REQUEST,
//   payload
// });

// export const logoutAdminSuccess = payload => ({
//   type: LOGOUT_ADMIN_SUCCESS,
//   payload
// });

// export const logoutAdminFailure = payload => ({
//   type: LOGOUT_ADMIN_FAILURE,
//   error: payload
// });

export const loginAdmin = payload => {
  const { username, password } = payload;
  return dispatch => {
    dispatch(loginAdminRequest());
    return axios
      .post("http://localhost:8080/auth/login", {
        password: password,
        username: username
      })
      .then(res => {
        console.log(res);
        dispatch(loginAdminSuccess(res.data));
      })
      .catch(() => dispatch(loginAdminFailure()));
  };
};

export const registerAdmin = payload => {
  const { email, password, name, mobile, username } = payload;
  return dispatch => {
    dispatch(registerAdminRequest());
    return axios
      .post("http://localhost:8080/auth/register", {
        name: name,
        email: email,
        password: password,
        username: username,
        mobile: mobile,
        description: ""
      })
      .then(res => {
        // console.log(res);
        dispatch(registerAdminSuccess(res.data));
      })
      .catch(() => dispatch(registerAdminFailure()));
  };
};
export const logoutAdmin = () => ({
    type: LOGOUT_ADMIN
  })
  // return dispatch => {
  //   dispatch(logoutAdminRequest());
  //   return axios
  //     .post("/logout", {
  //       headers: {
  //         Authorization: payload.token
  //       }
  //     })
  //     .then(res => {
  //       dispatch(logoutAdminSuccess(res));
  //     })
  //     .catch(err => dispatch(logoutAdminFailure(err.message)));
  // };
// };
