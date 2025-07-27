import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import { useForm } from '../hooks/useForm'
import Form from '../components/Form'
import Box from '../components/Box'

    const campos = [
                {
                    name: "name",
                    label: "Nombre",
                    validation: value => value.length > 2,
                    errorText: "El nombre es incorrecto"
                }, 
                {
                    name:"email",
                    label: "E-mail",
                    validation: value => {
                        const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
                        return regexp.test(value);
                    },
                    errorText: "El email no tiene el formato correcto"
                }, 
                {
                    name:"subject",
                    label: "Asunto",
                    validation: value => value.length > 0,
                    errorText: "El asunto es obligatorio"
                }, 
                {
                    name:"body",
                    label: "Mensaje",
                    validation: value => value.length > 0,
                    errorText: "Ingrese un texto"
                }

            ]

function ContactUs() {


    const {values, onChange, errors, resetForm, onSubmit} = useForm({ name: "", email: "", subject: "", mesage: "" }, campos)



    return (
    <Container as="main">
        <Text as="h2" className="">Contáctenos</Text>
        <Box className='product__grid'>
            
            <Form
                values={values} 
                onChange={onChange} 
                onSubmit={onSubmit}
                inputsArray={campos} 
                errors={errors}
                />
        </Box>
    </Container>
  )
}

export default ContactUs

/*



const inputsArray = [
    {
        name: "name",
        validation: value => value.length > 2,
        errorText: "El nombre del producto es incorrecto"
    }, 
    {
        name: "price",
        validation: value => value > 0,
        errorText: "El precio debe ser mayor a cero"
    }, 
    {
        name: "stock",
        validation: value => value > 0,
        errorText: "El precio stock ser mayor a cero"
    }, 
    {
        name: "brand",
        validation: value => value.length > 0,
        errorText: "La marca es un campo requerido"
    }, 
    {
        name: "category",
        validation: value => value.length > 3,
        errorText: "La categoría debe tener al menos 4 caracteres"
    }, 
    {
        name: "short_description",
    }, 
    {
        name: "large_description",
    }, 
    {
        name: "free_delivery",
    }, 
    {
        name: "age_from",
        validation: value => value > 0,
        errorText: "La edad desde no puede ser menor a cero"
    }, 
    {
        name: "age_to",
        validation: value => value > 0 && value <= 100,
        errorText: "La edad hasta no puede ser menor a cero ni mayor a 100 años"
    }, 
]
*/