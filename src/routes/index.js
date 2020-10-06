//import React from 'react'
import LoginContainer from '../containers/Login'
import RegistrationContainer from '../containers/Register'
import DashboardContainer from '../containers/Dashboard'
import UserContainer from '../containers/User'

const routes = [
    {
        'path' : '/auth/register',
        'component' : RegistrationContainer,
        'title' : 'Registration',
        'needsAuth' : false,
    },
    {
        'path' : '/auth/login',
        'component' : LoginContainer,
        'title' : 'Login',
        'needsAuth' : false,
    },
    {
        'path' : '/user/list',
        'component' : UserContainer,
        'title' : 'User',
        'needsAuth' : true,
    },
    {
        'path' : '/',
        'component' : DashboardContainer,
        'title' : 'Dashboard',
        'needsAuth' : true,
    },
]

export default routes;