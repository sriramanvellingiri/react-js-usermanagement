import React from 'react'
import { Menu, Image, Button, Icon } from 'semantic-ui-react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

export default function Header() {
    const {pathname} = useLocation();
    const history = useHistory();

    const LogoutAction = () => {
        console.log('logout')
        localStorage.removeItem('token')
        history.push('/auth/login')
    }

    return (
        <Menu secondary>
            <Image src = {logo} width = {60} /> 
            <Menu.Item style={{ fontSize:24 }}> User Management</Menu.Item>
            { (pathname === '/' || pathname === '/user/list' ) && (
            <Menu.Item position="right">        
            <Button as={Link} to="/user/list" primary basic icon >
                <Icon name ="list"></Icon>
                 User List
            </Button>
            </Menu.Item>
            )}
            { (pathname === '/' || pathname === '/user/list' )&& (
            <Menu.Item> 
            <Button onClick={LogoutAction} color="red" basic icon >
                <Icon name ="log out"></Icon>
                Logout
            </Button></Menu.Item> )}
        </Menu>
    )
}  