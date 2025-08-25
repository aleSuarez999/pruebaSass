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

export const postCart = async (body) => {
    try {
        const resp = await axiosInstance.post("/carts", body)
        if (resp.data.ok)
        {
            console.info("Alta de pedido ok")
            return resp.data
        }
        else
            console.error(resp.data.msg)
    } catch (error) {
        console.error("Error en el proceso del Carrito")
        return error
    }
}

export const postProducto = async (body) => {
    //console.info("postProductoAEnviar: ", body)
    try {
        
        const resp = await axiosInstance.post("/products", body)
        //console.info("postProductoRecibido: ", resp)
        //no llega acá cuando es duplicado
        console.log("RESPUESTA: ", resp)
        if (resp.data.ok)
        {
            console.info("Alta de producto ok")
            return resp.data
        }
        else
            console.error("Alta incompleta")
    } catch (error) {
         console.error("Alta incompleta")
        return error
    }


} 

export const getMessages = async () => {
    const resp = await axiosInstance.get("/contacts")
    return resp.data
}