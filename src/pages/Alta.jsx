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
        errorText: "El nombre del producto es incorrecto"
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
        validation: value => value.length > 0,
        errorText: "La marca es un campo requerido"
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
        validation: value => value.length > 3,
        errorText: "La Descripción  Corta debe tener al menos 4 caracteres"
    }, 
    {
        name: "largeDescription",
        type: "text", 
        label: "Descripción Larga",
        validation: value => value.length > 3,
        errorText: "La Descripción  Larga debe tener al menos 4 caracteres"
    }, 
    {
        name: "freeDelivery",
        type: "checkbox", 
        label: "Envio Gratis",
        validation: true,
        errorText: "El freeDelivery  Corta debe tener al menos 4 caracteres"
    }, 
    {
        name: "ageFrom",
        type: "select",
        from: 1,
        to: 10,
        label: "Edad Desde:",
        validation: value => value > 0,
        errorText: "La edad desde no puede ser menor a cero"
    }, 
    {
        name: "ageTo",
        type: "select",
        from: 1,
        to: 10,
        label: "Edad Hasta:",
        validation: value => value > 0 && value <= 100,
        errorText: "La edad hasta no puede ser menor a cero ni mayor a 100 años"
    }

    ]



function Alta() {

    const {values, errors,  onChange, resetForm, onSubmit}  = useForm({
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
                onSubmit={onSubmit}
                inputsArray={campos} 
                   errors={errors}
                   />
        </Box>
    </Container>
  )
}

export default Alta

