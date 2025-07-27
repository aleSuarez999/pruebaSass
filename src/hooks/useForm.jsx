import { useState } from "react"

export const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues)

    const onChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const onSubmit = (e) => {
        e.target.preventDefault()

    }

    const resetForm = () => {setValues(initialValues)}

    return ({
        values,
        onChange,
        resetForm,
        onsubmit
    })

}