import React, { useState } from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import { useForm } from '../hooks/useForm'
import Form from '../components/Form'
import Box from '../components/Box'
import { postContact } from '../utils/api'

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
                    type: "text",
                    validation: value => value.length > 2,
                    errorText: "Ingrese un mensaje"
                }

            ]

function ContactUs() {


    const {values, onChange, onBlur,errors, resetForm, onSubmit} = useForm({ name: "", email: "", subject: "", message: "" }, campos)
    const [bigErrorMessage, setbigErrorMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        setbigErrorMessage("")
        if (Object.values(errors).every(val => !val))
        {
            postContact(values)
                .then(alert("mensaje enviado"))
                .catch(err => console.error(err))
                .finally(resetForm)
        }
        else
        {
            console.log("hay errores")
            setbigErrorMessage("El formulario no pudo ser enviado, revise los requerimientos de cada campo")
            const timer = setTimeout(() => {  setbigErrorMessage("") }, 3000);
            return () => clearTimeout(timer);
        }
    }
    
    return (
    <Container as="main">
        <Text as="h2" className="">Contáctenos</Text>
        <Box as="span" className={`errorMessage ${(bigErrorMessage !== "") ? "mostrar" : "ocultar"} `} >{bigErrorMessage}</Box>
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

        <Box>

        </Box>
    </Container>
  )
}

export default ContactUs
