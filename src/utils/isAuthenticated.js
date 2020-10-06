
const isAuthenicated = () => {
    return (
        !! localStorage.token
    )
}

export default isAuthenicated;