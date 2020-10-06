import React from 'react'
import RegisterUI from '../../layout/Register'
import useForm from './useForm'


const  RegisterContainer = () => {
    
   return (
       <RegisterUI form={useForm()}/>
   )
}  

export default RegisterContainer;