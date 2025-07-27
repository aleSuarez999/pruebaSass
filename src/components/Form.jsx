import React, { useEffect, useState } from 'react'
import Text from './Text'
import Button from './Button'
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Form({
    inputsArray,
    values,
    errors,
    onChange,
    onSubmit
}) {

//console.log(inputsArray)
//console.log(values)
  return (
    <>
      <form  onSubmit={onSubmit} className='form  col-12 col-xs-12 col-md-10 col-lg-10 col-xl-8 col-xxl-8' >
       {
        inputsArray.map(
          ({name, label ,type}) => 
          
            <Box key={name} className="form__input-group">
                <Text as="label" className="form__label" htmlFor={name}>{label}
                  <input id={name} name={name} type={type} value={values[name]}  className='form__input' onChange={onChange} />
                  {console.log({name})}
                  <Text as='span' >{errors[name]}</Text>

                </Text>
            </Box>
       )}

       <Button as="submit"  className="form__submit" label={<>Enviar <FontAwesomeIcon icon={faPaperPlane} /></>} />

      </form>
    
    </>
  )
}

export default Form