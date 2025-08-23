import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products")
    if (resp.data.ok)
    {
        console.info("REspuesta api:  ", resp.data.products)
        return resp.data.products
    }
    
    
}

export const postContact = async (body) => {
    const resp = await axiosInstance.post("/contacts", body)
    return resp.data


} 

export const postProducto = async (body) => {
    const resp = await axiosInstance.post("/Producto", body)
    return resp.data


} 

export const getMessages = async () => {
    const resp = await axiosInstance.get("/contacts")
    return resp.data
}