import React from 'react'
import Text from './Text'


function Form() {
  return (
    <form className='form'>
        <Text as="label" text="Nombre" htmlFor="name" />
        <input type='text' id='name' name='name' autoComplete='true' />

    </form>
  )
}

export default Form