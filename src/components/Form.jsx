import React, { useEffect, useState } from 'react'
import Text from './Text'
import Button from './Button'
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Select from './Select'

function Form({
    inputsArray,
    values,
    errors,
    onChange,
    onBlur,
    onSubmit
}) {

 // const [select, setSelect] = useState({ label:"", name:"", from:1, to:100 })

//label={label} name={name} from={from} to={to}
//console.log(inputsArray)
//console.log(values)
  return (
    <>
      <form  onSubmit={onSubmit} className='form  col-12 col-xs-12 col-md-10 col-lg-10 col-xl-8 col-xxl-8' >
       {
        inputsArray.map(
          ({name, label ,type, to, from}) => 
          
            <Box key={name} className={`form__input-group ${ (type == "checkbox") ? "d-flex align-center w-10":"" }`} >
                <Text as="label" className="form__label" htmlFor={name}>{label}  </Text>
                  { 
                  
                    (type == "select") ? (
                      <Select id={name} 
                      name={name} 
                      value={values[name]} 
                      className='form__input' 
                      onChange={onChange}  
                      onBlur={onBlur}
                      from={from}  to={to} />
                    )
                    :
                    (<input id={name} 
                      name={name} 
                      type={type} 
                      value={values[name]} 
                      onChange={onChange}
                      className={`form__input${errors[name] ? " with-error" : ""}`}
                      onBlur={onBlur} />)
                  
                  }
 
                  {errors[name] && <Text as='p' className="form__error" >{errors[name]}</Text>}

              
            </Box>
       )}

       <Button as="submit"  className="btn form__submit" label={<>Enviar <FontAwesomeIcon icon={faPaperPlane} /></>} />

      </form>
    
    </>
  )
}

export default Form