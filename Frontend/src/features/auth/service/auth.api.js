import axios from "axios"


const authApiInstance = axios.create({
    baseURL : "/api/auth" ,
    withCredentials : true 
})


export async function register({email , contact , password , fullname , isSeller}) {
    const response = await authApiInstance.post("/register" , {
        email ,
        contact ,
        password ,
        fullname ,
        isSeller
    })
    return response.data
}


export async function login({ email , password}) {
    const reposne = await authApiInstance.post("/login" , {
        email , password
    })
    return respone.data
}

export async function getMe(){
    const reposne = await authApiInstance.get("/me")
    return respone.data
}