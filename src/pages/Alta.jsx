import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import { useForm } from '../hooks/useForm'
import Form from '../components/Form'
import Box from '../components/Box'
import { postProducto } from '../utils/apiMongo'
import MensajeEnvio from '../components/MensajeEnvio'

function Alta() {

const campos = [
    {
        name: "name",
        type: "text", 
        label: "Nombre",
        validation: value => value.length > 2,
        errorText: "El nombre del producto es muy corto, escriba mas de 2 letras"
    }, 
    {
        name: "amount",
        type: "number", 
        label: "Precio",
        validation: value => value > 0,
        errorText: "El precio debe ser mayor a cero"
    }, 
    {
        name: "stock",
        type: "number", 
        label: "Stock",
        validation: value => value > 0,
        errorText: "El precio stock ser mayor a cero"
    }, 
    {
        name: "brand",
        type: "text", 
        label: "Marca",
        validation: value => value.length > 3,
        errorText: "La marca  debe tener al menos 4 caracteres"
    }, 
    {
        name: "category",
        type: "text", 
        label: "Categoria",
        tyle: "text", 
        validation: value => value.length > 3,
        errorText: "La categoría debe tener al menos 4 caracteres"
    }, 
    {
        name: "shortDescription",
        type: "text", 
        label: "Descripción Corta",
        validation: value => (value.length > 3 && value.length < 50),
        errorText: "La descripcion corta debe tener entre 3 y 30 caracteres"
    }, 
    {
        name: "largeDescription",
        type: "text", 
        label: "Descripción Larga",
        validation: value => (value.length > 3 && value.length < 300),
        errorText: "La descripcion corta debe tener entre 3 y 300 caracteres"
    }, 
    {
        name: "freeDelivery",
        type: "checkbox", 
        label: "Envio Gratis",
        validation: value => true

    }, 
    {
        name: "ageFrom",
        type: "select",
        from: 1,
        to: 10,
        label: "Edad Desde",
        validation: value => true
    }, 
    {
        name: "ageTo",
        type: "select",
        from: 1,
        to: 20,
        depends: "ageFrom",
        label: "Edad Hasta",
        validation: value => true
    }
    , 
    {
        name: "image",
        type: "text",
        label: "Imagen:",
        validation: value => true
        
        /*
        se remueve validacion por este tipo de imagenes sin extension
        averiguar como validar que sea imagen valida sin ver la extension
        https://images.unsplash.com/photo-1587654780291-39c9404d746b
        validation: value => {
        const regexp = new RegExp(/\.(jpg|jpeg|webp|png)$/i);

           // console.log(regexp.test(value))
            return regexp.test(value) },
        errorText: "No es una imagen valida los formatos permitidos son jpg|jpeg|webp|png"
        */
    }
    ]
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
        largeDescription: "", 
        image: ""
    }, campos)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (campos.every(input => input.validation(values[input.name])))
            preSubmit(e)
        else
        {
            setMsg("Error en el formulario, verifique los campos por favor")
            okMessage(false)
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
                        if (res.ok)
                        {
                            console.log(res)
                           okMessage(true)
                           setMsg("mensaje enviado ok")
                        }
                    }
                        
                    )
                    .catch(err => console.error(err))
                    .finally(resetForm)
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
                inputsArray={campos} 
                errors={errors}
                   />
        </Box>
    </Container>
  )
}

export default Alta

