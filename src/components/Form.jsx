import React, { useEffect, useState } from 'react'
import Text from './Text'
import Button from './Button'

function Form() {


  const [userName, setUsername] = useState("")

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    pass: ""
  })

  const [values, setValues] = useState({
    name: "",
    lastname: "",
    pass: ""
  })
/*
  useEffect(() => {
      setErrors({
        name: (values.name.length <= 3 && values.name ) ? "Mal - Ingrese mas de 3 letras": "",
        lastname:(values.lastname.length <= 3 && values.lastname ) ? "Mal - Ingrese mas de 3 letras": "",
        pass: (values.pass === "") ?  "No puede estar el pass vacío": ""
      })
 

  }, [values]) // ante un cambio en el array de values , se dispara onHandleChange
  
*/
  const handleChange = (e) => {
  
    setValues({ 
      ...values,
      [e.target.name]: e.target.value // va entre corchetes isempre que quiera que el 
      // key sea variable
      
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
      setErrors({
      name: (values.name.length <= 3 && values.name ) ? "Mal - Ingrese mas de 3 letras": "",
      lastname:(values.lastname.length <= 3 && values.lastname ) ? "Mal - Ingrese mas de 3 letras": "",
      pass: (values.pass === "") ?  "No puede estar el pass vacío": ""
    })
    if (values.pass)
    {
      setUsername(`${values.name} ${values.lastname}`)
    }
    else{
    }

  }

  return (
    <>
      <form className='form mb-100' onSubmit={handleSubmit} >
          <Text as="label" text="Nombre" htmlFor="name" />

          <input type='text' id='name' name='name' autoComplete='true'
            value={values.name} 
            onChange={handleChange} placeholder='Ingrese mas de 3 letras'  />
          <Text as="span" text={errors.name} className="alert-color" />

          <Text as="label" text="Apellido" htmlFor="lastname"  />

          <input type='text' id='lastname' name='lastname' autoComplete='true' 
            value={values.lastname} 
            onChange={handleChange}  />
            <Text as="span" text={errors.lastname} className="alert-color" />

          <Text as="label" text="contraseña" htmlFor="pass" />

          <input type='password' id='pass' name='pass' 
            value={values.pass}
            onChange={handleChange} />
            <Text as="span" text={errors.pass} className="alert-color" />

          <Button type="submit" label="iniciar sesion" disabled={!(values.name && values.lastname && values.pass)} />
      </form>
      {
        userName ? <Text as="h2" text={userName} /> : undefined
      }
    </>
  )
}

export default Form