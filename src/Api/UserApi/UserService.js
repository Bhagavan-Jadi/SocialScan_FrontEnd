import {apiClient} from "../../Api/ApiClient"



export const createUser 
        = (user) => apiClient.post(`/users`,user)

export const loginUser
        =(user) =>apiClient.post(`/users/login`,user)