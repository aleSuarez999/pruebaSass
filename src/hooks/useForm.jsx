import { useState } from "react"

export const useForm = (initialValues, campos) => {

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors ] = useState({})

    const onChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })

        const campo = campos.filter( obj => obj.name === target.name )[0]
        //console.log(campo)
        //console.log(campo.validation)
        //console.log(campo.validation(target.value))
        if (campo && campo.validation(target.value))
        {
                setErrors({ ...errors, [campo.name]: ""} )
        }
        else
        {
         console.log("no valido", campo.errorText)
            setErrors({ ...errors, [campo.name]: campo.errorText} )
        }
    }

    const onSubmit = (e) => {
        e.target.preventDefault()

    }

    const resetForm = () => {setValues(initialValues)}

    return ({
        values,
        errors,
        onChange,
        resetForm,
        onsubmit
    })

}