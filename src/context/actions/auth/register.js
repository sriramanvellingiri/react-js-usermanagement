import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERROR } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance"

export const registers = ( {
    firstName:first_name, 
    lastName: last_name, 
    password, 
    email,
    role, 
    address,
    city
    } ) => (dispatch) => {
     
    dispatch({
        type:REGISTER_LOADING,
    });

    axiosInstance().post('/api/v1/genericUser',{
        first_name, 
        last_name, 
        password, 
        email,
        profile : {
            address : address,
            city : city,
            code : "641035",
            role: role
        }
    })
    .then( (res) => {
        dispatch({
            type:REGISTER_SUCCESS,
            payload: res.data
        });
    })
    .catch((err) =>  { 
        dispatch({
            type:REGISTER_ERROR,
            payload: err.response? err.response.message : "COULD NOT CONNECT"
        })
    })
};