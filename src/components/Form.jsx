import React, { useEffect, useState } from 'react'
import Text from './Text'
import Button from './Button'
import Box from './Box'

function Form({
    inputsArray,
    values,
    onChange,
    onSubmit
}) {




  return (
    <>
      <form  onSubmit={onSubmit} className='form' >
       {
        inputsArray.map(
          ({name, label ,type}) => 
          
            <Box key={name} className="form__input-group" >
                <Text as="label" className="form__label" htmlFor={name}>{label}</Text>
                <input id={name} name={name} type={type}  className='form__input' onChange={onChange} />
                
            </Box>
       )}

      </form>
    
    </>
  )
}

export default Form