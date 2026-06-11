import axios from "axios"


const authApiInstance = axios.create({
    baseURL : "https://viora-backend-ew79.onrender.com/api/auth" ,
    withCredentials : true 
})

authApiInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})



export async function register({ email, contact, password, fullname, isSeller }) {
    const response = await authApiInstance.post("/register", { email, contact, password, fullname, isSeller })
    if (response.data.token) {
        localStorage.setItem("token", response.data.token)
    }
    return response.data
}


export async function login({ email, password }) {
    const response = await authApiInstance.post("/login", { email, password })
    if (response.data.token) {
        localStorage.setItem("token", response.data.token)
    }
    return response.data
}

export async function getMe(){
    const response = await authApiInstance.get("/me")
    return response.data
}