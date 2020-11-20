import * as userActionTypes from './userActionTypes';
  
  export default (state, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER_LOGIN_DATA:
            return {
                ...state,
                userLoginData: action.payload,
            };
        case userActionTypes.SET_USER_LOGIN_DATA:
            return {
                ...state,
                userSignupData: action.payload,
            };
        default:
            return state;
    }
  };