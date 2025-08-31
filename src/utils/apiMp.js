import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const createPreference = async (req, res) => {
    const {body} = req
    // llamo al backend quien tiene la api key , en front tengo solo la public
    try {
        const resp = await axiosInstance.post("/mp/preference", {
            body
        })
        if (resp)
        {
            //viene ok, y products
           // console.log ("reepuests: ", resp) 
            const  id  = resp.data.id
           //console.info(id)
            return id
            return res.json({
                ok: true,
                msg: "id obtenido",
                id: id
            })
        }
        
    } catch (error) {

          console.log("error", error)

        
    }
    
}