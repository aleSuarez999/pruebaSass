import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import { useForm } from '../hooks/useForm'
import Form from '../components/Form'
import Box from '../components/Box'
import { postContact } from '../utils/apiMongo'
import MensajeEnvio from '../components/MensajeEnvio'

    const campos = [
                {
                    name: "name",
                    label: "Nombre",
                    type: "text",
                    validation: value => value.length > 2,
                    errorText: "El nombre es incorrecto"
                }, 
                {
                    name:"email",
                    label: "E-mail",
                    type: "email",
                    validation: value => {
                        const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
                        return regexp.test(value);
                    },
                    errorText: "El email no tiene el formato correcto"
                }, 
                {
                    name:"subject",
                    label: "Asunto",
                    type: "text",
                    validation: value => value.length > 2,
                    errorText: "El asunto es obligatorio"
                }, 
                {
                    name:"message",
                    label: "Mensaje",
                    type: "textarea",
                    validation: value => value.length > 10,
                    errorText: "Ingrese un mensaje"
                }

            ]

function ContactUs() {


    const {values, onChange, onBlur,errors, resetForm, onSubmit} = useForm({ name: "", email: "", subject: "", message: "" }, campos)
 
    const [enviado, setEnviado] = useState("")
    const [msg, setMsg] = useState("")
    const [mostrarMensaje, setMostrarMensaje] = useState(false)

    const okMessage = (estado) => {
    setEnviado(estado) // declaro si fue exito o no
    setMostrarMensaje(true) // muestro mensaje
  }

   useEffect(() => {
      if (mostrarMensaje) {
        // si true timeout para que desaparezca en 3 segundos
            const timer = setTimeout(() => setMostrarMensaje(false), 3000);
            return () => clearTimeout(timer); 
        }
    }, [mostrarMensaje])
    

    const preSubmit = (e) => {
       

        if (Object.values(errors).every(val => !val))
        {
            postContact(values)
                .then( resp =>
                    {
                        console.info("INFO RESPUESTA->", resp)
                        if (resp.ok){
                            setMsg("Su mensaje se ha enviado. Gracias.")
                            okMessage(true)
                            resetForm()
                        }
                        else{
                            setMsg("No se pudo enviar su mensaje.")
                            okMessage(false)
                            
                        }
                    }
                )
               
                .catch(err => console.error(err))
                .finally()
        }
        else
        {
            okMessage(false, "Su mensaje no ha podido enviarse, revise los campos del formulario")
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (campos.every(input => input.validation(values[input.name])))
            preSubmit(e)
        else
        {
            okMessage(false)
        }
    }
    
    return (
    <Container as="main">
        <Text as="h2" className="">Contáctenos</Text>
        {(mostrarMensaje) && <MensajeEnvio enviado={enviado} msg={msg} />}
       
        <Box className='product__grid'>
            
            <Form
                values={values} 
                onChange={onChange} 
                onBlur={onBlur} 
                onSubmit={handleSubmit}
                inputsArray={campos} 
                errors={errors}
                />
        </Box>

  
    </Container>
  )
}

export default ContactUs
