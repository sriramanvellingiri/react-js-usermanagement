import axiosInstance from "../../../helpers/axiosInstance";
import { USER_LOADING, USER_SUCCESS, USER_ERROR } from "../../../constants/actionTypes";

const getUsers = () => (dispatch) => {
    dispatch({
        type: USER_LOADING,
    });

    axiosInstance().get('/api/v1/genericUser')
    .then((res) => {
        dispatch({
            type:USER_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err)=> {
        dispatch({
            type:USER_ERROR,
            payload: err.response? err.response.data : "COULD NOT CONNECT"
        });
    });
} 

export default getUsers;