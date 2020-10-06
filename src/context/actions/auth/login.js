import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance"

export const login = ( {
    password, 
    email} ) => (dispatch) => {
     
    dispatch({
        type:LOGIN_LOADING,
    });

    axiosInstance().post('/api/v1/login',{
        password, 
        email
    })
    .then( (res) => {
        localStorage.token = res.data.data.token;
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        });
    })
    .catch((err) =>  { 
        dispatch({
            type:LOGIN_ERROR,
            payload: err.response? err.response.data : "COULD NOT CONNECT"
        })
    })
};