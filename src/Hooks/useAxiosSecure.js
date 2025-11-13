import axios from "axios";

const instance = axios.create({
    baseURL: 'https://the-book-haven-server-two.vercel.app'
})

export const useAxiosSecure = () =>{


    return instance
}