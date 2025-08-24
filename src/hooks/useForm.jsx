import { useState } from "react"

export const useForm = (initialValues, campos) => {

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors ] = useState({})

    const onChange = ({ target }) => { 
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

      const onBlur = ({ target }) => { // uso para el blur porque lo pide el ejercicio
     
         const campo = campos.filter( obj => obj.name === target.name )[0]

        if (campo && campo.validation(target.value))
        {
            setErrors({ ...errors, [campo.name]: ""} )
        }
        else
        {
            setErrors({ ...errors, [campo.name]: campo.errorText} )
        }
    }

    const onSubmit = (e) => {
        e.target.preventDefault()
        alert("submit")
    }

    const resetForm = () => {setValues(initialValues)}

    return ({
        values,
        errors,
        onChange,
        onBlur,
        resetForm,
        onSubmit
    })

}