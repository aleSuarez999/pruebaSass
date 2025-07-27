import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import { useForm } from '../hooks/useForm'
import Form from '../components/Form'
import Box from '../components/Box'

const campos = [
    {
        name: "name",
        type: "text", 
        label: "Nombre",
        validation: value => value.length > 2,
        errorText: "El nombre del producto es muy corto, escriba mas de 2 letras"
    }, 
    {
        name: "price",
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
        validation: value => true
    }, 
    {
        name: "largeDescription",
        type: "text", 
        label: "Descripción Larga",
        validation: value => true
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
        label: "Edad Desde:",
        validation: value => true
    }, 
    {
        name: "ageTo",
        type: "select",
        from: 1,
        to: 10,
        label: "Edad Hasta:",
        validation: value => true
    }

    ]

function Alta() {

    const {values, errors,  onChange, onBlur, resetForm, onSubmit}  = useForm({
        name: "",
        price: 0,
        stock: 1,
        mesage: "",
        ageFrom: 1,
        ageTo: 10
    }, campos)


  return (
    <Container as="main">
        <Text as="h2" className="">Alta de producto</Text>
        <Box className='product__grid'>
            
             <Form
                values={values} 
                onChange={onChange} 
                onBlur={onBlur} 
                onSubmit={onSubmit}
                inputsArray={campos} 
                   errors={errors}
                   />
        </Box>
    </Container>
  )
}

export default Alta

