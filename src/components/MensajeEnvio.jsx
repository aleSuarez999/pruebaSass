import React, { useEffect, useState } from 'react'
import Box from './Box'

function MensajeEnvio({
    enviado
    
}) {

    const [clase, setClase] = useState("")
        const [mensaje, setMessage] = useState("")
   
    useEffect(() => {
                (enviado == 1) ? setClase("okMessage") : setClase("errorMessage")
              if (enviado == 1)
              {
                 setMessage("El formulario se envió con éxito.")
              }
              else{
                  setMessage("El formulario no pudo ser enviado, revise los requerimientos de cada campo")

              }

    }, [enviado])
    
  return (
            <Box as="span" 
            className={`${clase} ${(mensaje !== "") ? 
                "mostrar" : 
                "ocultar"} `} >
                    {mensaje}
                    </Box>
  )
}

export default MensajeEnvio