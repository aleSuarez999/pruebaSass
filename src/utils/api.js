import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/Producto")
    console.log (resp.data)
    return resp.data
}