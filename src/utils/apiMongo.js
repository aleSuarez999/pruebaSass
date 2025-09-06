import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products")
    if (resp.data.ok)
    {
        //viene ok, y products 
       // console.info("REspuesta api Products:  ", resp.data.products)
        return resp.data.products
    }
    
}

export const getProductById = async (id) => {
    try {
        const resp = await axiosInstance.get(`products/${id}`)
       // console.log(resp)
        if (resp.data.ok)
        {
            //console.info("trajo el producto", resp.data.products)
            return resp.data.products
        }
    } catch (error) {
        console.error('Error al obtener producto:', error)
        throw error
    }
    
}
export const postContact = async (body) => {
    //console.info("apiMongo postContact")
    try {
        const resp = await axiosInstance.post("/contacts", body)
        return resp.data
        
    } catch (error) {
       //console.log("error1>>>", error)
       //console.log("error2>>>", error.response.data.errors.message)
       return error
    }
    


} 

export const postCart = async (body) => {
    try {
        const resp = await axiosInstance.post("/cart", body)
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

export const postProducto = async body => {
    const formData = new FormData()

    Object.entries(body).forEach(([key, value]) => {
        console.log(key, value)
        formData.append(key, value)
    })
    console.log(body)
    const resp = await axiosInstance.post("/products", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return resp.data.products
}

export const getMessages = async () => {
    const resp = await axiosInstance.get("/contacts")
    return resp.data
}