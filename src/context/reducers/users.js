import { USER_LOADING, USER_SUCCESS, USER_ERROR } from "../../constants/actionTypes";

const users=(state,{payload, type}) => {
    switch(type) {
        case USER_LOADING:
            return {
                ...state, //need to understand
                users:{
                    ...state.users,
                    loading:true,
                }
            }

        case USER_SUCCESS:
            return {
                ...state, //need to understand
                users:{
                    ...state.users,
                    loading:false,
                    data: payload,
                }
            }

        case USER_ERROR:
            return {
                ...state, //need to understand
                users:{
                    ...state.users,
                    loading:false,
                    error:payload
                }
            }
            
        default:
            return state;
    }
}

export default users;