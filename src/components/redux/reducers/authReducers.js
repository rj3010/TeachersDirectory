/** @format */

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
} from "../action/actionTypes";

const initState = {
  isAuth: false,
  isLoading: true,
  error: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN_REQUEST:
      return {
        isLoading: true,
        error: false
      };
    case LOGIN_ADMIN_SUCCESS:
      console.log(action.payload);
      return {
        isLoading: false,
        isAuth: true
      };
    case LOGIN_ADMIN_FAILURE:
      return {
        isLoading: false,
        error: true
      };
    case REGISTER_ADMIN_REQUEST:
      return {
        isLoading: true,
        error: false
      };
    case REGISTER_ADMIN_SUCCESS:
      // console.log(action.payload)
      alert(action.payload.message);
      if (!action.payload.error) {
        return {
          isLoading: false,
          isAuth: true
        };
      } else {
        return {
          isLoading: false,
          isAuth: false
        };
      }

    case REGISTER_ADMIN_FAILURE:
      return {
        isLoading: false,
        error: true
      };
    case LOGOUT_ADMIN:
      return {
        isAuth: false
      };
    // case LOGOUT_ADMIN_REQUEST:
    //   return {
    //     isLoading: false,
    //     error: false
    //   };
    // case LOGOUT_ADMIN_SUCCESS:
    //   return {
    //     isAuth: false
    //   };
    // case LOGOUT_ADMIN_FAILURE:
    //   return {
    //     isLoading: false,
    //     error: true
    //   };

    default:
      return state;
  }
};

export default authReducer;
