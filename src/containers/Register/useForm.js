 import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { registers } from "../../context/actions/auth/register"
import { GlobalContext } from "../../context/Provider"
//import { Form } from "semantic-ui-react"

export default () => {
    const [form, setForm] = useState({})
    
    const history = useHistory()
    const { authDispatch, authState: {
        auth : { loading, error, data }
    } } = useContext(GlobalContext)

    useEffect(() => {
        if(data) {
            console.log('data',data)
            history.push('/auth/login')
        }
    })

    const onChange= (e,{name, value}) => {
        setForm({...form,[name]: value})
    }

    const registerFormValid =
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.password?.length ||
        !form.address?.length ||
        !form.city?.length ||
        !form.email?.length;

    const onSubmit = () => {
        registers(form)(authDispatch)
    }
    //console.log(form)

    return { form, onChange, registerFormValid, onSubmit, loading}
}