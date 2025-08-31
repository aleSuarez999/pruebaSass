import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import { useForm } from '../hooks/useForm'
import Form from '../components/Form'
import Box from '../components/Box'
import { postProducto } from '../utils/apiMongo'
import MensajeEnvio from '../components/MensajeEnvio'


const validationsUpload = {
    name: {
        validation: value => value.length > 2, 
        errorText: "El nombre del producto es incorrecto"
    },
    amount: {
        validation: value => value > 0, 
        errorText: "El precio debe ser mayor a cero"
    },
    stock: {
        validation: value => value > 0, 
        errorText: "El stock debe ser mayor a cero"
    },
    brand: {
        validation: value => value.length > 0, 
        errorText: "La marca es un campo requerido"
    },
    category: {
        validation: value => value.length > 3, 
        errorText: "La categoría debe tener al menos 4 caracteres"
    },
    ageFrom: {
        validation: value => value > 0, 
        errorText: "La edad desde debe ser mayor a cero"
    },
    ageTo: {
        validation: value => value > 0 && value <= 100, 
        errorText: "La edad hasta debe ser mayor a cero y menor o igual a 100"
    },
}

const inputsArray=[
                            {
                                name: "name",
                                type: "text",
                                label: "Nombre"
                            },
                            {
                                name: "amount",
                                type: "number",
                                label: "Precio"
                            },
                            {
                                name: "stock",
                                type: "number",
                                label: "Stock"
                            },
                            {
                                name: "brand",
                                type: "text",
                                label: "Marca"
                            },
                            {
                                name: "category",
                                type: "text",
                                label: "Categoría"
                            },
                            {
                                name: "shortDescription",
                                type: "text",
                                label: "Descripción corta"
                            },
                            {
                                name: "largeDescription",
                                type: "text",
                                label: "Descripción larga"
                            },
                            {
                                name: "freeDelivery",
                                type: "checkbox",
                                label: "Envío gratis"
                            },
                            {
                                name: "ageFrom",
                                type: "number",
                                label: "Edad desde"
                            },
                            {
                                name: "ageTo",
                                type: "number",
                                label: "Edad hasta"
                            },
                            {
                                name: "image",
                                type: "file",
                                label: "URL imagen"
                            },
                        ]

function Alta() {

    const [mostrarMensaje, setMostrarMensaje] = useState(false)
    const [enviado, setEnviado] = useState("")
    const [msg, setMsg] = useState("")

   useEffect(() => {
      if (mostrarMensaje) {
        // si true timeout para que desaparezca en 3 segundos
            const timer = setTimeout(() => setMostrarMensaje(false), 3000);
            return () => clearTimeout(timer); 
        }
    }, [mostrarMensaje])

    const {values, errors,  onChange, onBlur, resetForm, onSubmit}  = useForm({
        name: "",
        amount: 0,
        stock: 1,
        ageFrom: 1,
        brand: "",
        category: "",
        ageTo: 10,
        freeDelivery: false,
        shortDescription: "",
        largeDescription: ""
    }, validationsUpload)
/*

    const handleSubmit = (e) => {
        e.preventDefault()

     //   if (validationsUpload.every(input => input.validation(values[input.name])))
        if (Object.values(errors).every( val => !val )) 
            preSubmit(e)
        else
        {
            setMsg("Error en el formulario, verifique los campos por favor")
            okMessage(false)
        }
    }
  */
 
      const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(errors).every( val => !val )) {
            postProducto(values)
                .then(() => {
                        
                           okMessage(true)
                           setMsg("Producto enviado ok")
                })
                .then(() => resetForm())
                .catch( err => console.error(err) )
        } else {
            console.log("Formulario inválido")
        }
    }
    const preSubmit = (e) => {
          
           
            if (Object.values(errors).every(val => !val))
            {
                // extraigo freeDelivery para que no de error el mongo    
                 const processedValues = {
                    ...values, 
                    freeDelivery: (values.freeDelivery === "on")
                }


                postProducto(processedValues) // llamo a la api
                    .then( res => {
                         console.log("RES->", res)
                        if (res.ok)
                        {
                           
                           okMessage(true)
                           setMsg("Producto enviado ok")
                           resetForm()
                        }
                        else{
                            //console.log("res", res)
                            console.log(res.status)
                            switch (res.status) {
                                case 409:
                                        okMessage(false)
                                        setMsg("El producto ya se encuentra en la base.")
                                    break;
                            
                                default:
                                    break;
                            }
                        }
                    }
                        
                    )
                    .catch(err => console.error(err))
                    .finally()
                }
            
            else
            {
                setMsg("Revise los campos del formulario")
                okMessage(false)
                
            }
        }

const okMessage = (estado) => {
    setEnviado(estado) // declaro si se envio o no
    setMostrarMensaje(true) // muestro mensaje
}
  return (
    <Container as="main">
        <Text as="h2" className="">Alta de producto</Text>
        {(mostrarMensaje) && <MensajeEnvio enviado={enviado} msg={msg} />}
        <Box className='product__grid'>
             <Form
                values={values} 
                onChange={onChange} 
                onBlur={onBlur} 
                resetForm={resetForm} 
                onSubmit={handleSubmit}
                inputsArray={inputsArray} 
                errors={errors}
                   />
        </Box>
    </Container>
  )
}

export default Alta

