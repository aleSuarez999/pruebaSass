import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products")
    if (resp.data.ok)
    {
        //viene ok, y products 
        console.info("REspuesta api Products:  ", resp.data.products)
        return resp.data.products
    }
    
}

export const postContact = async (body) => {
    const resp = await axiosInstance.post("/contacts", body)
    console.info("REspuesta api Contacts:  ", resp)
    return resp.data


} 

export const postProducto = async (body) => {
    //console.info("postProductoAEnviar: ", body)
    const resp = await axiosInstance.post("/products", body)
    //console.info("postProductoRecibido: ", resp)
    //no llega acá cuando es duplicado
    if (resp.data.ok)
    {
        console.info("Alta de producto ok")
        return resp.data
    }
    else
        console.error("Alta incompleta")


} 

export const getMessages = async () => {
    const resp = await axiosInstance.get("/contacts")
    return resp.data
}