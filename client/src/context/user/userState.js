
import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';
import * as userActionTypes from './userActionTypes';

const UserState = (props) => {
    const initialState = {
        userSignupData: {},
        userLoginData: {},
    }

    const [state, dispatch] = useReducer(userReducer, initialState);


    const setUserSignupData = async (userSignupData) => {
        dispatch({  
            type: userActionTypes.SET_USER_SIGNUP_DATA,
            payload: userSignupData
        });
    };

    const setUserLoginData = async (userLoginData) => {
        dispatch({  
            type: userActionTypes.SET_USER_LOGIN_DATA,
            payload: userLoginData
        });
    };

    return (
        <userContext.Provider
          value={{
            userSignupData: state.userSignupData,
            userLoginData: state.userLoginData,
            setUserSignupData,
            setUserLoginData
          }}
        >
          {props.children}
        </userContext.Provider>
      );
}

export default UserState;