import { useState } from "react"

export const useForm = (initialValues, validations) => {

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors ] = useState({})

      const onChange = ({ target }) => {
        //console.log(target)
        setValues({
            ...values,
            [target.name]: target.type === "checkbox" ? target.checked : target.type === "file" ? target.files[0] : target.value
        })
    }

      const onBlur = ({ target }) => { // uso para el blur porque lo pide el ejercicio
    
      if (validations[target.name] && !validations[target.name].validation(target.value)) {
            setErrors({...errors, [target.name]: validations[target.name].errorText})
        } else {
            setErrors({...errors, [target.name]: undefined})
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