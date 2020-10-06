import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { login } from "../../context/actions/auth/login"
import { GlobalContext } from "../../context/Provider"

export default () => {

    const [form, setForm] = useState({})
    const history = useHistory()
    const { authDispatch, authState: {
        auth : { loading, error, data }
    } } = useContext(GlobalContext)

    const onChange= (e,{name, value}) => {
        setForm({...form,[name]: value})
    }

    const loginFormValid =
        !form.password?.length ||
        !form.email?.length;

    const onSubmit = () => {
        login(form)(authDispatch)
    }
    
    useEffect(() =>{
        if(data) {
            if(data.data !== undefined && data.data.token !== null) {
                console.log('USEEFFECT',data)
                history.push('/user/list')  
            }
        }
    },[data])

    return { form, onChange, loginFormValid, onSubmit, loading, error}
} 