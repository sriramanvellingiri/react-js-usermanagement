import React from 'react';
import {createContext, useReducer} from "react"
import authIntialState from "./intialstates/authIntialState";
import usersIntialState from "./intialstates/usersIntialState";
import auth from "./reducers/auth";
import users from "./reducers/users";

export const GlobalContext = createContext({})
export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authIntialState)
    const [usersState, usersDispatch] = useReducer(users, usersIntialState)

    return (
        <GlobalContext.Provider value= {
         {
             authState,
             authDispatch,
             usersState,
             usersDispatch  
         }   
        }>
            {children}
        </GlobalContext.Provider>
    )
};

