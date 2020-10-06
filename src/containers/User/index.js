import React, { useContext, useEffect } from 'react'
import getUsers from '../../context/actions/users/getUsers'
import { GlobalContext } from "../../context/Provider"
import UserList from '../../layout/User/List'

const UserContainer = () => {

    const { usersDispatch, usersState } = useContext(GlobalContext)

    useEffect(() => {
        getUsers()(usersDispatch);
    },[])

    return (

        <UserList list={usersState}/>
        )
}  

export default UserContainer;