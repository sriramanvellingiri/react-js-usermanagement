import axios from "axios"

export default ( history = null) => {
    const baseURL = 'http://127.0.0.1:8000/'
    let headers = {}

    if (localStorage.token) {
         headers = { "Authorization": "Token " + localStorage.token }
    }
    
    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers,
    })
    
    axiosInstance.interceptors.response.use(
        (response) =>
            new Promise((resolve, reject) => {
                resolve(response)
            }), (error) => {
                if (!error.response) {
                    return new Promise((resolve, reject) => {
                        reject(error)
                    })
                }
                if (error.response.status === 403) {
                    localStorage.removeItem("token")
                    window.location = '/auth/login';
                } else {
                    return new Promise((resolve, reject) => {
                        reject(error)
                    })
                }  
            }
    );
    return axiosInstance
};